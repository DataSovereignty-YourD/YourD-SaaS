import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { projectState, projectType } from '../../recoil/dashBoard/project';
import { loginState } from '../../recoil/loginState';
import Path from './path';
import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';

export default function Settings({ item }: { item: projectType }) {
  const location = useLocation();
  const [newProjectName, setNewProjectName] = useState(item.projectName);
  const [project, updateProject] = useRecoilState(projectState);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const [isExpanded, setIsExpanded] = useState([false, false, false, false]);

  const ChangeName = (e: any) => {
    setNewProjectName(e.target.value);
  };

  const HandleSave = () => {
    let newPJArray = project.map((pj) => {
      if (pj.clientId === item.clientId) {
        return { ...pj, ProjectName: newProjectName };
      }
      return pj;
    });
    updateProject(newPJArray);
  };
  const handleLogout = () => {
    setLoggedIn(!isLoggedIn);
  };

  // const HandleLoginURL = () => {
  //     let newPJArray = project.map((pj) => {
  //         if (pj.clientId === item.clientId) {
  //             return { ...pj, WebLoginURL: newLoginURL }
  //         }
  //         return pj;
  //     });
  //     updateProject(newPJArray);
  // }

  const HandleDelete = () => {
    let newPJArray = project.filter((pj) => pj.clientId !== item.clientId);
    updateProject(newPJArray);
  };
  const toggleExpand = (index: number) => {
    const newIsExpanded = [...isExpanded];
    newIsExpanded[index] = !newIsExpanded[index];
    setIsExpanded(newIsExpanded);
    console.log(newIsExpanded);
  };
  
  const settingsItems = [
    {
      id: 0,
      icon: <BsPersonCircle size={36} color="darkgray" />,
      title: 'Person',
      content: '원하는 내용 추가',
    },
    {
      id: 1,
      title: '#Example',
      content: '',
    },
    {
      id: 2,
      title: '#Example',
      content: '',
    },
  ];

  return (
    <div id="Settings">
      <Path pathname={location.pathname} />
      <div className="bg-white p-4">
        <div className="p-3 border rounded-lg bg-blue-50 flex items-center">
          <BiSearch size={24} className="mr-2" color="black" />
          <input
            type="search"
            className="w-full p-2 rounded-md"
            placeholder="Search settings"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Search settings')}
          />
        </div>
      </div>

      <div className="bg-sky-50 p-4 mt-5 border rounded-lg">
        {settingsItems.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center ml-2">
                {item.icon}
                <div className="text-black font-bold ml-2">{item.title}</div>
              </div>
              <button onClick={() => toggleExpand(item.id)}>
                {isExpanded[item.id] ? (
                  <MdArrowDropDown size={42} color="black" />
                ) : (
                  <MdArrowRight size={42} color="black" />
                )}
              </button>
            </div>

            {isExpanded[item.id] && (
              <div className="mt-2">
                <div className="bg-white p-4 font-bold text-black">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-sky-50 p-4 mt-5 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-md font-bold ml-1 text-black">
            Manage Projects
          </div>
          <button onClick={() => toggleExpand(3)}>
            {isExpanded[3] ? (
              <MdArrowDropDown size={42} color="black" />
            ) : (
              <MdArrowRight size={42} color="black" />
            )}
          </button>
        </div>
        {isExpanded[3] && (
          <div className="mt-2">
            <div>
              <input
                className="h-12 text-lg bg-black/5 my-2 pl-3 rounded-lg w-full"
                placeholder={`${item.projectName}`}
                onChange={(e) => ChangeName(e)}
              />
              <button
                className="w-20 h-10 border rounded-lg text-white bg-[#006ECD] mx-4 font-semibold px-2 border-gray-400 shadow hover:text-gray-300"
                onClick={() => HandleSave()}
              >
                SAVE
              </button>
              <button className="w-18 h-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded-lg shadow">
                Cancel
              </button>
            </div>
            <div className="flex w-full justify-between items-center mt-4">
              <div className="text-lg font-bold ml-1 text-red-500">
                Project Delete
              </div>
              <button
                className="w-20 h-10 border rounded-lg bg-red-400"
                onClick={() => HandleDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
{
  /* <div className="bg-white p-3 text-black border rounded-lg mb-5">
                {item.redirectURLs.map((pj: any, index: any) => {
                    return (
                        <div key={index}>
                            <div className="text-md font-medium ml-1">Redirect URL {index + 1}</div>
                            <div className="flex w-full justify-center items-center">
                                <input className="h-12 text-lg bg-black/5 my-2 pl-3 rounded-lg w-full" placeholder={`${item.redirectURLs[index]}`} onChange={(e) => ChangeLoginUrl(e)} />
                                <button className="w-20 h-10 border rounded-lg text-white bg-[#006ECD] mx-4 font-semibold px-2 border-gray-400 shadow hover:text-gray-300" onClick={() => HandleLoginURL()}> SAVE</button>
                                <button className="w-18 h-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded-lg shadow">Cancle</button>
                            </div>
                        </div>
                    )
                })}
            </div> */
}
