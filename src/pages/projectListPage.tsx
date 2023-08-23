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
      title: "A New Project",
      subtitle: "Testing a new project",
      svgurl:
        '<svg className="width="80" height="80" text-gray-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
      buttontext: "Go to project",
    },
    {
      title: "Custom Project",
      subtitle: "Testing a new project",
      svgurl: `
      <svg className=" text-gray-600"  width="80" height="80" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="4" rx="1" />  <rect x="4" y="12" width="6" height="8" rx="1" />  <line x1="14" y1="12" x2="20" y2="12" />  <line x1="14" y1="16" x2="20" y2="16" />  <line x1="14" y1="20" x2="20" y2="20" /></svg>
    `,
      buttontext: "Create project",
    },
    {
      title: "Crowdsourced Transcription",
      subtitle: "Testing a new project",
      svgurl:
        '<svg className="width="80" height="80" text-gray-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
      buttontext: "Start trnascribing",
    },
    {
      title: "OCR Correction",
      subtitle: "Testing a new project",
      svgurl:
        '<svg className="width="80" height="80" text-gray-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="3" y1="9" x2="21" y2="9" />  <line x1="9" y1="21" x2="9" y2="9" /></svg>',
      buttontext: "Correct OCR",
    },
  ];

  return (
    <div className="w-full ">
      <div className="mb-10">{modalOpen ? <NewProject /> : <div></div>}</div>
      {/* <div className="container text-2xl mx-auto font-bold">Project List</div> */}
      <section title="main" className="flex container w-full h-screen mx-auto ">
        <div className="text-black w-full ">
          {project[0] && isLogin ? (
            <div className="grid lg:grid-cols-2 items-center gap-5 md:grid-cols-1">
              {project.map((item) => {
                return (
                  <div
                    // onClick={() => navigator('/project', { state: { item: item } })}
                    className="col-span-1 h-fit transition-all  ease-in-out duration-500 rounded-2xl justify-center p-5 shadow-md m-2 mt-4 min-w-full hover:shadow-lg hover:bg-gray-200 border"
                  >
                    {/* <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{item.ServiceDID}</div> */}
                    <div className="flex">
                      <div className="text-xl font-bold mb-2">
                        {" "}
                        Name: {item.projectName}
                      </div>
                      <div className="text-lg right-2 ml-auto font-bold">
                        Project ID: {item.clientId}
                      </div>
                    </div>
                    <div>
                      <div className="flex ">
                        <div className="font-bold">Permissions :&nbsp;</div>{" "}
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
                        <Link
                          to={`${item.clientId}/dashboard`}
                          onClick={() => {
                            setSelectProject(item);
                          }}
                          className="flex items-center w-fit font-bold bg-[#2096F3] rounded-xl px-3 text-white -mt-4"
                        >
                          <div className="flex ml-auto">DashBoard</div>
                          <img
                            src={Right}
                            className="w-10 resize-x -scale-x-100 -mr-3"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              onClick={() => newProject()}
              className="flex text-l font-bold transition-all w-full h-[150px] ease-in-out duration-500 rounded-lg  p-5 shadow-md m-2 mt-4  hover:shadow-lg hover:bg-gray-200"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: projectList[0].svgurl,
                }}
                className="mr-2"
              />
              <div className="flex flex-col">
                A New Project
                <button className="bg-[#2096F3] text-white py-2 px-4 rounded-lg mt-2 w-40">
                  {projectList[1].buttontext}
                </button>
              </div>
            </div>
            // <div>
                
            // </div>
          )}

          {/* <div className=" grid md:grid-cols-2  items-center">
            {projectList.map((project, index) => {
              return (
                <div
                  key={index}
                  className="transition-all w-full  h-[130px] ease-in-out duration-500 rounded-lg justify-center p-5 shadow-md m-2 mt-4 hover:shadow-lg hover:bg-gray-200"
                >
                  <div className="flex float-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: projectList[index].svgurl,
                      }}
                      className="mr-2 "
                    />
                    <div className="flex-col">
                      <div className=" text-l font-bold">{project.title}</div>
                      <div className="text-sm text-gray-500 ">
                        {project.subtitle}
                      </div>
                      <button className="bg-[#2096F3] text-white py-2 px-4 rounded-lg mt-2 w-40">
                        {project.buttontext}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </div>
  );
}
