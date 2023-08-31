import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import useSessionStorage from "../../hooks/sesstionStorage";
import { currentProjectState } from "../../recoil/dashBoard/project";
export default function ProjectListBox({ project }) {
  const [selectProject, setSelectProject] = useSessionStorage('currentProjectInfo',{});

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

  return (
    <Link
      to={`${project.clientId}/dashboard`}
      onClick={() => {
        setSelectProject(project);
      }}
      className="flex col-span-1 w-full bg-white transition-all ease-in-out duration-500 shadow-md min-w-full hover:shadow-lg hover:bg-gray-200 border align-top"
    >
      <div className="w-full border-l-4 border-blue-400 h-fit p-3 md:p-5 flex flex-col justify-center">
        <div className="flex w-full items-center justify-between mb-2">
          <div className="text-[1rem] md:text-lg font-bold">
            Name: {project.projectName}
          </div>
          <div className="text-[0.8rem] md:text-lg right-2 ml-2 font-bold">
            Client ID: {project.clientId}
          </div>
        </div>
        <div>
          <div className="flex text-[1rem]">
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
              <div>{ProjectDate(project.startProjectDate)}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
