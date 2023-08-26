import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { projectState, projectType } from '../../recoil/dashBoard/project';
import { loginState } from '../../recoil/loginState';
import Path from './path';
import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';
import { BiSearch, BiKey, BiSolidCreditCard } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { GoLinkExternal } from 'react-icons/go';

export default function Settings({ item }: { item: projectType }) {
  const location = useLocation();
  const [newProjectName, setNewProjectName] = useState(item.projectName);
  const [project, updateProject] = useRecoilState(projectState);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const [isExpanded, setIsExpanded] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isClicked, setIsClicked] = useState([false, false]);
  const [fontSize, setFontSize] = useState('medium');
  const handleToggleHomeButton = () => {
    setIsClicked([!isClicked[0], isClicked[1]]);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleToggleBookmark = () => {
    setIsClicked([isClicked[0], !isClicked[1]]);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(e.target.value);
  };

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
  };

  const toggleClick = (index: number) => {
    const newClick = [...isClicked];
    newClick[index] = !newClick[index];
    setIsClicked(newClick);
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
      title: 'Sync and Google services',
      content: '',
    },
    {
      id: 2,
      title: 'import bookmarrks and',
      content: '',
    },
  ];
  const settingsItems2 = [
    {
      id: 3,
      icon: <BiKey size={24} color="darkgray" />,
      title: 'Passwords',
      content: '',
    },
    {
      id: 4,
      icon: <BiSolidCreditCard size={24} color="darkgray" />,
      title: 'payment Methods',
      content: '',
    },
    {
      id: 5,
      icon: <MdLocationOn size={24} color="darkgray" />,
      title: 'Addresses and more',
      content: '',
    },
  ];
  const toggleItems = [
    {
      title: 'Show home button',
      toggleHandler: handleToggleHomeButton,
      toggleState: isClicked[0],
      description: isClicked[0] ? 'enabled' : 'disabled',
    },
    {
      title: 'Show bookmark bar',
      toggleHandler: handleToggleBookmark,
      toggleState: isClicked[1],
      description: isClicked[1] ? 'enabled' : 'disabled',
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

      <div className="mt-8">
        <div className="text-black font-bold text-2xl mb-5">People</div>
        {settingsItems.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center border border-inherit p-2 bg-white">
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
              <div className="bg-white p-4 font-bold text-black">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex font-bold text-black mb-3 text-2xl">Autofill</div>
        {settingsItems2.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center border border-inherit p-2 bg-white">
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
              <div className="bg-white p-4 font-bold text-black">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex font-bold text-black mb-5 text-2xl">
          Appearance
        </div>
        <div className="bg-white p-4">
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div className="text-black font-bold">Themes</div>
              <GoLinkExternal size={24} color="darkgray" />
            </div>
            <div className="text-slate-500 font-bold">
              Open Chrome Web Store
            </div>
          </div>
          {toggleItems.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center">
                <div className="text-black font-bold">{item.title}</div>
                <label
                  htmlFor={`toggle${index}`}
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative w-12 h-6">
                    <input
                      type="checkbox"
                      id={`toggle${index}`}
                      className="sr-only"
                      checked={item.toggleState}
                      onChange={item.toggleHandler}
                    />
                    <div
                      className={`block ${
                        item.toggleState ? 'bg-green-300' : 'bg-zinc-500'
                      } w-full h-full rounded-full transition-colors duration-300`}
                    ></div>
                    <div
                      className={`dot absolute left-0 top-[-0.2rem] ${
                        item.toggleState
                          ? 'bg-green-600 translate-x-[1.7rem]'
                          : 'bg-zinc-50'
                      } w-6 h-7 rounded-full transition-transform duration-300`}
                    ></div>
                  </div>
                </label>
              </div>
              <div className="text-slate-500 font-bold">{item.description}</div>
            </div>
          ))}

          <div className="flex justify-between pb-4">
            <div className="text-black font-bold">Font size</div>
            <div className="relative w-64">
              <select
                value={fontSize}
                onChange={handleFontSizeChange}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-5-5h10l-5 5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 mt-5 border rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-md font-bold ml-1 text-black">
            Manage Projects
          </div>
          <button onClick={() => toggleExpand(6)}>
            {isExpanded[6] ? (
              <MdArrowDropDown size={42} color="black" />
            ) : (
              <MdArrowRight size={42} color="black" />
            )}
          </button>
        </div>
        {isExpanded[6] && (
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
