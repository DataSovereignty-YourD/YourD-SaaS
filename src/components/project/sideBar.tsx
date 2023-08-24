import { Link, useLocation } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import { projectType } from "../../recoil/dashBoard/project";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageState,
  currentPageValue,
  sideBarTogleValue,
} from "../../recoil/sideBarToggle";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineApi,
  AiOutlineSetting,
} from "react-icons/ai";

export default function SideBar({ item }: { item: projectType }) {
  const location = useLocation();
  const selectedMenu = useRecoilValue(currentPageValue);
  const isSidebarVisible = useRecoilValue(sideBarTogleValue);

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
      classify: "Authentication",
      name: "Users",
      path: "usermanagement",
      icon: <AiOutlineTeam size={20} />,
    },
  ];

  let navigationBottom: navigationType[] = [
    {
      classify: "Support",
      name: "API KEY",
      path: "apikey",
      icon: <AiOutlineApi size={20} />,
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
    <div key={classification} className="flex flex-col justify-center">
      <div
        className={`${
          !isSidebarVisible && "hidden"
        } flex items-center justify-center md:justify-start mx-1 md:mx-4 font-medium md:font-bold text-gray-600 h-8 uppercase text-xs md:text-sm `}
      >
        {classification}
      </div>
      {items.map((data) => {
        const isSettings = data.name === "Settings";
        return (
          <Link
            key={data.name}
            to={data.path}
            className={`${
              isSidebarVisible ? "my-0" : !isSettings ? "mt-8" : "mt-0"
            } ${
              isSidebarVisible && selectedMenu === data.path
                ? "bg-blue-100 border-r-4 border-blue-500 text-black"
                : "hover:bg-gray-100 text-gray-500 "
            } flex flex-col h-12  md:flex-row items-center justify-start py-2 group w-full  `}
          >
            <div
              className={`${
                isSidebarVisible ? "md:pl-4 md:pr-2" : "px-4"
              }  flex `}
            >
              {data.icon}
            </div>
            <div
              className={`${
                !isSidebarVisible && "scale-0 text-gray-500 "
              } font-medium w-fit text-black   text-center whitespace-nowrap md:text-left text-sm md:text-lg duration-300 group-hover:text-indigo-400 origin-left `}
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
        isSidebarVisible ? "w-28 md:w-48" : "w-14 "
      } h-full flex flex-col duration-300 ease-in-out pt-12 `}
    >
      <div
        id="menu"
        className={`${
          isSidebarVisible ? "w-28 md:w-48" : "w-14"
        } fixed duration-300 flex flex-col justify-between h-[calc(100vh-4rem)] `}
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
    </div>
  );
}
