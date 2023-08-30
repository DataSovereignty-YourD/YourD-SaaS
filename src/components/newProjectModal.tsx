import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { Close } from "../assets/icons/close";
import { projectModalState, projectState } from "../recoil/dashBoard/project";
import Dropdown from "./project/newProjectDropdown";
import { AiOutlineClose } from "react-icons/ai";
import useSessionStorage from "../function/sesstionStorage";
export default function NewProjectModal({
  visible,
  setVisible,
  setNewProjectState,
}) {
  const [projectName, setProjectName] = useState("");
  const [redirectUrls, setRedirectUrls] = useState<any>([""]);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  if (!visible) return null;
  //did 체인 선택, 서비스 체인 선택 항목 추가

  if (visible) document.body.style.overflow = "hidden";
  // 모달이 열릴 때 스크롤을 막습니다.
  else document.body.style.overflow = ""; // 모달이 닫힐 때 스크롤을 다시 허용합니다.

  const getName = (e: any) => {
    setProjectName(e.target.value);
  };

  const getRedirectUrl = (e: any, index: number) => {
    let updatedRedirectUrls: any = [...redirectUrls];
    updatedRedirectUrls[index] = e.target.value;
    setRedirectUrls(updatedRedirectUrls);
  };

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const makeProject = async () => {
    let newProject = {
      projectName: projectName,
      startProjectDate: new Date().getTime(),
      redirectURLs: redirectUrls,
      clientId: randomNumberInRange(100000, 999999),
    };
    setNewProjectState(newProject);
    // newProject.push({...{ProjectName:projectName,ServiceDID:project[project.length-1].ServiceDID}})
    setVisible(false);
  };

  const AddURL = () => {
    setRedirectUrls([...redirectUrls, ""]);
    console.log(redirectUrls);
  };
  const removeURL = (index: number) => {
    const updatedRedirectUrls = [...redirectUrls];
    updatedRedirectUrls.splice(index, 1);
    setRedirectUrls(updatedRedirectUrls);
  };

  return (
    <div className="absolute w-9/12 h-auto bg-gray-300 left-1/2 right-1/2 -translate-x-1/2 antialiased  rounded-lg border border-gray-300 shadow-xl z-10">
      <div className="flex p-3 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <p className="font-semibold text-gray-800">New Project</p>
      </div>
      <div className="flex flex-col px-6 py-5 bg-gray-50">
        <p className="mb-2 font-semibold text-gray-700">Project Name</p>
        <input
          type="text"
          placeholder="Type "
          id="ProjectName"
          onChange={getName}
          className="p-5  bg-white border border-gray-200 rounded shadow-sm h-12 mb-1"
        />
        <div className="text-gray-500 mb-3 ml-2">
          The name is used only to identify the client.
        </div>
        <div className="flex flex-col mb-3 gap-3">
          <p className="mb-2 font-semibold text-gray-700">Redirect Url 1</p>
          <input
            type="text"
            placeholder="Type Server URL"
            id="Server Url"
            onChange={(e) => getRedirectUrl(e, 0)}
            className="p-5 bg-white border border-gray-200 rounded w-full shadow-sm h-12"
          />
          <button
            className="absolute top-1/2 right-2  transform translate-y-1"
            onClick={() => removeURL(0)}
          >
            <AiOutlineClose size={26} />
          </button>
          {redirectUrls.map((url: any, index: number) => {
            if (index === 0) return null;
            return (
              <div key={index} className="relative mb-3">
                <p className="mb-2 font-semibold text-gray-700">
                  Redirect Url {index + 1}
                </p>
                <input
                  type="text"
                  placeholder="Type Server URL"
                  id="Server Url"
                  value={url}
                  onChange={(e) => getRedirectUrl(e, index)}
                  className="p-5 bg-white border border-gray-200  w-full rounded shadow-sm h-12"
                />
                <button
                  className="absolute top-1/2 right-2  transform translate-y-1"
                  onClick={() => removeURL(index)}
                >
                  <Close />
                </button>
              </div>
            );
          })}
          <Button
            className="border w-32 bg-blue-200 rounded-lg px-2 py-1 "
            onClick={() => AddURL()}
          >
            Add URL
          </Button>
        </div>
        <div className="relative mb-3 ">
          <p className="mb-2 font-semibold text-gray-700 ">
            User information storage chain
          </p>
          <div></div>
          <button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
            {dropdownVisibility ? "Close" : "Select"}
          </button>
          <Dropdown visibility={dropdownVisibility}>
            <ul
              className={`flex flex-col gap-3 bg-white duration-300 border border-gray-100 ${
                dropdownVisibility ? "translate-y-0 " : " -translate-y-52"
              }`}
            >
              <button className="border-b-[1px] px-4 py-2">Klaytn</button>
              <li className="border-b-[1px] px-4 py-2">Tezos</li>
              <li className="border-b-[1px] px-4 py-2">item 3</li>
              <li className="px-4 py-2">item 4</li>
            </ul>
          </Dropdown>
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
          className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          onClick={() => makeProject()}
        >
          Make
        </button>
      </div>
    </div>
  );
}
