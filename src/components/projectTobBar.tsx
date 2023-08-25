import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import YourdLogo from "../assets/img/YourDLogo.png";
import { projectModalState } from "../recoil/dashBoard/project";
import React, { useState } from "react";
import { sideBarToggleState } from "../recoil/sideBarToggle";
import classNames from "classnames";
import { loginState } from "../recoil/loginState";
import {
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineMore,
  AiOutlineClose,
  AiOutlineMenuFold,
  AiOutlineMessage,
  AiOutlineWallet,
  AiOutlineQuestionCircle,
  AiOutlineLock,
  AiOutlineUnorderedList,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  IoMdNotificationsOutline,
  IoMdPeople,
  IoMdTime,
  IoIosTimer,
  IoMdPhonePortrait,
} from "react-icons/io";

import { BiLogOut } from "react-icons/bi";

import {
  PiPencilSimpleLineLight,
  PiUserListDuotone,
  PiWechatLogoBold,
} from "react-icons/pi";
import { GoPerson } from "react-icons/go";

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
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const [menuToggle, setMenuToggle] = useState(false);
  const [isProfileToggle, setProfileToggle] = useState(false);

  const profileDropdown = () => {
    setProfileToggle(!isProfileToggle);
  };
  const closeProfileDropdown = () => {
    setProfileToggle(false);
  };

  const [activeTab, setActiveTab] = useState("profile");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const handleLogout = () => {
    setLoggedIn(!isLoggedIn);
  };
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  window.addEventListener("resize", () => {
    // 현재 화면 너비
    const width = window.innerWidth;

    if (width <= 640) {
      setSidebarVisible(false);
    } else if (width > 640 && width < 1024) {
      setSidebarVisible(true);
    }
  });

  const ProfileContent = () => {
    return (
      <div className="">
        {ProfileData.map((profiledata, index) => {
          return (
            <div className=" flex  gap-2 border-gray-100  justify-between items-center  text-black ">
              <a
                href="#"
                key={index}
                className={` w-full py-3 text-gray-800  ${
                  selectedItem === index ? "bg-blue-100" : ""
                } hover:bg-blue-200 transition duration-300`}
                onClick={() => handleItemClick(index)}
              >
                <div className=" flex">
                  <div className=" object-contain  my-auto mx-4 ">
                    {profiledata.icon}
                  </div>
                  <div className=" sm:min-w-[200px]  font-light text-xs sm:text-sm lg:min-w-[200px] lg:whitespace-nowrap ">
                    {profiledata.name}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
        <div className="flex border-gray-100  justify-between items-center  text-black  ">
          <button
            className={`w-full py-3 text-gray-800  ${
              selectedItem == "#" ? "bg-blue-100" : ""
            } hover:bg-blue-200 transition duration-300`}
            onClick={() => handleItemClick("#")}
          >
            <div className="  flex " onClick={handleLogout}>
              <div className=" object-contain  my-auto mx-4 ">
                <BiLogOut />
              </div>

              <div className=" sm:min-w-[200px] text-left  font-light text-xs sm:text-sm lg:min-w-[200px] lg:whitespace-nowrap ">
                Logout
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  };

  const SettingContent = () => {
    return (
      <div className="">
        {SettingData.map((settingdata, index) => {
          return (
            <div className="flex  gap-2 border-gray-100  justify-between items-center  text-black ">
              <a
                href="#"
                key={index}
                className={`w-full py-3 text-gray-800  ${
                  selectedItem === index ? "bg-blue-100" : ""
                } hover:bg-blue-200 transition duration-300`}
                onClick={() => handleItemClick(index)}
              >
                <div className="flex">
                  <div className="object-contain  my-auto mx-4 ">
                    {settingdata.icon}
                  </div>
                  <div className="sm:min-w-[200px]  font-light text-xs sm:text-sm lg:min-w-[200px] lg:whitespace-nowrap ">
                    {settingdata.name}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="fixed bg-white w-full h-12 flex items-center z-20 border border-b-2">
      {!isMain && (
        <button
          onClick={() => setSidebarVisible((prev) => !prev)}
          className="flex items-center justify-center w-14 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md "
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
        <div className="flex items-center">
          {pathName !== "/project" && (
            <div className="md:flex items-center ml-20 w-fit duration-500 origin-left">
              <div
                id="search-icon"
                className={`hidden md:flex duration-700 ${
                  isSearchBarVisible ? "rotate-[360deg]" : "[0deg]"
                }`}
                onClick={handleSearchIconClick}
              >
                <AiOutlineSearch size={28} />
              </div>
              <input
                id="header-search"
                placeholder="search"
                type="text"
                className={`px-2 hidden origin-left duration-500 md:flex items-center rounded-xl transition-width shadow-inner border  focus:outline-none ${
                  isSearchBarVisible ? "w-full scale-100  ml-2" : "w-0 scale-0"
                }`}
                value=""
              />
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
                <div className="flex items-center justify-between">
                  <div className=" text-xl bold font-normal mb-2 ml-4 py-1">
                    Notification
                  </div>

                  <button onClick={closeDropdown}>
                    <AiOutlineClose className="mx-3" />
                  </button>
                </div>
                <hr></hr>
                {NotificationData.map((notification) => {
                  return (
                    <div className=" flex my-2  border-b gap-3 border-gray-100 py-1 justify-between items-center font-semibold text-gray-500 md:mx-2">
                      <div className="flex gap-3">
                        <div className="object-contain sm: my-auto mx-auto">
                          {notification.icon}
                        </div>
                        <div className="sm:min-w-[200px] text-md font-normal sm:text-md lg:min-w-[300px] lg:whitespace-nowrap ">
                          {notification.message}
                        </div>
                      </div>
                      <div className="text-right text-xs font-normal sm:text-sm lg:whitespace-nowrap ">
                        {notification.time}
                      </div>
                    </div>
                  );
                })}
                <button className="bg-white flex text-blue-500 py-2 px-8 rounded-lg mx-auto font-normal">
                  View All
                </button>
              </div>
            )}
            {isDropdownOpen && (
              <div
                className="fixed inset-0 bg-black opacity-25"
                onClick={closeDropdown}
              ></div>
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
          <div className="">
            <div
              onClick={profileDropdown}
              className=" flex items-center justify-center rounded-md  dropdown  focus:outline-none focus:ring"
              // type="button"
            >
              <span className="inline-flex items-center hover:bg-gray-100 justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                <img
                  className="  w-10 h-10 hidden md:flex items-center space-x-1 rounded-full object-cover   "
                  src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
                  alt="User Avatar"
                ></img>
              </span>
            </div>

            {isProfileToggle && (
              <div
                className=" absolute w-72 h-fit   bg-white menu dropdown-content shadow-2xl z-[1] bg-base-100 rounded-md"
                style={{ transform: "translateX(-80%)" }}
              >
                <div className="  items-center flex text-xl w-full py-6 ">
                  <img
                    className="  w-7 h-7  ml-4 mr-2 rounded-full object-fill  "
                    src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
                    alt="User Avatar"
                  ></img>
                  <div className=" flex items-center justify-between w-full">
                    <div className=" font-normal text-sm ">User Name</div>
                    <BiLogOut
                      size={20}
                      className="mx-5"
                      onClick={handleLogout}
                    />
                  </div>
                </div>
                <div className=" ">
                  <div className=" flex justify-between w-full ">
                    <button
                      className={` flex items-center justify-center  w-[calc(50% - 0.25rem)] px-4 py-2  w-full  font-normal text-sm border-b-2 ${
                        activeTab === "profile"
                          ? "bg-white border-b-2 border-blue-500 text-blue-500  "
                          : "hover:bg-gray-100 border-b-2 border-transparent text-black "
                      } `}
                      type="button"
                      onClick={() => handleTabChange("profile")}
                    >
                      <GoPerson className="mx-2" />
                      Profile
                    </button>
                    <button
                      className={` flex items-center justify-center w-[calc(50% - 0.25rem)] px-4 py-2  w-full  font-normal text-sm border-b-2 ${
                        activeTab === "setting"
                          ? "bg-white border-blue-500 text-blue-500 "
                          : "hover:bg-gray-100 text-black border-transparent"
                      } `}
                      type="button"
                      onClick={() => handleTabChange("setting")}
                    >
                      <AiOutlineSetting className="mx-2 " />
                      Setting
                    </button>
                  </div>
                  <div className=" ">
                    {activeTab === "profile" && <ProfileContent />}
                    {activeTab === "setting" && <SettingContent />}
                  </div>
                </div>
              </div>
            )}
            {isProfileToggle && (
              <div
                className="fixed inset-0 bg-black opacity-25"
                onClick={closeProfileDropdown}
              ></div>
            )}
          </div>

          {/* shrink icon */}
          <button
            className=" md:hidden rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            {!menuToggle ? (
              <AiOutlineMore size={26} />
            ) : (
              <AiOutlineClose size={26} />
            )}
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
              onDragStart={() => {
                return false;
              }}
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
const ProfileData = [
  {
    name: "Edit Profile",
    icon: <PiPencilSimpleLineLight size={15} />,
  },
  {
    name: "View Profile",
    icon: <GoPerson size={15} />,
  },
  {
    name: "Social Profile",
    icon: <PiUserListDuotone size={15} />,
  },
  {
    name: "Billing",
    icon: <AiOutlineWallet size={15} />,
  },
];
const SettingData = [
  {
    name: "Support",
    icon: <AiOutlineQuestionCircle size={15} />,
  },
  {
    name: "Account Settings",
    icon: <GoPerson size={15} />,
  },
  {
    name: "Privacy Center",
    icon: <AiOutlineLock size={15} />,
  },
  {
    name: "Feedback",
    icon: <PiWechatLogoBold size={15} />,
  },
  {
    name: "History",
    icon: <AiOutlineUnorderedList size={15} />,
  },
];
