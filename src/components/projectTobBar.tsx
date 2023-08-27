import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import YourdLogo from "../assets/img/YourDLogo.png";
import { projectModalState } from "../recoil/dashBoard/project";
import React, { useEffect, useState } from "react";
import { sideBarToggleState } from "../recoil/sideBarToggle";
import classNames from "classnames";
import { loginState } from "../recoil/loginState";
import NotificationModal from "./utils/notificationmodal";
import ProfileModal from "./utils/profileModal";
import {
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineMore,
  AiOutlineClose,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineModeNight } from "react-icons/md";

import { PiUserCircle } from "react-icons/pi";

export default function ProjectTopBar() {
  const location = useLocation();
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(projectModalState);
  const [isSidebarVisible, setSidebarVisible] =
    useRecoilState(sideBarToggleState);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const pathName = location.pathname;
  const isMain = pathName === "/project";
  const [activeTab, setActiveTab] = useState("profile");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isProfileToggle, setProfileToggle] = useState(false);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);

  const handleSearchIconClick = () => {
    return setSearchBarVisible(!isSearchBarVisible);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const profileDropdown = () => {
    setProfileToggle(!isProfileToggle);
  };
  const closeProfileDropdown = () => {
    setProfileToggle(false);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleLogout = () => {
    setLoggedIn(!isLoggedIn);
  };

  window.addEventListener("resize", () => {
    // 현재 화면 너비
    const width = window.innerWidth;

    if (width <= 1024) {
      setSidebarVisible(false);
    }
  });

  return (
    <div className="fixed bg-white w-full h-12 flex items-center z-20 drop-shadow-md">
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
        <div className="flex items-center gap-0 md:gap-3">
          <div>
            <div
              onClick={toggleDropdown}
              className=" flex items-center justify-center rounded-md dropdown  focus:outline-none focus:ring"
              // type="button"
            >
              <span className="inline-flex items-center hover:bg-gray-100 justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                <IoMdNotificationsOutline size={28} />
                <div className="absolute ml-5 mb-4 inline-flex align-center px-1 py-1/2 rounded-full bg-red-500 text-white">
                  4
                </div>
              </span>
            </div>
            <NotificationModal
              isDropdownOpen={isDropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
            {isDropdownOpen && (
              <div
                className="fixed w-screen h-screen inset-0 bg-black/5"
                onClick={closeDropdown}
              ></div>
            )}
          </div>
          {/* morning/night mode */}
          <MdOutlineModeNight size={28} className="hidden md:flex" />
          {/* user image */}
          <div className="">
            <div
              onClick={profileDropdown}
              className=" flex items-center justify-center rounded-md  dropdown  focus:outline-none focus:ring"
              // type="button"
            >
              <span className="inline-flex items-center hover:bg-gray-100 justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                <PiUserCircle size={28} className=" hidden md:flex " />
              </span>
            </div>
            <ProfileModal
              isProfileToggle={isProfileToggle}
              setProfileToggle={setProfileToggle}
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              navigation={navigation}
            />

            {isProfileToggle && (
              <div
                className="absolute w-screen h-screen inset-0 bg-black/5"
                onClick={closeProfileDropdown}
              />
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
        className={`absolute mt-28 border z-50 border-gray-100 shadow bg-white w-full ${classNames(
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
              className=" w-full h-10 px-3   rounded-md border border-gray-300 focus:outline-none focus:border-blue-500  "
            />
            <PiUserCircle size={32} className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
