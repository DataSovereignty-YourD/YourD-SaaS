import { useState } from "react";
import { GoLinkExternal } from "react-icons/go";

export default function Appearance() {
  const [toggleStates, setToggleStates] = useState({
    showHomeButton: false,
    showBookmarkBar: false,
  });
  const [fontSize, setFontSize] = useState("medium");

  const handleToggle = (key) => {
    setToggleStates({
      ...toggleStates,
      [key]: !toggleStates[key],
    });
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const toggleItems = [
    {
      title: "Show home button",
      key: "showHomeButton",
      description: toggleStates.showHomeButton ? "enabled" : "disabled",
    },
    {
      title: "Show bookmark bar",
      key: "showBookmarkBar",
      description: toggleStates.showBookmarkBar ? "enabled" : "disabled",
    },
  ];

  return (
    <div className="">
      <div className="flex font-bold text-black mb-5  text-lg md:text-xl">
        Appearance
      </div>
      <div className="bg-white p-4">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div className="justify-between items-center">
            <div className="text-black font-bold">Themes</div>
            <div className="text-slate-500 font-bold">
              Open Chrome Web Store
            </div>
          </div>
          <GoLinkExternal size={20} color="black" />
        </div>
        {toggleItems.map((item, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div className="text-black font-bold">{item.title}</div>
              <label
                htmlFor={`toggle${index}`}
                className="flex items-center cursor-pointer"
              >
                <div className="relative flex justify-center items-center w-12 h-6">
                  <input
                    type="checkbox"
                    id={`toggle${index}`}
                    className="sr-only"
                    checked={toggleStates[item.key]}
                    onChange={() => handleToggle(item.key)}
                  />
                  <div
                    className={`block ${
                      toggleStates[item.key] ? "bg-green-300" : "bg-zinc-500"
                    } w-full h-full rounded-full transition-colors duration-300`}
                  ></div>
                  <div
                    className={`dot absolute  left-0  ${
                      toggleStates[item.key]
                        ? "bg-green-600 translate-x-[1.7rem]"
                        : "bg-zinc-50"
                    } w-7 h-7 rounded-full transition-transform duration-300`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="text-slate-500 font-bold">{item.description}</div>
          </div>
        ))}

        <div className="flex justify-between pb-4">
          <div className="text-black font-bold">Font size</div>
          <div className="relative w-64">
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-5-5h10l-5 5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
