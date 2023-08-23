import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import YourdLogo from "../assets/img/YourDLogo.png";
import { projectModalState } from "../recoil/dashBoard/project";
import React, { useState } from "react";
import { sideBarToggleState } from "../recoil/sideBarToggle";

export default function ProjectTopBar() {
  const location = useLocation();
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(projectModalState);
  const [isSidebarVisible, setSidebarVisible] =
    useRecoilState(sideBarToggleState);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  //밑에 pathName 사용할 것
  const pathName = location.pathname;

  const handleSearchIconClick = () => {
    return setSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <div className="fixed  bg-white w-full h-12 flex items-center z-20">
      {/** 밑에 메뉴버튼이 pathName === /project 일때 버튼 안보이게 하기 */}
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
        className="flex h-[48px]"
      />

      <div className="flex justify-between w-full   mx-10 ">
        <div className="flex  items-center ">
          {/** 밑에 메뉴버튼이 pathName === /project 일때 돋보기 안보이게 하기 */}
          <div id="search-icon" className="ml-10" onClick={handleSearchIconClick}>
            {
              <svg
                className="h-8 w-8 text-blue-500 "
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
                className="w-48 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500  "
                value=""
              ></input>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
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

          <svg
            className="h-8 w-8 text-gray-600 "
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

          <img
            className=" w-10 h-10 rounded-full object-cover  border border-red-700 "
            src="http://wiki.hash.kr/images/d/d6/이더리움_로고.png"
            alt="User Avatar"
          ></img>

          <img
            className=" w-10 h-10 rounded-full object-cover   "
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
            alt="User Avatar"
          ></img>
        </div>
      </div>
    </div>
  );
}
