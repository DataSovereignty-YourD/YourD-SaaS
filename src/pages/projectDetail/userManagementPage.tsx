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
      <div className="w-full flex justify-center sm:inline-block ">
        <div className="bg-white mt-3 rounded-md drop-shadow-md w-[calc(100vw - 80px)]">
          <div className="overflow-x-scroll w-full ">
            <div className="bg-white drop-shadow-md flex text-black w-fit items-center justify-between px-2 py-3 text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem]">
              {columns.map((column) => {
                const isDID = column.key === "did";
                return (
                  <div
                    key={column.key}
                    className={`${
                      isDID ? "min-w-[200px]" : " min-w-[100px]"
                    } mr-4 md:mr-2 hover:group flex relative cursor-pointer w-[100%] border justify-between`}
                    onClick={() => handleSort(column.key)}
                  >
                    <span>
                      {column.label}
                    </span>
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
                  className=" text-black items-center py-3 min-w-fit whitespace-nowrap justify-between border-b px-2 text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem]"
                >
                  <span className="min-w-[100px] mx-2 flex items-center text-sm ">
                    <BiSolidUserCircle className="mr-2 w-4 h-4 sm:w-6 sm:h-6 object-contain"/>
                    {user.name}
                  </span>
                  <span className="min-w-[200px] whitespace-nowrap  w-fit text-clip mx-2  text-sm">{user.did}</span>
                  <span className="min-w-[100px] whitespace-nowrap  w-fit mx-2 text-sm ">{user.status}</span>
                  <span className="min-w-[100px] whitespace-nowrap w-fit mx-2 text-sm">
                    {user.lastLogin}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default UserManagement;
