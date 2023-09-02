import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { projectType } from "../../recoil/dashBoard/project";
import Path from "../../components/project/path";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import { BiSearch, BiKey, BiSolidCreditCard } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import useSessionStorage from "../../hooks/sesstionStorage";
import LocalPush from "../../hooks/localPush";
import PeopleSettings from "../../components/project/settings/people";
import Appearance from "../../components/project/settings/appearance";

export default function Settings({ item }: { item: projectType }) {
  const location = useLocation();
  const [projectInfo, setProjectInfo] = useSessionStorage("projectInfo", []);
  const projectNameRef = useRef<HTMLInputElement>(null);
  const projectRedirectUriRef = useRef<HTMLInputElement>(null);
  const [isExpanded, setIsExpanded] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [showNotification, setShowNotification] = useState({
    type: "success",
    duration: 4000,
    show: false,
  });

  useEffect(() => {
    let isMounted = true; // flag to track component mount status
    
    const timer = setTimeout(() => {
      if (isMounted) {
        setShowNotification({ ...showNotification, show: false });
      }
    }, 4000);
  
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [showNotification]);




  const HandleDelete = () => {
    let newPJArray = projectInfo.filter((pj) => pj.clientId !== item.clientId);
    setProjectInfo(newPJArray);
  };

  const toggleExpand = (index: number) => {
    setIsExpanded(prevIsExpanded => {
      const newIsExpanded = [...prevIsExpanded];
      newIsExpanded[index] = !newIsExpanded[index];
      return newIsExpanded;
    });
  };

  function editProject(e: React.FormEvent) {
    e.preventDefault();
    const formId = e.currentTarget.id;
    const newPJ = projectInfo.map((pj) => {
      if (pj.clientId === item.clientId) {
        if (formId === "projectName") {
          return { ...pj, projectName: projectNameRef.current?.value };
        } else if (formId === "redirectUri") {
          return { ...pj, redirectUri: projectRedirectUriRef.current?.value };
        }
      } else return pj;
    });
    setProjectInfo(newPJ);
    setShowNotification({...showNotification,show:true})
  }

  return (
    <div id="Settings" className="pb-20">
      {showNotification.show && (
        <LocalPush
          message="Successfully Saved!"
          duration={showNotification.duration}
          type={showNotification.type}
        />
      )}
      <Path pathname={location.pathname} />
      <div className="drop-shadow-md flex items-center bg-white mt-3 pl-3 rounded-md py-1">
        <BiSearch size={24} className="mr-2 " color="black" />
        <input
          type="search"
          className="w-full p-2 rounded-md text-black "
          placeholder="Search settings"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Search settings")}
        />
      </div>
      <div className="bg-white p-3 mt-8 border rounded-lg h-fit duration-300">
        <div
          className="flex justify-between items-center"
          onClick={() => toggleExpand(6)}
        >
          <div className="text-sm md:text-lg font-bold ml-1 text-black">
            Manage Projects
          </div>
          <button>
            {isExpanded[6] ? (
              <MdArrowDropDown size={42} color="black" />
            ) : (
              <MdArrowRight size={42} color="black" />
            )}
          </button>
        </div>
        {isExpanded[6] && (
          <div className="mt-2">
            <form
              id="projectName"
              onSubmit={editProject}
              className="flex flex-col md:flex-row w-full md:items-center md:gap-4"
            >
              <label className="text-gray-600 w-40 text-[0.9rem] md:text-[1rem] font-bold whitespace-nowrap">
                Project Name
              </label>
              <input
                className="h-8 md:h-12 md:text-lg bg-black/5 my-2 pl-3 rounded-lg w-full text-black text-[0.8rem]"
                placeholder={item.projectName}
                ref={projectNameRef}
                type={"text"}
              />
              <button
                type="submit"
                className="w-16 md:w-20 h-6 md:h-8 rounded-sm ml-auto text-white bg-[#006ECD] font-semibold text-[0.9rem] md:text-sm  drop-shadow-md hover:text-gray-300 active:drop-shadow-none duration-200"
              >
                SAVE
              </button>
            </form>
            <form
              onSubmit={editProject}
              id="redirectUri"
              className="flex flex-col md:flex-row w-full md:items-center md:gap-4"
            >
                <label className="text-gray-600 w-40 text-[0.9rem] md:text-[1rem] font-bold whitespace-nowrap">
                  Rediect Uri
                </label>
                <input
                  className="h-8 md:h-12 md:text-lg bg-black/5 my-2 pl-3 rounded-lg w-full text-black text-[0.8rem]"
                  placeholder={item.redirectUri}
                  ref={projectRedirectUriRef}
                  type={"text"}
                />
              <button
                type="submit"
                className="w-16 md:w-20 h-6 md:h-8 rounded-sm ml-auto text-white bg-[#006ECD] font-semibold text-[0.9rem] md:text-sm  drop-shadow-md hover:text-gray-300 active:drop-shadow-none duration-200"
                >
                SAVE
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <PeopleSettings/>
        <div className="">
          <div className="flex font-bold text-black mb-3  text-lg md:text-xl">Autofill</div>
          {settingsItems2.map((item) => (
            <div key={item.id} onClick={() => toggleExpand(item.id)}>
              <div className="flex justify-between items-center border border-inherit p-2 bg-white">
                <div className="flex items-center ml-2">
                  {item.icon}
                  <div className="text-black font-bold ml-2">{item.title}</div>
                </div>
                <button>
                  {isExpanded[item.id] ? (
                    <MdArrowDropDown size={42} color="black" />
                  ) : (
                    <MdArrowRight size={42} color="black" />
                  )}
                </button>
              </div>
        
              {isExpanded[item.id] && (
                <div className="bg-white p-4 font-bold text-black">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <Appearance/>
        
        <div className="flex w-full justify-between items-center mt-4">
          <div className="text-lg font-bold ml-1 text-red-500">
            Project Delete
          </div>
          <button
            className="w-20 h-10 border text-black rounded-lg bg-red-400"
            onClick={() => HandleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const settingsItems2 = [
  {
    id: 3,
    icon: <BiKey size={24} color="darkgray" />,
    title: "Passwords",
    content: "",
  },
  {
    id: 4,
    icon: <BiSolidCreditCard size={24} color="darkgray" />,
    title: "payment Methods",
    content: "",
  },
  {
    id: 5,
    icon: <MdLocationOn size={24} color="darkgray" />,
    title: "Addresses and more",
    content: "",
  },
];
