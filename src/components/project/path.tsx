import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { currentPageState } from "../../recoil/sideBarToggle";
import { useEffect } from "react";
export default function Path({ pathname }: { pathname: string }) {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useRecoilState(currentPageState);
  const HomePathName = pathname.split("/").slice(1, 3);
  const arrayPathName = pathname.split("/").slice(3);
  const lastPath = arrayPathName[arrayPathName.length - 1];

  useEffect(()=>{
    setCurrentPath(lastPath);
  },[])

  const onClickImg = () => {
    navigate(`/${HomePathName[0]}/${HomePathName[1]}/dashboard`);
  };

  return (
    <div className="inline-flex items-center" >
      <AiOutlineHome size={24} onClick={onClickImg}/>
      <span className="text-lg flex min-w-[200px] p-1 text-gray-500 font-bold uppercase ">
        {arrayPathName.map((data) => {
          return (
            <div key={data} className="flex">
              <div className="text-black">&nbsp; / &nbsp;</div>
              <div
                className={data === lastPath ? "text-black" : "text-gray-400"}
              >
                {data}
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}
