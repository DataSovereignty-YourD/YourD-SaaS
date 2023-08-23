import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import YourdLogo from "../assets/img/YourDLogo.png";
import { projectModalState } from "../recoil/dashBoard/project";
import React, { useState } from "react";
import { sideBarToggleState } from "../recoil/sideBarToggle";
import classNames from "classnames";

export default function ProjectTopBar() {
  const location = useLocation();
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(projectModalState);
  const [isSidebarVisible, setSidebarVisible] =
    useRecoilState(sideBarToggleState);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const pathName = location.pathname;

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
      <button
        onClick={() => setSidebarVisible((prev) => !prev)}
        className="flex items-center justify-center w-16 px-5 py-2 text-gray-700 hover:bg-gray-100 rounded-md "
        type="button"
      >
        <span>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="menu-fold"
            width="1.5em"
            height="1.5em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path>
          </svg>
        </span>
      </button>
      <img
        src={YourdLogo}
        onClick={() => navigation("/")}
        className="flex h-[48px] object-contain "
      />
      {/* search icon */}
      <div className="flex justify-between w-full mx-10 ">
        <div className="search-icon-container flex items-center ">
          {pathName !== "/project" && (
            <div className="flex items-center">
              <div
                id="search-icon"
                className="ml-10"
                onClick={handleSearchIconClick}
              >
                {
                  <svg
                    className="h-7 w-7 hidden md:flex items-center space-x-1 text-blue-500 "
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
                    <circle cx="10" cy="10" r="7" />{" "}
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                }
              </div>

              {isSearchBarVisible && (
                <div>
                  <input
                    id="header-search"
                    placeholder="검색어를 입력하세요"
                    type="text"
                    className="w-48 px-2 hidden md:flex items-center space-x-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500  "
                    value=""
                  ></input>
                </div>
              )}
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
                <svg
                  className="h-8 w-8 text-gray-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>

                <div className="absolute ml-5 mb-4 inline-block align-middle">
                  <span className="inline-flex items-center px-1 py-1/2 rounded-full text-xs font-medium bg-red-500 text-white">
                    4
                  </span>
                </div>
              </span>
            </div>

            {isDropdownOpen && (
              <div
                className="absolute w-[500px] h-[350px]  bg-white menu dropdown-content p-2 shadow z-[1] bg-base-100 rounded-xl"
                style={{ transform: "translateX(-80%)" }}
              >
                <div>
                  <div className="text-xl bold font-bold mb-2 ml-4 py-1">
                    Notification
                  </div>
                  <hr></hr>
                  <div className=" flex my-2  border-b border-gray-100 py-1 font-semibold text-gray-500 md:mx-2">
                    <div>
                      <svg
                        className="h-8 w-8 mr-2 text-blue-600"
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
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />{" "}
                        <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                        <line x1="8" y1="12" x2="8" y2="12.01" />{" "}
                        <line x1="16" y1="12" x2="16" y2="12.01" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      Aida Burg commented your post.
                    </div>

                    <div className="text-right">AM 02:00</div>
                  </div>

                  <div className="flex  my-2  border-b border-gray-100 py-1 font-semibold text-gray-500 md:mx-2">
                    <div className="flex ">
                      <svg
                        className="h-8 w-8 mr-2 text-yellow-300"
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
                        <polyline points="12 8 12 12 14 14" />{" "}
                        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      Your Profile is Complete 60%
                    </div>
                    <div className="text-right">AM 01:30</div>
                  </div>
                  <div className="flex my-2   border-b border-gray-100 py-1 font-semibold text-gray-500 md:mx-2">
                    <div>
                      <svg
                        className="h-8 w-8 mr-2 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <circle cx="12" cy="12" r="10" />{" "}
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="flex-grow">Your User Rate is already</div>

                    <div className="text-right">PM 18:45</div>
                  </div>
                  <div className="flex my-2   border-b border-gray-100 py-1 font-semibold text-gray-500 md:mx-2">
                    <div>
                      <svg
                        className="h-8 w-8 mr-2 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      Cristina Danny invited to join Meeting.
                    </div>

                    <div className="text-right">PM 14:00</div>
                  </div>

                  <div className="flex justify-center">
                    <button className="bg-[#2096F3] text-white py-2 px-4 rounded-lg mt-6 w-40 font-extrabold">
                      View All
                    </button>
                  </div>
                </div>
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

          <div className="md:hidden flex items-center">
            <button
              className="  rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {!menuToggle ? (
                <svg
                  className="h-8 w-8 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <circle cx="12" cy="12" r="1" />{" "}
                  <circle cx="12" cy="5" r="1" />{" "}
                  <circle cx="12" cy="19" r="1" />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute mt-24 border border-gray-100 shadow   bg-white w-full   ${classNames(
          "md:hidden",
          {
            hidden: !menuToggle,
          }
        )}`}
      >
        <div className=" flex items-center  ">
          <div className="items-center justify-center mx-4">
            <svg
              className=" h-7 w-7   text-blue-500 "
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
              <circle cx="10" cy="10" r="7" />{" "}
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>

          <div
            className="flex items-center justify-between w-full
          "
          >
            <input
              id="header-search"
              placeholder="검색어를 입력하세요"
              type="text"
              className=" w-full  h-12 px-3   rounded-md border border-gray-300 focus:outline-none focus:border-blue-500  "
            ></input>

            <img
              className="    w-10 h-10  mx-2 rounded-full object-fill
               "
              src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
              alt="User Avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
