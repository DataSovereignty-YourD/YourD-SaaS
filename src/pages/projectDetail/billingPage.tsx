import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Plan from "../../components/project/billing/plan";
import Path from "../../components/project/path";
import Usage from "../../components/project/billing/usage";

import { TfiBarChart } from "react-icons/tfi";
import { MdOutlineElectricalServices, MdOutlineHistory } from "react-icons/md";
import { HiOutlineWallet } from "react-icons/hi2";

export default function Billing() {
  const [activeMenu, setActiveMenu] = useState("plan");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const [isPlanOpen, setIsPlanOpen] = useState(false);

  const handleMenuClick = (key) => {
    setActiveMenu(key);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
    setIsPlanOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const menuItems = [
    {
      key: "usage",
      label: "Usage",
      icon: <TfiBarChart />,
    },
    {
      key: "plan",
      label: "Plan",
      icon: <MdOutlineElectricalServices />,
    },
    {
      key: "add-ons",
      label: "Add-ons",
      icon: <MdOutlineElectricalServices />,
    },
    {
      key: "history",
      label: "History",
      icon: <MdOutlineHistory />,
    },
    {
      key: "payment",
      label: "Payment methods",
      icon: <HiOutlineWallet />,
    },
  ];

  return (
    <div className=" pb-20">
      <Path pathname={location.pathname} />
      <h2 className=" text-2xl font-bold mb-4 text-black">Usage & Billing</h2>
      <nav className=" bg-white text-black p-4">
        <ul className=" flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleMenuClick(item.key)}
                className={`${
                  activeMenu === item.key
                    ? "border-b-2 border-blue-500"
                    : "border-transparent"
                } focus:outline-none hover:bg-gray-100`}
              >
                <div className=" flex items-center">
                  {item.icon}
                  {item.label}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-full h-fit  value">
        {activeMenu === "usage" && <Usage />}
        {activeMenu === "plan" && <Plan></Plan>}
        {activeMenu === "add-ons" && <div>소개 페이지 컨텐츠</div>}
        {activeMenu === "history" && <div>소개 페이지 컨텐츠</div>}
        {activeMenu === "payment" && <div>소개 페이지 컨텐츠</div>}
      </div>
    </div>
  );
}
