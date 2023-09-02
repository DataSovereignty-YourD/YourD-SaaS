import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

export default function PeopleSettings() {
  const [isExpanded, setIsExpanded] = useState([false, false]);

  const settingsItems = [
    {
      id: 0,
      icon: <BsPersonCircle size={24} color="darkgray" />,
      title: "Person",
      content: "원하는 내용 추가",
    },
    {
      id: 1,
      title: "Sync and Google services",
      content: "",
    },
    {
      id: 2,
      title: "import bookmarrks and",
      content: "",
    },
  ];

  const toggleExpand = (index) => {
    setIsExpanded(prevIsExpanded => {
      const newIsExpanded = [...prevIsExpanded];
      newIsExpanded[index] = !newIsExpanded[index];
      return newIsExpanded;
    });
  };

  return (
    <div className="">
      <div className="text-black font-bold text-lg md:text-xl mb-5">People</div>
      {settingsItems.map((item) => (
        <div
          key={item.id}
          onClick={() => toggleExpand(item.id)}
        >
          <div className="flex justify-between items-center border border-inherit p-2 bg-white">
            <div className="flex items-center ml-2">
              {item.icon}
              <div className="text-black font-bold ml-2">{item.title}</div>
            </div>
            <button>
              {isExpanded[item.id] ? (
                <MdArrowDropDown size={42} color="black" />
              ) : (
                <MdArrowRight size={42} color="black" />
              )}
            </button>
          </div>
          {isExpanded[item.id] && (
            <div className="bg-white p-4 font-bold text-black">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
