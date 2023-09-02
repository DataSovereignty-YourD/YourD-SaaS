import React, { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { LiaCalendarCheck } from "react-icons/lia";
import Subscribe from "./subscribe";

export default function Plan() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closeDropdown = () => {
    setIsPopupOpen(false);
  };
  const openSubscribePopup = () => {
    setIsPopupOpen(true);
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
    <div id="billing" className="  text-black  grid pb-20 ">
      <div className=" justify-between sm:my-10">
        <div className="  flex justify-between  flex-col sm:flex-row sm:mb-10">
          <div className=" font-normal text-lg px-5 py-2 my-8 justify-center items-center sm:my-3 flex">
            Plan : Discover
          </div>
          <div className=" my-3 flex flex-col sm:flex-row">
            <button
              className="  flex items-center mx-3 p-2 mb-1 border-black text-white bg-purple-600 rounded-lg"
              onClick={openSubscribePopup}
            >
              <div className="  mx-auto flex items-center ">
                upgrade <AiTwotoneThunderbolt />
              </div>
            </button>

            <button className="  items-center mx-3 p-2 border-black bg-blue-500 rounded-lg">
              <div className="  mx-auto flex items-center justify-center sm: text-white">
                openSubscribePopupicon
              </div>
            </button>
          </div>
          <Subscribe
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
          {isPopupOpen && (
            <div
              className=" fixed w-screen h-screen inset-0 bg-black/5"
              onClick={closeDropdown}
            ></div>
          )}
        </div>

        <div className=" ">
          <div className=" rounded-md flex justify-between mb-2 px-3 py-2 bg-gray-200 font-bold text-sm">
            Upcoming Invoice
          </div>
          <div className=" flex-col sm:flex-row flex gap-6 border border-gray-200 rounded-lg py-10 px-8">
            <div className=" flex flex-col sm:w-full sm:border-r-2 ">
              <div className=" flex items-center  justify-center sm:justify-start text-sm font-bold ">
                Billing Period
              </div>
              <div className=" flex items-center justify-center sm:justify-start sm:-mx-2">
                <LiaCalendarCheck className=" w-8 h-8" />
                Aug 27, 2023 - Sep 27, 2023
              </div>
            </div>
            <div className=" flex items-center gap-2 justify-center">
              <div className="font-bold ">Total</div>
              <div>$0.00</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-1 rounded-md sm:mb-2 sm:mt-10 flex justify-between  px-3 py-2 bg-gray-200 font-bold text-sm">
            <div>Upcoming Invoice Breakdown</div>
            <div>Amount</div>
          </div>
          {invoiceData.map((item, index) => (
            <div
              key={index}
              className="  flex justify-between mb-3 border-b-4 border-gray-300 px-3 py-2"
            >
              <div>{item.name}</div>
              <div>{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
