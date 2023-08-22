import {  useNavigate } from "react-router-dom";

export default function Path({ pathname }: { pathname: string }) {
  const navigate = useNavigate();
  const HomePathName = pathname.split("/").slice(1, 3);
  const arrayPathName = pathname.split("/").slice(3);
  const lastPath = arrayPathName[arrayPathName.length - 1];

  const onClickImg = () => {
    navigate(`/${HomePathName[0]}/${HomePathName[1]}/dashboard`);
  };

  return (
    <div className="inline-flex items-center">
      <span onClick={onClickImg}>
        <svg
          className="h-6 w-6 text-black-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </span>
      <span className="text-lg flex min-w-[200px] p-1 text-gray-500 font-bold uppercase ">
        {arrayPathName.map((data) => {
          return (
            <div className="flex">
              <div className="text-black">&nbsp; / &nbsp;</div>
              <div
                className={data === lastPath ? "text-black" : "text-gray-400"}
              >
                {data }
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}
