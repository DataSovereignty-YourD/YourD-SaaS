import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Path({ pathname }: { pathname: string }) {
  // 맨처음 홈 아이콘 추가
  // 아래처럼 나오게
  // {홈 아이콘}/경로
  // 홈 클릭하면 dashboard로 넘어가게
  const navigate = useNavigate();

  const lastDashboardIndex = pathname.lastIndexOf("dashboard");
  const result = pathname.slice(0, lastDashboardIndex + "dashboard".length);
  const pathAfterDashboard = pathname.slice(
    lastDashboardIndex + "dashboard".length
  );

  const arrayPathName = pathname.split("/").slice(3);

  const onClickImg = () => {
    navigate("result");
  };
  return (
    <div className="inline-flex items-center">
      <span>
        <svg
          className="h-9 w-9 text-black-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </span>
      <span className="text-xl flex min-w-[200px] p-1 text-gray-500 font-bold uppercase ">
        {arrayPathName.map((data) => {
          return <div>/ {data}</div>;
        })}
      </span>
    </div>
  );
}
