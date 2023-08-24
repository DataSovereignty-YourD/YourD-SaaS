import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { projectType } from '../../recoil/dashBoard/project';
import Path from './path';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function UserManagement({ item }: { item: projectType }) {
  const location = useLocation();
  const pathName = location.pathname;

  let users = [
    {
      id: 1,
      name: 'User1',
      email: 'did:yourd:klaytn:cypress:example1',
      status: 'Active',
      lastLogin: '2023-08-20',
    },
    {
      id: 2,
      name: 'User2',
      email: 'did:yourd:klaytn:cypress:example2',
      status: 'Inactive',
      lastLogin: '2023-08-18',
    },
    {
      id: 3,
      name: 'User3',
      email: 'did:yourd:klaytn:cypress:example3',
      status: 'Inactive',
      lastLogin: '2023-08-18',
    },
    {
      id: 4,
      name: 'User4',
      email: 'did:yourd:klaytn:cypress:example4',
      status: 'Inactive',
      lastLogin: '2023-08-22',
    },
    {
      id: 5,
      name: 'User5',
      email: 'did:yourd:klaytn:cypress:example5',
      status: 'Active',
      lastLogin: '2023-08-14',
    },
    {
      id: 6,
      name: 'User6',
      email: 'did:yourd:klaytn:cypress:example6',
      status: 'Active',
      lastLogin: '2023-08-23',
    },
    {
      id: 7,
      name: 'User7',
      email: 'did:yourd:klaytn:cypress:example7',
      status: 'Active',
      lastLogin: '2023-08-23',
    },
  ];

  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  let sortedUsers = [...users].sort((a, b) => {
    switch (sortColumn) {
      case 'name':
        return sortDirection === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      case 'email':
        return sortDirection === 'asc'
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email);
      case 'status':
        return sortDirection === 'asc'
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      case 'lastLogin':
        return sortDirection === 'asc'
          ? new Date(a.lastLogin).getTime() - new Date(b.lastLogin).getTime()
          : new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime();
      default:
        return 0;
    }
  });

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'lastLogin', label: 'LastLogin' },
  ];

  return (
    <div id="usermanagement" className="min-h-[calc(100vh-4rem)]">
      <Path pathname={pathName} />
      <h1 className="font-bold text-black mb-2 uppercase text-2xl">
        User Management
      </h1>

      

      <div className="bg-white mt-3 rounded-md drop-shadow-md">
      <div className="bg-white  drop-shadow-md">
        <div className="text-black flex items-center justify-between">
          <div className="w-12 h-12"></div>
          {columns.map(column => (
            <span
              key={column.key}
              className="flex-1 mx-2 hover:group relative cursor-pointer"
              onClick={() => handleSort(column.key)}>
              {column.label}
              <button className="absolute top-1/2 transform -translate-y-1/2">
                {sortColumn === column.key && sortDirection === 'asc' ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )}
              </button>
            </span>
          ))}
        </div>
      </div>
        {sortedUsers.map((user) => (
          <div
            key={user.id}
            className="text-black flex items-center justify-between border-b p-2"
          >
            <BiSolidUserCircle className="w-12 h-12" />
            <span className="flex-1  mx-2">{user.name}</span>
            <span className="flex-1 mx-2">{user.email}</span>
            <span className="flex-1 mx-2">{user.status}</span>
            <span className="flex-1 mx-2">{user.lastLogin}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserManagement;
