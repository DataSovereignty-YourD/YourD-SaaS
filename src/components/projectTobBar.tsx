import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import YourdLogo from "../assets/img/YourDLogo.png";
import { projectModalState } from "../recoil/dashBoard/project";
import React, { useState } from "react";
import { sideBarToggleState } from "../recoil/sideBarToggle";
import classNames from "classnames";
import {
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineMore,
  AiOutlineClose,
  AiOutlineMenuFold,
  AiOutlineMessage,
} from "react-icons/ai";
import {
  IoMdNotificationsOutline,
  IoMdPeople,
  IoMdTime,
  IoIosTimer,
} from "react-icons/io";

export default function ProjectTopBar() {
  const location = useLocation();
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(projectModalState);
  const [isSidebarVisible, setSidebarVisible] =
    useRecoilState(sideBarToggleState);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const pathName = location.pathname;
  const isMain = pathName === "/project";

  const handleSearchIconClick = () => {
    return setSearchBarVisible(!isSearchBarVisible);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="fixed  bg-white w-full h-12 flex items-center z-20">
      {!isMain && (
        <button
          onClick={() => setSidebarVisible((prev) => !prev)}
          className="flex items-center justify-center w-16 px-5 py-2 text-gray-700 hover:bg-gray-100 rounded-md "
          type="button"
        >
          {isSidebarVisible ? (
            <AiOutlineMenuFold size={24} />
          ) : (
            <AiOutlineMenuUnfold size={24} />
          )}
        </button>
      )}
      <img
        src={YourdLogo}
        onClick={() => navigation("/")}
        className="absolute ml-16 h-[48px] object-contain "
      />
      {/* search icon */}
      <div className="flex justify-between w-full mx-10 ">
        <div className="search-icon-container flex items-center ">
          {pathName !== "/project" && (
            <div className="flex items-center ml-10 duration-300">
              <input
                id="header-search"
                placeholder="검색어를 입력하세요"
                type="text"
                className={`px-2 hidden md:flex items-center space-x-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 duration-300 origin-left ${
                  isSearchBarVisible && "scale-0"
                }`}
                value=""
              />
              <div id="search-icon" onClick={handleSearchIconClick}>
                <AiOutlineSearch size={28} />
              </div>
            </div>
          )}
        </div>
        {/* notification icon */}
        <div className="flex items-center gap-4">
          <div>
            <div
              onClick={toggleDropdown}
              className=" flex items-center justify-center rounded-md dropdown  focus:outline-none focus:ring"
              // type="button"
            >
              <span className="inline-flex items-center hover:bg-gray-100 justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                <IoMdNotificationsOutline size={28} />

                <div className="absolute ml-5 mb-4 inline-block align-middle">
                  <span className="inline-flex items-center px-1 py-1/2 rounded-full text-xs font-medium bg-red-500 text-white">
                    4
                  </span>
                </div>
              </span>
            </div>

            {isDropdownOpen && (
              <div
                className="absolute w-fit h-fit pb-4  bg-white menu dropdown-content p-2 shadow z-[1] bg-base-100 rounded-xl"
                style={{ transform: "translateX(-80%)" }}
              >
                <div className="text-xl bold font-bold mb-2 ml-4 py-1">
                  Notification
                </div>
                <hr></hr>
                {NotificationData.map((notification) => {
                  return (
                    <div className=" flex my-2  border-b gap-3 border-gray-100 py-1 justify-between items-center font-semibold text-gray-500 md:mx-2">
                      <div className="flex gap-3">
                        <div className="object-contain">
                          {notification.icon}
                        </div>
                        <div className="sm:min-w-[200px] text-sm sm:text-lg lg:min-w-[300px] lg:whitespace-nowrap ">
                          {notification.message}
                        </div>
                      </div>
                      <div className="text-right text-xs sm:text-sm lg:whitespace-nowrap ">
                        {notification.time}
                      </div>
                    </div>
                  );
                })}
                <button className="bg-[#007aff] flex text-white py-2 px-8 rounded-lg mx-auto font-extrabold">
                  View All
                </button>
              </div>
            )}
          </div>
          {/* morning/night mode */}
          <svg
            className="h-8 w-8 hidden md:flex items-center space-x-1 text-gray-600 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>

          {/* ether logo */}
          <img
            className=" w-10 h-10 hidden md:flex items-center space-x-1 rounded-full object-cover  "
            src="http://wiki.hash.kr/images/d/d6/이더리움_로고.png"
            alt="User Avatar"
          ></img>

          {/* user image */}
          <img
            className="  w-10 h-10 hidden md:flex items-center space-x-1 rounded-full object-cover   "
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
            alt="User Avatar"
          ></img>

          {/* shrink icon */}
            <button
              className=" md:hidden rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {!menuToggle ? <AiOutlineMore size={26} /> : <AiOutlineClose size={26} />}
            </button>
        </div>
      </div>
      <div
        className={`absolute mt-28 border border-gray-100 shadow bg-white w-full ${classNames(
          "md:hidden",
          { hidden: !menuToggle }
        )}`}
      >
        <div className=" flex items-center py-3">
          <AiOutlineSearch size={30} color={"#007aff"} className="mx-4" />
          <div className="flex items-center justify-between w-full">
            <input
              id="header-search"
              placeholder="검색어를 입력하세요"
              type="text"
              className=" w-full  h-10 px-3   rounded-md border border-gray-300 focus:outline-none focus:border-blue-500  "
            />
            <img
              className="    w-10 h-10  mx-2 rounded-full object-fill"
              src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
              alt="User Avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

const NotificationData = [
  {
    message: "Aida Burg commented your post.",
    icon: <AiOutlineMessage size={30} color={"#007AFF"} />,
    time: "AM 01:30",
  },
  {
    message: "Your Profile is Complete 60%",
    icon: <IoIosTimer size={30} color={"#ffd400"} />,
    time: "AM 02:00",
  },
  {
    message: "Your User Rate is already.",
    icon: <IoMdTime size={30} color={"#007aff"} />,
    time: "PM 14:00",
  },
  {
    message: "Cristina Danny invited to join Meeting.",
    icon: <IoMdPeople size={30} color={"#FFD400"} />,
    time: "PM 18:45",
  },
];
