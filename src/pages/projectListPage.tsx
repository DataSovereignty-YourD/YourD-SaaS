import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import NewProject from "../components/newProject";
import {
  currentProjectState,
  projectModalState,
  projectValue,
} from "../recoil/dashBoard/project";
import { loginValue } from "../recoil/loginState";
import Right from "../assets/icons/Right.png";
import { useEffect } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

export default function ProjectListPage() {
  const [modalOpen, setModalOpen] = useRecoilState(projectModalState);
  const [selectProject, setSelectProject] = useRecoilState(currentProjectState);
  const isLogin = useRecoilValue(loginValue);
  const project = useRecoilValue(projectValue);

  useEffect(() => {
    console.log(project);
  }, [project]);

  const newProject = () => {
    if (isLogin) setModalOpen(true);
    else alert("로그인 후 이용하세요");
  };
  function randomNumberInRange(min: number, max: number) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const ProjectDate = (StartProjectDate: number) => {
    let date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(StartProjectDate);
    return date;
  };

  let projectList = [
    {
      title: "Crowdsourced Transcription",
      subtitle: "Testing a new project",
      icon: <AiOutlineLock size={30} />,
      buttontext: "Start trnascribing",
    },
    {
      title: "OCR Correction",
      subtitle: "Testing a new project",
      icon: <BsLayoutTextWindowReverse size={30} />,
      buttontext: "Correct OCR",
    },
  ];

  return (
    <div className="w-full pt-12 min-h-screen h-fit px-20">
      <div className="mb-10">{modalOpen ? <NewProject /> : <div></div>}</div>
      <section title="main" className="container w-full mx-auto ">
        {project[0] && isLogin ? (
          <div className="items-center gap-5">
            {project.map((item) => {
              return (
                <div>
                  <div className="flex items-start text-2xl font-bold text-black ">
                    Projects
                  </div>
                  <Link
                    to={`${item.clientId}/dashboard`}
                    onClick={() => {
                      setSelectProject(item);
                    }}
                    className="flex col-span-1 w-full bg-white transition-all ease-in-out duration-500  shadow-md m-2 mt-12 min-w-full hover:shadow-lg hover:bg-gray-200 border align-top"
                  >
                    <div
                      className="flex-1 border-l-4 border-blue-400 h-fit p-5 flex flex-col justify-center"
                    >
                      <div className="flex">
                        <div className="text-xl font-bold mb-2">
                          Name: {item.projectName}
                        </div>
                        <div className="text-lg right-2 ml-auto font-bold">
                          Project ID: {item.clientId}
                        </div>
                      </div>
                      <div>
                        <div className="flex ">
                          <div className="font-bold">Permissions :&nbsp;</div>
                          <div>Owner</div>
                        </div>
                        <div className="truncate flex">
                          <div className="font-bold">Total User: &nbsp;</div>
                          <div> {randomNumberInRange(100, 1000)}</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex">
                            <div className="font-bold">Create: &nbsp;</div>
                            <div>{ProjectDate(item.startProjectDate)}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-around h-full w-full">
            <div className="flex flex-col w-full items-center my-16">
              <div className=" text-center text-black font-bold text-3xl mb-10">
                Creating a new project
              </div>
              <button
                onClick={isLogin ? () => newProject() : null}
                className="flex-col text-lg font-bold transition-all justify-center items-center  w-96 h-fit py-10 ease-in-out duration-500 rounded-lg bg-white  p-5 drop-shadow-md border-2 border-black border-dashed  mt-4 hover:shadow-lg 
                   hover:border-gray-500 active:drop-shadow-none active:shadow-none  "
              >
                <div className="flex justify-center items-center pb-5">

                  <AiOutlinePlus size={48} />
                </div>

                
                  <div className="text-center  pointer-events-none ">
                    Empty project
                  </div>
                  <div className="text-gray-400 text-center">
                    Starting from YourD
                  </div>
              </button>
                 
            </div>
          </div>
        )}

        <div className=" grid grid-cols-2 gap-8 items-center w-full pb-32">
          <div className="col-span-2 text-3xl font-bold mt-10">
            Let's get started
          </div>
          {projectList.map((project, index) => {
            return (
              <div
                key={index}
                className="transition-all col-span-1 w-full h-fit ease-in-out duration-100 rounded-sm justify-center p-10 bg-white shadow-md"
              >
                <div className="flex float-left  items-center">
                  <div className="mr-8">{project.icon}</div>
                  <div className="flex-col">
                    <div className=" text-l font-bold">{project.title}</div>
                    <div className="text-sm text-gray-500 ">
                      {project.subtitle}
                    </div>
                    <button className="bg-blue-200 text-black py-2 px-4 rounded-lg mt-2 w-40 drop-shadow-md hover:drop-shadow-lg active:drop-shadow-none ">
                      {project.buttontext}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
