import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { Close } from "../assets/icons/close";
import { projectModalState, projectState } from "../recoil/dashBoard/project";
import Dropdown from "./project/dropDown";
import { AiOutlineClose } from "react-icons/ai";
import { useInput } from "../hooks/useInput";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
export default function NewProjectForm({
  visible,
  setVisible,
  setNewProjectState,
}) {
  const projectName = useInput("", "projectName");
  const redirectUri = useInput("", "redirectUri");
  const [dropdownVisibility, setDropdownVisibility] = useState([false, false]);
  const [project, setProject] = useState({
    projectName: "",
    startProjectDate: 0,
    clientId: 0,
    redirectUri: "",
    didChain: 'None',
    serviceChain: 'None',
  });
  if (!visible) return null;

  // 모달이 열릴 때 스크롤을 막습니다.
  if (visible) document.body.style.overflow = "hidden";
  

  const didChain = ["Klaytn", "Tezos", "Ethereum", "Solana"];
  const serviceChain = ["None", "Klaytn", "Tezos", "Ethereum","Solana"];

  const chains = [
    {
      index: 0,
      title: "User information storage chain (DID)",
      stateKey: "didChain",
      items: didChain,
    },
    {
      index: 1,
      title: "User Service Chain ",
      stateKey: "serviceChain",
      items: serviceChain,
    },
  ];

  const handleClick = ({ item, index, stateKey }) => {
    setProject((prev) => ({
      ...prev,
      [stateKey]: item,
    }));
    setDropdownVisibility([
      ...dropdownVisibility.slice(0, index),
      false,
      ...dropdownVisibility.slice(index + 1),
    ]);
  };

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const makeProject = async () => {
    document.body.style.overflow = "auto";
    let newProject = {
      ...project,
      projectName: projectName.value.projectName,
      redirectUri: redirectUri.value.redirectURI,
      startProjectDate: new Date().getTime(),
      clientId: randomNumberInRange(100000, 999999),
    };
    setNewProjectState(newProject);
    setVisible(false);
    resetValue();
  };

  const resetValue =()=> {
    projectName.resetValue();
    redirectUri.resetValue();
    setProject({
      projectName: "",
      startProjectDate: 0,
      clientId: 0,
      redirectUri: "",
      didChain: null,
      serviceChain: null,
    })
  }

  const renderChainLabel = (index) => {
    const icon =
      dropdownVisibility[index] && project.didChain ? (
        <AiOutlineUp />
      ) : (
        <AiOutlineDown />
      );
      const label = (index === 0 ? project.didChain : project.serviceChain) || "Select Chain";

    return (
      <div className="flex items-center justify-around">
        {label}
        {icon}
      </div>
    );
  };

  return (
    <div className="fixed w-3/5 h-auto bg-gray-300 left-1/2 right-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 antialiased  rounded-lg border border-gray-300 shadow-xl z-20">
      <div className="flex p-3 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <p className="font-semibold text-gray-800">New Project</p>
      </div>
      <div className="flex flex-col px-6 py-5 bg-gray-50">
        <p className="mb-2 font-semibold text-gray-500">Project Name</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Name"
            id="ProjectName"
            defaultValue={projectName.value.projectName}
            onChange={(e) => projectName.onChange(e)}
            className="p-5 bg-white border border-gray-200 rounded w-full shadow-sm h-12"
          />
          <button
            className="absolute right-8 "
            onClick={() => projectName.resetValue()}
          >
            <AiOutlineClose size={26} />
          </button>
        </div>
        <div className="text-gray-500 mb-3 ml-2">
          The name is used only to identify the client.
        </div>
        <div className="flex flex-col mb-3 gap-3">
          <p className=" mb-2 font-semibold text-gray-500">Redirect Url</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Redirect URL"
              id="Server Url"
              defaultValue={redirectUri.value.redirectUri}
              onChange={(e) => redirectUri.onChange(e)}
              className="p-5 bg-white border border-gray-200 rounded w-full shadow-sm h-12"
            />
            <button
              className="absolute right-8 "
              onClick={() => redirectUri.resetValue()}
            >
              <AiOutlineClose size={26} />
            </button>
          </div>
        </div>
        <div className="relative">
          {chains.map((chain, i) => (
            <div key={i}>
              <p className="mb-2 font-semibold text-gray-500 ">{chain.title}</p>
              <div>
                <button
                  onClick={() =>
                    setDropdownVisibility([
                      ...dropdownVisibility.slice(0, chain.index),
                      !dropdownVisibility[chain.index],
                      ...dropdownVisibility.slice(chain.index + 1),
                    ])
                  }
                  className={`p-2 bg-white shadow-sm  border border-gray-200 w-36 rounded-sm ${
                    !project[chain.stateKey] && "text-gray-500"
                  }`}
                >
                  {renderChainLabel(chain.index)}
                </button>
                <Dropdown visibility={dropdownVisibility[chain.index]}>
                  <ul
                    className={`flex flex-col gap-3 bg-white duration-300 border border-gray-100 ${
                      dropdownVisibility[chain.index]
                        ? "translate-y-0 " : " -translate-y-52"
                    }`}
                  >
                    {chain.items.map((item, index) => (
                      <button
                        key={index}
                        className={`w-36 py-2 text-center hover:bg-gray-100${
                          index < chain.items.length - 1 ? "border-b-[1px] hover:bg-gray-100" : ""
                        }`}
                        onClick={() =>
                          handleClick({
                            item,
                            index: chain.index,
                            stateKey: chain.stateKey,
                          })
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </ul>
                </Dropdown>
                {dropdownVisibility[chain.index] && (
                  <div
                    onClick={() =>
                      setDropdownVisibility([
                        ...dropdownVisibility.slice(0, chain.index),
                        false,
                        ...dropdownVisibility.slice(chain.index + 1),
                      ])
                    }
                    className="fixed h-full w-full left-0 top-0 z-40"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
        <button
          className="font-semibold text-gray-600"
          onClick={() => setVisible(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 text-white font-semibold bg-blue-500 rounded-sm"
          onClick={() => makeProject()}
        >
          Make
        </button>
      </div>
    </div>
  );
}
