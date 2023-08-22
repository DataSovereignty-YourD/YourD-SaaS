
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import NewProject from "../components/newProject";
import { currentProjectState, projectModalState, projectValue } from "../recoil/dashBoard/project";
import { loginValue } from "../recoil/loginState";
import Right from "../assets/icons/Right.png";
import ProjectDetailPage from "./projectDetailPage";
import { useEffect } from "react";

export default function ProjectListPage() {
    const [modalOpen, setModalOpen] = useRecoilState(projectModalState);
    const [selectProject,setSelectProject] = useRecoilState(currentProjectState);
    const isLogin = useRecoilValue(loginValue);
    const project = useRecoilValue(projectValue);
    const navigator = useNavigate();

    useEffect(() => { console.log(project) }, [project])

    const newProject = () => {
        if (isLogin) setModalOpen(true);
        else alert("로그인 후 이용하세요");
    }
    function randomNumberInRange(min: number, max: number) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const ProjectDate = (StartProjectDate: number) => {
        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(StartProjectDate)
        return date;
    }

    return (
        <div>
            <div className="mb-10">
                {modalOpen ? <NewProject /> : <div></div>}
            </div>
            <div className="container text-2xl mx-auto font-bold">Project List</div>
            <section title="main" className="flex container w-full h-screen mx-auto">
                <div className="text-black w-full ">
                    {project[0] && isLogin ?
                        <div className="grid lg:grid-cols-2 items-center gap-5 md:grid-cols-1">
                            {project.map((item) => {
                                return (
                                    <div
                                        // onClick={() => navigator('/project', { state: { item: item } })}
                                        className="col-span-1 h-fit transition-all  ease-in-out duration-500 rounded-2xl justify-center p-5 shadow-md m-2 mt-4 min-w-full hover:shadow-lg hover:bg-gray-200 border">
                                        {/* <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{item.ServiceDID}</div> */}
                                        <div className="flex">
                                            <div className="text-xl font-bold mb-2"> Name: {item.projectName}</div>
                                            <div className="text-lg right-2 ml-auto font-bold">Project ID: {item.clientId}</div>
                                        </div>
                                        <div>
                                            <div className="flex ">
                                                <div className="font-bold">Permissions :&nbsp;</div> <div>Owner</div>
                                            </div>
                                            <div className="truncate flex">
                                                <div className="font-bold">Total User: &nbsp;</div>
                                                <div> {randomNumberInRange(100, 1000)}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <div className="font-bold">Create: &nbsp;</div>
                                                    <div>
                                                        {ProjectDate(item.startProjectDate)}
                                                    </div>
                                                </div>
                                                <Link to={`${item.clientId}/dashboard`} onClick={()=>{setSelectProject(item)}} className="flex items-center w-fit font-bold bg-[#2096F3] rounded-xl px-3 text-white -mt-4">
                                                    <div className="flex ml-auto">DashBoard</div>
                                                    <img src={Right} className="w-10 resize-x -scale-x-100 -mr-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        : <div onClick={() => newProject()} className="transition-all w-[200px] h-[150px] ease-in-out duration-500 rounded-lg justify-center p-5 shadow-md m-2 mt-4 min-w-full hover:shadow-lg hover:bg-gray-200">
                            New Project
                            <img src={Right} className="w-10 -scale-x-100 " />
                        </div>}
                </div>
            </section>
        </div>
    )
}