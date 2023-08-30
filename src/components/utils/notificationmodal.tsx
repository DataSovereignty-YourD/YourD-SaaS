import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai";
import { IoIosTimer, IoMdTime, IoMdPeople } from "react-icons/io";
import { useState } from "react";

export default function NotificationModal({ isDropdownOpen, setDropdownOpen }) {
  if (!isDropdownOpen) return null;
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const NotificationData = [
    {
      id:1,
      message: "Aida Burg commented your post.",
      icon: <AiOutlineMessage size={30} color={"#007AFF"} />,
      time: "AM 01:30",
    },
    {
      id:2,
      message: "Your Profile is Complete 60%",
      icon: <IoIosTimer size={30} color={"#ffd400"} />,
      time: "AM 02:00",
    },
    {
      id:3,
      message: "Your User Rate is already.",
      icon: <IoMdTime size={30} color={"#007aff"} />,
      time: "PM 14:00",
    },
    {
      id:4,
      message: "Cristina Danny invited to join Meeting.",
      icon: <IoMdPeople size={30} color={"#FFD400"} />,
      time: "PM 18:45",
    },
  ];
  return (
    <div>
      <div
        className="absolute min-w-max w-fit h-fit pb-4  bg-white p-2 shadow z-[1] bg-base-100 rounded-xl"
        style={{ transform: "translateX(-90%)" }}
      >
        <div className="flex items-center justify-between">
          <div className=" text-xl bold font-normal mb-2 ml-4 py-1">
            Notification
          </div>

          <button onClick={closeDropdown}>
            <AiOutlineClose className="mx-3" />
          </button>
        </div>
        <hr></hr>
        {NotificationData.map((notification,index) => {
          return (
            <div key={notification.id} className=" flex my-2  border-b gap-3 border-gray-100 py-1 justify-between items-center font-semibold text-gray-500 md:mx-2">
              <div className="flex gap-3">
                <div className="object-contain sm: my-auto mx-auto">
                  {notification.icon}
                </div>
                <div className="sm:min-w-[200px] text-md font-normal sm:text-md lg:min-w-[300px] lg:whitespace-nowrap ">
                  {notification.message}
                </div>
              </div>
              <div className="text-right text-xs font-normal sm:text-sm lg:whitespace-nowrap ">
                {notification.time}
              </div>
            </div>
          );
        })}
        <button className="bg-white flex text-blue-500 py-2 px-8 rounded-lg mx-auto font-normal">
          View All
        </button>
      </div>

      <div
        className="fixed w-screen h-screen inset-0 bg-black/5"
        onClick={closeDropdown}
      ></div>
    </div>
  );
}
