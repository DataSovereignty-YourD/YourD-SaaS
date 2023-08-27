import React, { useState } from "react";

import { AiTwotoneThunderbolt } from "react-icons/ai";
import { LiaCalendarCheck } from "react-icons/lia";

export default function Plan() {
  const [activeMenu, setActiveMenu] = useState("plan");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleMenuClick = (key) => {
    setActiveMenu(key);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const invoiceData = [
    {
      name: "Discover Plan",
      amount: "$0.00",
    },
    {
      name: "Overages",
      amount: "$0.00",
    },
    {
      name: "Multi-region Transaction Broadcast",
      amount: "$0.00",
    },
    {
      name: "Multi-region Transaction Broadcast",
      amount: "$0.00",
    },
    {
      name: "Total",
      amount: "$0.00",
    },
  ];
  return (
    <div id="billing" className=" text-black  grid pb-20">
      <div className=" flex justify-between mb-10">
        <div className="font-normal text-lg px-5 py-2">Plan : Discover</div>
        <div className=" flex">
          <button
            className=" flex items-center mx-3 border-black text-white bg-purple-600 rounded-lg"
            onClick={openPopup}
          >
            <div className=" mx-3 flex items-center ">
              upgrade <AiTwotoneThunderbolt />
            </div>
          </button>
          {isPopupOpen && (
            <div className=" popup">
              <div className=" popup-content">
                <h2>팝업 내용</h2>
                <p>이것은 팝업의 내용입니다.</p>
                <button onClick={closePopup}>X</button>
              </div>
            </div>
          )}
          <button className=" items-center border-black bg-blue-500 rounded-lg">
            <div className=" mx-3 flex items-center text-white">
              cancel subscription
            </div>
          </button>
        </div>
      </div>

      <div className=" mt-5 mb-14">
        <div className=" mb-2 text-sm">Upcoming Invoice</div>
        <div className=" flex gap-6 border border-gray-200 rounded-lg py-10 px-8">
          <div className=" border-r-2 w-full">
            <div className="flex items-center text-sm font-semibold ">
              Billing Period
            </div>
            <div className="flex items-center">
              <LiaCalendarCheck className="w-8 h-8" />
              Aug 27, 2023 - Sep 27, 2023
            </div>
          </div>
          <div className="w-full">
            <div>Total</div>
            <div>$0.00</div>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-between mb-2 px-3 py-2 bg-gray-200 font-bold text-sm">
          <div>Upcoming Invoice Breakdown</div>
          <div>Amount</div>
        </div>
        {invoiceData.map((item, index) => (
          <div
            key={index}
            className=" flex justify-between mb-3 border-b-4 border-gray-300 px-3 py-2"
          >
            <div>{item.name}</div>
            <div>{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
