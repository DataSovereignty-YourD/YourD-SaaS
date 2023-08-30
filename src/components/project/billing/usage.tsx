import { ReactElement, useEffect, useState } from "react";
import { incomeData, userGrowthData } from "../../../test/dashboardTestData";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { select } from "@material-tailwind/react";

export default function Usage() {
  const [userAnalyticsViewDuration, setUserAnalyticsViewDuration] =
    useState(false);
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isDropdownA, setDropdownA] = useState(false);
  const [isDropdownB, setDropdownB] = useState(false);
  const [sortedUsers, setSortedUsers] = useState([...users]);
  const [selectedDate, setSelectedDate] = useState(dates[1].list);
  const [selectedDateInfo, setSelectedDateInfo] = useState(null);

  useEffect(() => {
    const selectedDateInfo = dates.find(
      (dateInfo) => dateInfo.list === selectedDate
    );
    if (selectedDateInfo) {
      setSelectedDateInfo(selectedDateInfo);
    }
  }, [selectedDate]);

  useEffect(() => {
    let newSortedUsers = [...users].sort((a, b) => {
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
            ? parseInt(a[sortColumn]) - parseInt(b[sortColumn])
            : parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
        case "successful_requests":
          return sortDirection === "asc"
            ? parseInt(a[sortColumn]) - parseInt(b[sortColumn])
            : parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
        case "failed_requests":
          return sortDirection === "asc"
            ? parseInt(a[sortColumn]) - parseInt(b[sortColumn])
            : parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
        default:
          return 0;
      }
    });
    setSortedUsers(newSortedUsers);
  }, [sortDirection]);

  const toggleDropdownA = () => {
    setDropdownA(!isDropdownA);
  };
  const toggleDropdownB = () => {
    setDropdownB(!isDropdownB);
  };
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const handleDateSelect = (selectedList) => {
    setSelectedDate(selectedList); // 선택한 list 값을 업데이트
    setDropdownA(false);
  };
  const columns = [
    { key: "method", label: "Method" },
    { key: "network", label: "Network" },
    { key: "requests_volume", label: "Requests_volume" },
    { key: "successful_requests", label: "Successful_requests" },
    { key: "failed_requests", label: "Failed_requests" },
  ];

  function DropDownA() {
    const menuItems = ["Dashboard", "Settings", "Earnings", "Sign out"];
    return (
      <div>
        <button
          className="text-black border border-gray-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdownA}
        >
          Periods
          <MdOutlineKeyboardArrowDown />
        </button>

        {isDropdownA && (
          <div
            className="bg-white absolute text-base list-none  z-50  justify-center flex items-center divide-gray-100 rounded shadow"
            id="dropdown"
          >
            <ul className="py-1">
              {dates.map((dates, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    onClick={() => handleDateSelect(dates.list)}
                  >
                    {dates.list}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  function DropDownB() {
    const menuItems = ["All methods", "sepolia", "node", "klaytn"];
    return (
      <div>
        <button
          className="text-black border border-gray-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdownB}
        >
          All methods
          <MdOutlineKeyboardArrowDown />
        </button>

        {isDropdownB && (
          <div
            className="bg-white absolute text-base list-none  z-50 justify-center flex items-center divide-gray-100 rounded shadow"
            id="dropdown"
          >
            <ul className="py-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className=" ">
      <div className="font-bold text-black"></div>
      <div className=" grid grid-cols-1 md:grid-cols-2  bg-white rounded-lg  gap-16">
        <div className=" font-bold text-black p-5 ">
          <div className="mx-3">Network Request Volumes</div>
          <div className="flex justify-between">
            <div className="flex-col p-4">
              <div className=" font-bold   text-gray-500 border-b-2  uppercase">
                {selectedDateInfo && selectedDateInfo.date} total
              </div>
              <div className="text-lg">73</div>
            </div>
            <div>
              <div className="max-w-lg mx-auto">
                <DropDownA />
              </div>
            </div>
          </div>
          <div className="  h-5/6 overflow-visible pr-6">
            {MyResponsiveBarCanvas({ data: incomeData })}
          </div>
        </div>
        <div className=" font-bold text-black p-5 ">
          <div className="mx-3">Method Request Volumes</div>
          <div className="flex justify-between">
            <div className="flex-col p-4">
              <div className=" font-bold   text-gray-500 border-b-2  uppercase">
                last 7 days total
              </div>
              <div className="text-lg">73</div>
            </div>
            <div>
              <div className="max-w-lg mx-auto">
                <div>
                  <DropDownB />
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
        id="requests activity"
        className="min-h-[calc(100vh-4rem)] max-h-full pb-10 "
      >
        <h1 className="font-bold text-black mb-6 uppercase text-2xl my-12">
          Requests Activity
        </h1>

        <div className="bg-white mt-3 rounded-md drop-shadow-md">
          <div className="bg-white uppercase  drop-shadow-md text-black grid grid-cols-5 items-center justify-between px-2 py-3">
            {columns.map((column, index) => {
              const isDID = column.key === "did";
              return (
                <span
                  key={`${column.key} + ${index}`}
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
          {sortedUsers.map((user, index) => (
            <div
              key={`${user.method} + ${index}`}
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
    colors={{ scheme: "pastel2" }}
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
    successful_requests: "90.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBlockByNumber",
    network: "Sepolia",
    requests_volume: "6",
    successful_requests: "70.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "4",
    successful_requests: "60.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBlockByNumber",
    network: "Sepolia",
    requests_volume: "3",
    successful_requests: "20.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBlockNumber",
    network: "Sepolia",
    requests_volume: "3",
    successful_requests: "30.00%",
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
    successful_requests: "50.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_getBalance",
    network: "Sepolia",
    requests_volume: "2",
    successful_requests: "60.00%",
    failed_requests: "0.00%",
  },
  {
    method: "eth_estimateGas",
    network: "Sepolia",
    requests_volume: "1",
    successful_requests: "40.00%",
    failed_requests: "0.00%",
  },
];

let dates = [
  {
    date: "Last 24 hours",
    list: "day",
  },
  {
    date: "Last 7 days",
    list: "week",
  },
  {
    date: "Last 30 days",
    list: "month",
  },
  {
    date: "Last 6 months",
    list: "6months",
  },
  {
    date: "Last 1 year ",
    list: "year",
  },
];
