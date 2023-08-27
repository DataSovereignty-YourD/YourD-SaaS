import { ReactElement, useState } from "react";
import { incomeData, userGrowthData } from "../../../test/dashboardTestData";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Usage() {
  const [userAnalyticsViewDuration, setUserAnalyticsViewDuration] =
    useState(false);

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(true);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  let sortedUsers = [...users].sort((a, b) => {
    switch (sortColumn) {
      case "method":
        return sortDirection === "asc"
          ? a.method.localeCompare(b.method)
          : b.method.localeCompare(a.method);
      case "network":
        return sortDirection === "asc"
          ? a.network.localeCompare(b.network)
          : b.network.localeCompare(a.network);
      case "requests_volume":
        return sortDirection === "asc"
          ? a.requests_volume.localeCompare(b.requests_volume)
          : b.requests_volume.localeCompare(a.requests_volume);
      case "successful_requests":
        return sortDirection === "asc"
          ? a.successful_requests.localeCompare(b.successful_requests)
          : b.successful_requests.localeCompare(a.successful_requests);
      case "failed_requests":
        return sortDirection === "asc"
          ? a.failed_requests.localeCompare(b.failed_requests)
          : b.failed_requests.localeCompare(a.failed_requests);
      default:
        return 0;
    }
  });
  const columns = [
    { key: "method", label: "Method" },
    { key: "network", label: "Network" },
    { key: "requests_volume", label: "Requests_volume" },
    { key: "successful_requests", label: "Successful_requests" },
    { key: "failed_requests", label: "Failed_requests" },
  ];

  return (
    <div className=" ">
      <div className="font-bold text-black"></div>
      <div className=" grid grid-cols-1 md:grid-cols-2  bg-white rounded-lg  gap-28">
        <div className=" font-bold text-black ">
          <div>Network Request Volumes</div>
          <div className="flex justify-between">
            <div className="flex-col p-4">
              <div className=" font-bold   text-gray-500 border-b-2  uppercase">
                Last 7 days total
              </div>
              <div className="text-lg">73</div>
            </div>
            <div>
              <div className="max-w-lg mx-auto">
                <button
                  className="text-black border border-gray-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                  onClick={() => toggleDropdown()}
                >
                  Dropdown button
                  <MdOutlineKeyboardArrowDown />
                </button>

                <div
                  className="hidden bg-white text-base  list-none divide-y divide-gray-100 rounded shadow "
                  id="dropdown"
                >
                  <div className="">
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="  h-5/6 overflow-visible pr-6">
            {MyResponsiveBarCanvas({ data: incomeData })}
          </div>
        </div>
        <div className=" font-bold text-black ">
          <div>Method Request Volumes</div>
          <div className="flex justify-between">
            <div className="flex-col p-4">
              <div className=" font-bold   text-gray-500 border-b-2  uppercase">
                last 7 days total
              </div>
              <div className="text-lg">73</div>
            </div>
            <div>
              <div className="max-w-lg mx-auto">
                <button
                  className="text-black border border-gray-700  hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                  data-dropdown-toggle="dropdown"
                >
                  Dropdown button
                  <MdOutlineKeyboardArrowDown />
                </button>

                <div
                  className="hidden bg-white text-base  list-none divide-y divide-gray-100 rounded shadow "
                  id="dropdown"
                >
                  <div className="">
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="  h-5/6 overflow-visible pr-6">
            {MyResponsiveBarCanvas({ data: incomeData })}
          </div>
        </div>
      </div>
      <div
        id="usermanagement"
        className="min-h-[calc(100vh-4rem)] max-h-full pb-10 "
      >
        <h1 className="font-bold text-black mb-6 uppercase text-2xl my-12">
          Requests Activity
        </h1>

        <div className="bg-white mt-3 rounded-md drop-shadow-md">
          <div className="bg-white uppercase  drop-shadow-md text-black grid grid-cols-5 items-center justify-between px-2 py-3">
            {columns.map((column) => {
              const isDID = column.key === "did";
              return (
                <span
                  key={column.key}
                  className={`${
                    isDID ? "col-span-2" : "col-span-1"
                  } mx-2 hover:group relative cursor-pointer`}
                  onClick={() => handleSort(column.key)}
                >
                  {column.label}
                  <button className="absolute top-1/2 transform -translate-y-1/2">
                    {sortColumn === column.key && sortDirection === "asc" ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </button>
                </span>
              );
            })}
          </div>
          {sortedUsers.map((user) => (
            <div
              key={user.method}
              className=" grid grid-cols-5 text-black  items-center justify-between border-b p-2"
            >
              <span className=" col-span-1  mx-2 my-4 flex items-center">
                {user.method}
              </span>
              <span className=" col-span-1 mx-2">{user.network}</span>
              <span className=" col-span-1 mx-2">{user.requests_volume}</span>
              <span className=" col-span-1 mx-2">
                {user.successful_requests}
              </span>
              <span className=" col-span-1 mx-2">{user.failed_requests}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const MyResponsiveBarCanvas = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsiveBarCanvas
    data={data}
    keys={["hot dog", "burger"]}
    indexBy="Date"
    margin={{ top: 20, right: 0, bottom: 20, left: 60 }}
    pixelRatio={2}
    padding={0.2}
    innerPadding={0}
    minValue="auto"
    maxValue="auto"
    groupMode="stacked"
    layout="vertical"
    reverse={false}
    valueScale={{ type: "linear" }}
    colors={{ scheme: "pastel1" }}
    colorBy="id"
    borderRadius={0}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Date",
      legendPosition: "start",
      legendOffset: 36,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "UTC",
      legendPosition: "start",
      legendOffset: -40,
    }}
    enableGridY={true}
    enableLabel={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    isInteractive={true}
    legends={[]}
  />
);
let users = [
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "31",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "19",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBlockByNumber",
    network: "Sepolia",
    requests_volume: "6",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "4",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBlockByNumber",
    network: "Sepolia",
    requests_volume: "3",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBlockNumber",
    network: "Sepolia",
    requests_volume: "3",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "2",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "2",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "2",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_estimateGas",
    network: "Sepolia",
    requests_volume: "1",
    successful_requests: "100.00%",
    failed_requests: "0.00%",
  },
];
