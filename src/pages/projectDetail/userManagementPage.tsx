import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { projectType } from "../../recoil/dashBoard/project";
import Path from "../../components/project/path";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
//responsive 미완
function UserManagement({ item }: { item: projectType }) {
  const location = useLocation();
  const pathName = location.pathname;

  let users = [
    {
      id: 1,
      name: "User1",
      did: "did:yourd:klaytn:cypress:example1",
      status: "Active",
      lastLogin: "2023-08-20",
    },
    {
      id: 2,
      name: "User2",
      did: "did:yourd:klaytn:cypress:example2",
      status: "Inactive",
      lastLogin: "2023-08-18",
    },
    {
      id: 3,
      name: "User3",
      did: "did:yourd:klaytn:cypress:example3",
      status: "Inactive",
      lastLogin: "2023-08-18",
    },
    {
      id: 4,
      name: "User4",
      did: "did:yourd:klaytn:cypress:example4",
      status: "Inactive",
      lastLogin: "2023-08-22",
    },
    {
      id: 5,
      name: "User5",
      did: "did:yourd:klaytn:cypress:example5",
      status: "Active",
      lastLogin: "2023-08-14",
    },
    {
      id: 6,
      name: "User6",
      did: "did:yourd:klaytn:cypress:example6",
      status: "Active",
      lastLogin: "2023-08-23",
    },
    {
      id: 7,
      name: "User7",
      did: "did:yourd:klaytn:cypress:example7",
      status: "Active",
      lastLogin: "2023-08-23",
    },
  ];

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  let sortedUsers = [...users].sort((a, b) => {
    switch (sortColumn) {
      case "name":
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      case "did":
        return sortDirection === "asc"
          ? a.did.localeCompare(b.did)
          : b.did.localeCompare(a.did);
      case "status":
        return sortDirection === "asc"
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      case "lastLogin":
        return sortDirection === "asc"
          ? new Date(a.lastLogin).getTime() - new Date(b.lastLogin).getTime()
          : new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime();
      default:
        return 0;
    }
  });

  const columns = [
    { key: "name", label: "Name" },
    { key: "did", label: "DID" },
    { key: "status", label: "Status" },
    { key: "lastLogin", label: "LastLogin" },
  ];

  return (
    <div
      id="usermanagement"
      className="min-h-[calc(100vh-4rem)] max-h-full pb-10 "
    >
      <Path pathname={pathName} />
      <h1 className="font-bold text-black mb-2 uppercase text-2xl">
        User Management
      </h1>
      <div className="flex justify-center sm:block w-[calc(100vw-50px)] sm:w-[calc(100vw-100px)] md:w-full">
        <div className="bg-white mt-3 rounded-md drop-shadow-md overflow-x-scroll w-full">
          <div className="bg-white drop-shadow-md flex text-black w-fit md:w-full items-center py-3 pl-4 text-[0.9rem] sm:text-[0.9rem] md:text-[1rem]">
            {columns.map((column) => {
              const isDID = column.key === "did";
              return (
                <div
                  key={column.key}
                  className={`${
                    isDID ? "min-w-[240px]" : " min-w-[100px]"
                  } hover:group w-full mr-2 flex relative cursor-pointer justify-between`}
                  onClick={() => handleSort(column.key)}
                >
                  <span>{column.label}</span>
                  <button className=" ">
                    {sortColumn === column.key && sortDirection === "asc" ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
          {sortedUsers.map((user) => (
            <div
              key={user.id}
              className=" flex text-black items-center pl-4 py-3 whitespace-nowrap border-b  text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem]"
            >
              <span className="min-w-[100px] mr-2 flex w-full items-center text-sm whitespace-nowrap">
                {user.name}
              </span>
              <span className="min-w-[240px] mr-2 whitespace-nowrap  w-full  text-sm">
                {user.did}
              </span>
              <span className="min-w-[100px] mr-2 whitespace-nowrap  w-full  text-sm ">
                {user.status}
              </span>
              <span className="min-w-[100px] mr-2 whitespace-nowrap w-full  text-sm">
                {user.lastLogin}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
