
import { useRecoilState, useRecoilValue } from "recoil";
import NewProjectForm from "../components/newProjectForm";
import {
  projectModalState,
  projectState,
} from "../recoil/dashBoard/project";
import { loginValue } from "../recoil/loginState";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import useSessionStorage from "../hooks/sesstionStorage";
import ProjectListBox from "../components/project-list/projectListBox";

export default function ProjectListPage() {
  const [modalOpen, setModalOpen] = useRecoilState(projectModalState);
  const isLogin = useRecoilValue(loginValue);
  const [projectInfo, setProjectInfo] = useSessionStorage('projectInfo', []);
  const [project,setProjectState] = useRecoilState(projectState);
  const [newProjectState,setNewProjectState] = useState({});

  useEffect(() => {
    if(!modalOpen) {
      addProject();
      // window.sessionStorage.clear();
    }
  }, [modalOpen]);

  const addProject=()=> {
    if(Object.keys(newProjectState).length !== 0) {
      let newProject = 
      [
        ...projectInfo,
        newProjectState
      ];
      setProjectInfo(newProject);
      setProjectState(newProject);
    }
  }

  const newProject = () => {
    if (isLogin) setModalOpen(true);
    else alert("로그인 후 이용하세요");
  };

  const NewProjectButton = () => (
    <div className="flex flex-col items-center justify-around h-full w-full">
      <div className="flex flex-col w-full items-center my-16">
        <div className=" text-center text-black font-bold text-3xl mb-10">
          Creating a new project
        </div>
        <button
          onClick={isLogin ? () => newProject() : null}
          className="flex-col text-lg font-bold transition-all justify-center items-center  w-96 h-fit py-10 ease-in-out duration-500 rounded-lg bg-white  p-5 drop-shadow-md border-2  mt-4 hover:shadow-lg 
                   active:drop-shadow-none active:shadow-none  "
        >
          <div className="flex justify-center items-center pb-5">
            <AiOutlinePlus size={48} />
          </div>

          <div className="text-center  pointer-events-none ">Empty project</div>
          <div className="text-gray-400 text-center">Starting from YourD</div>
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full pt-12 min-h-screen h-fit px-20">
      <div className="mb-10">
        <NewProjectForm visible={modalOpen} setVisible={setModalOpen} setNewProjectState={setNewProjectState}/>
      </div>
      <section title="main" className="container w-full mx-auto ">
        {projectInfo[0] && isLogin ? (
          <div className="items-center ">
            <div className="flex justify-between mb-5">
              <div className="flex items-start text-2xl font-bold text-black ">
                Projects
              </div>
              <button onClick={()=>newProject()} className="px-4 py-2 bg-blue-400 rounded-md ">add Project</button>
            </div >
            <div className="flex flex-col gap-4">
              {projectInfo.map((item) => {
                return (
                  <div key={item.clientId}>
                    <ProjectListBox project={item}/>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <NewProjectButton />
        )}

        <div className=" grid grid-cols-2 gap-8 items-center w-full pb-32">
          <div className="col-span-2 text-3xl font-bold mt-10">
            Let's get started
          </div>
          {projectList.map((project, index) => {
            return (
              <div
                key={project.title}
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
      </section>
    </div>
  );
}
let projectList = [
  {
    title: "Yourd Docs",
    subtitle: "Testing a new project",
    icon: <AiOutlineLock size={30} />,
    buttontext: "Get Started",
  },
  {
    title: "Yourd Article",
    subtitle: "Testing a new project",
    icon: <BsLayoutTextWindowReverse size={30} />,
    buttontext: "button",
  },
];
