import { Link, useLocation } from "react-router-dom";
import { ReactElement, useState, useRef, useEffect } from "react";
import { projectType } from "../../recoil/dashBoard/project";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageValue,
  sideBarToggleState,
  sideBarTogleValue,
} from "../../recoil/sideBarToggle";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineApi,
  AiOutlineSetting,
} from "react-icons/ai";
import classNames from "classnames";
import { FaHornbill } from "react-icons/fa";

export default function SideBar({ item }: { item: projectType }) {
  const location = useLocation();
  const selectedMenu = useRecoilValue(currentPageValue);
  const [isSidebarVisible, setSidebarVisible] =
    useRecoilState(sideBarToggleState);

  const closeSidebarVisible = () => {
    setSidebarVisible(false);
  };

  window.addEventListener("resize", () => {
    // 현재 화면 너비
    const width = window.innerWidth;

    if (width <= 1024) {
      setSidebarVisible(false);
    }
  });

  type navigationType = {
    classify: string;
    name: string;
    path: string;
    icon: ReactElement;
  };

  let navigationTop: navigationType[] = [
    {
      classify: "Analytics",
      name: "Dashboard",
      path: "dashboard",
      icon: <AiOutlineHome size={20} />,
    },
    {
      classify: "Management",
      name: "Users",
      path: "usermanagement",
      icon: <AiOutlineTeam size={20} />,
    },
    {
      classify: "Management",
      name: "API KEY",
      path: "apikey",
      icon: <AiOutlineApi size={20} />,
    },
  ];

  let navigationBottom: navigationType[] = [
    {
      classify: "Support",
      name: "Billing",
      path: "billing",
      icon: <FaHornbill size={20} />,
    },
    {
      classify: "Support",
      name: "Settings",
      path: "settings",
      icon: <AiOutlineSetting size={20} />,
    },
  ];

  function classifyData(data) {
    return data.reduce((acc, item) => {
      if (!acc[item.classify]) {
        acc[item.classify] = [];
      }
      acc[item.classify].push(item);
      return acc;
    }, {});
  }

  const navigationComponent = ({ classification, items }) => (
    <div key={classification} className=" flex flex-col justify-center">
      <div
        className={`${
          !isSidebarVisible && "hidden"
        } flex items-center justify-start mx-4 font-bold text-gray-600 h-8 uppercase text-[10px] `}
      >
        {classification}
      </div>
      {items.map((data) => {
        const isSettings = data.name === "Settings";
        return (
          <Link
            key={data.name}
            to={data.path}
            className={classNames(
              "flex h-12 flex-row items-center justify-start py-2 group w-full ",
              {
                "my-0": isSidebarVisible,
                "mt-8": !isSidebarVisible && !isSettings,
                "mt-0": !isSidebarVisible && isSettings,
                "border-r-4 border-blue-500 bg-blue-100 text-black":
                  selectedMenu === data.path && isSidebarVisible,
                "hover:bg-gray-100 text-gray-400": selectedMenu !== data.path,
                "text-black": selectedMenu === data.path,
              }
            )}
          >
            <div className={`${isSidebarVisible ? "pl-4 pr-2" : "px-4"}  `}>
              {data.icon}
            </div>
            <div
              className={`${
                !isSidebarVisible && "scale-0 text-gray-500 "
              } font-medium w-fit text-black whitespace-nowrap text-left text-sm  duration-300 group-hover:text-indigo-400 origin-left `}
            >
              {data.name}
            </div>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div
      className={`${
        isSidebarVisible ? "w-44" : "sm:w-14 hidden sm:flex"
      }  h-full fixed z-50 bg-white sm:relative flex-col duration-300 ease-in-out pt-12 `}
    >
      <div
        id="menu"
        className={`${
          isSidebarVisible ? "w-44" : "w-14 "
        } fixed duration-300 z-50 flex flex-col justify-between h-[calc(100vh-4rem)] `}
      >
        <div>
          {Object.entries(classifyData(navigationTop)).map(
            ([classification, items]: [string, navigationType[]]) =>
              navigationComponent({ classification, items })
          )}
        </div>
        <div>
          {Object.entries(classifyData(navigationBottom)).map(
            ([classification, items]: [string, navigationType[]]) =>
              navigationComponent({ classification, items })
          )}
        </div>
      </div>
      {isSidebarVisible && (
        <div
          className="z-40 fixed md:hidden  md:w-0 md:h-0 w-screen h-screen inset-0 "
          onClick={closeSidebarVisible}
        ></div>
      )}
    </div>
  );
}
