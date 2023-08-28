import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export default function Subscribe({ isPopupOpen, setIsPopupOpen }) {
  const [isChosen, setIsChosen] = useState(false);
  const isAnyPlanChosen = isChosen;
  const [chosenPlan, setChosenPlan] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  function ToggleSelect({ index }) {
    const handleClick = () => {
      if (chosenPlan === index) {
        setIsChosen(false);
        setChosenPlan(null);
      } else {
        setIsChosen(true);
        setChosenPlan(index);
      }
    };
    return (
      <button
        className={`w-4 h-4 rounded-full border-2 mt-[-1rem] ml-2 ${
          chosenPlan === index ? "bg-green-500" : "bg-gray-200"
        }`}
        onClick={handleClick}
      ></button>
    );
  }

  const ToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  if (!isPopupOpen) {
    return null;
  }
  const contentsItems = [
    {
      title: "Discover",
      description: "Start building your project for free.",
      price: "Free",
      apiCredits: "10 million API Credits Included",
      additionalInfo: "Auto-scaling not Included",
      examples: ["Example1", "Example2", "Example3", "Example4", "Example5"],
      color: "bg-slate-50",
      textColor: "text-slate-400",
      iconColor: "darkgray",
    },
    {
      title: "Build",
      description: "Get more for building larger projects.",
      price: "$49/mo",
      apiCredits: "20 million API Credits Included",
      additionalInfo: "+$20 /additional million",
      examples: ["Example6", "Example7", "Example8", "Example9", "Example10"],
      color: "bg-white",
      textColor: "text-sky-600",
      iconColor: "#1C9DEB",
    },
    {
      title: "Expand",
      description: "Get more for building larger projects..",
      price: "$299/mo",
      apiCredits: "120 million API Credits Included",
      additionalInfo: "+$10 /additional million",
      examples: [
        "Example11",
        "Example12",
        "Example13",
        "Example14",
        "Example15",
      ],
      color: "bg-white",
      textColor: "text-sky-600",
      iconColor: "#1C9DEB",
    },
  ];
  const currentPlan = contentsItems[0].title;

  return (
    <div className="bg-slate-50 text-black absolute  w-fit h-fit z-10 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-white h-14 rounded-lg">
        <div className="ml-5 text-black font-bold h-1/2 text-xl">
          Upgrade Plan
        </div>
        <div className="mr-4">
          <button onClick={() => setIsPopupOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="flex mt-8">
        {contentsItems.map((item, index) => {
          let nowItem = false;
          if (item.title === currentPlan) {
            nowItem = true;
          }
          return (
            <div
              key={index}
              className={`${item.color} border border-zinc-300 rounded-lg w-80 h-fit mx-6`}
            >
              <div className="flex flex-col ml-8 mr-6 mt-5">
                <div className="flex justify-between items-center mb-3 font-bold text-2xl">
                  <span className={item.textColor}>{item.title}</span>
                  {!nowItem ? (
                    <ToggleSelect index={index} />
                  ) : (
                    <div className="bg-slate-100 rounded-lg w-24 h-8  flex items-center justify-center ml-3 border border-slate-200">
                      <div className="text-slate-400 text-sm">Current plan</div>
                    </div>
                  )}
                </div>
                <div className={item.textColor + " text-sm font-bold"}>
                  {item.description}
                </div>
                <div className={`${item.textColor} text-4xl mt-5 font-bold`}>
                  {item.price}
                </div>
                <div className="font-bold text-black text-sm mt-3">
                  {item.apiCredits}
                </div>
                <div className="font-bold text-slate-400 text-xs">
                  {item.additionalInfo}
                </div>
                <div className="py-8">
                  <div className="border-t border-black"></div>
                  {item.examples.map((example, eIndex) => (
                    <div key={eIndex} className="flex items-center my-2">
                      <BsCheckLg size={20} color={item.iconColor} />
                      <div className="font-bold text-black text-sm ml-4">
                        {example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-6 ">
        <div className="flex flex-col items center bg-slate-50 rounded-lg mt-6 w-full h-28 border border-slate-300">
          <div className="font-bold text-gray-400 text-xl mx-4 mt-5">
            Enterprise
          </div>
          <div className="font-bold text-slate-300 text-sm mx-4">
            #Example you want to write
          </div>
        </div>
      </div>

      <div className="flex justify-center font-bold text-slate-400 items-center mt-12">
        Full plan comparison
        <button onClick={ToggleExpand}>
          <IoIosArrowDown
            size={24}
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="flex justify-center items-center text-slate-400 font-bold mt-6">
          Example
        </div>
      )}
      <div className="flex justify-between items-center bg-white h-16 border mt-12 ">
        <div></div>
        <button
          className={`px-4 py-2 rounded-lg mr-3 ${
            isAnyPlanChosen
              ? "bg-blue-400 text-white"
              : "bg-gray-300 text-gray-600"
          } transition-colors duration-200`}
          disabled={!isAnyPlanChosen}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
