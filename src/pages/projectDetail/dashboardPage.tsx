import React, { ReactElement, useState, useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { GoPersonAdd } from "react-icons/go";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import CanvasJSReact from "@canvasjs/react-charts";
import Path from "../../components/project/path";
import {
  activeUserData,
  IncomeData,
  incomeData,
  PieChartData,
  recentTransactions,
  userGenderData,
} from "../../test/dashboardTestData";
export default function DashBoard() {
  const location = useLocation();
  const pathName = location.pathname;
  const [userAnalyticsViewDuration, setUserAnalyticsViewDuration] =
    useState(false);
  const [sortColumn, setSortColumn] = useState("");
  const [sortedUsers, setSortedUsers] = useState([...recentTransactions]);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    let newSortedUsers = [...recentTransactions].sort((a, b) => {
      switch (sortColumn) {
        case "txId":
          return sortDirection === "asc"
            ? a.txId.localeCompare(b.txId)
            : b.txId.localeCompare(a.txId);
        case "user":
          return sortDirection === "asc"
            ? a.user.localeCompare(b.user)
            : b.user.localeCompare(a.user);
        case "date":
          return sortDirection === "asc"
            ? parseInt(a[sortColumn]) - parseInt(b[sortColumn])
            : parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
        case "cost":
          return sortDirection === "asc"
            ? parseInt(a[sortColumn]) - parseInt(b[sortColumn])
            : parseInt(b[sortColumn]) - parseInt(a[sortColumn]);

        default:
          return 0;
      }
    });
    setSortedUsers(newSortedUsers);
  }, [sortDirection]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const columns = [
    { key: "txId", label: "TxId" },
    { key: "user", label: "User" },
    { key: "date", label: "Date" },
    { key: "cost", label: "Cost" },
  ];

  type analyticsDataType = {
    title: string;
    titleicon: ReactElement;
    value: number;
    changes: string;
    icon: ReactElement;
    color: string;
  };

  let analyticsData: analyticsDataType[] = [
    {
      title: "Total Users",
      titleicon: <GoPersonAdd />,
      value: 1895,
      changes: "+45",
      icon: <FaArrowTrendUp color="lightGreen" size={30} />,
      color: "blue",
    },
    {
      title: "Daily New Users",
      titleicon: <GoPersonAdd />,
      value: 30,
      changes: "+24",
      icon: <FaArrowTrendUp color="lightGreen" size={30} />,
      color: "red",
    },
    {
      title: "Daily User Grow Rate",
      titleicon: <GoPersonAdd />,
      value: 460 / 100,
      changes: "+27",
      icon: <FaArrowTrendUp color="lightGreen" size={30} />,
      color: "orange",
    },
    {
      title: "Average Usage Time(mins)",
      titleicon: <GoPersonAdd />,
      value: 5,
      changes: "-2",
      icon: <IoIosArrowDown color="red" size={30} />,
      color: "green",
    },
  ];

  return (
    <div id="dashboard" className="pb-20">
      <Path pathname={pathName} />
      <h1 className="font-bold text-black mb-2 uppercase text-xl sm:text-2xl">
        OverView
      </h1>
      <div id="total" className=" w-full mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3  sm:gap-7 my-5">
          {analyticsData.map((data, index) => {
            return (
              <div
                key={data.title}
                className="bg-white w-full h-fit p-3 rounded-sm drop-shadow-md shadow-black transition-transform ease-in-out transform duration-500 "
                style={{
                  borderBottomColor: data.color,
                  borderBottomWidth: 3,
                }}
              >
                <div className=" flex items-center h-8 md:h-12">
                  <div
                    className=" text-black font-bold text-2xl"
                  >
                    {data.titleicon}
                  </div>
                  <div className=" mx-2  text-gray-500 text-sm md:text-lg uppercase font-bold">
                    {data.title}
                  </div>
                </div>
                <div className=" flex items-center gap-2 my-2">
                  <div className="mr-0 sm:mr-2">
                    {Number(data.changes) < 0 ? (
                      <FaArrowTrendDown size={24} color={"red"} />
                    ) : (
                      <FaArrowTrendUp size={24} color={"lightgreen"} />
                    )}
                  </div>
                  <div className="text-black text-sm font-bold sm:text-2xl w-full">
                    {data.value}
                  </div>
                  <div
                    className={`text-sm sm:text-xl font-medium border bg-${
                      data.color
                    }/5 border-gray-300 px-1 sm:px-3 py-1 rounded-md ${
                      Number(data.changes) < 0
                        ? "text-red-500"
                        : "text-green-400"
                    }`}
                  >
                    {data.changes}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-fit pb-10 bg-white rounded-lg shadow-md gap-6">
          <div className="w-full h-[450px] md:col-span-2">
            <div className="font-bold flex justify-between text-gray-500 text-sm md:text-lg border-b-2 p-4 ">
              <div>User Growth Analysis</div>
              <div className="flex border h-fit items-center border-gray-200 text-xs rounded-sm">
                <button
                  onClick={() => setUserAnalyticsViewDuration(false)}
                  className={`border-r-[1px] py-1 px-4 ${
                    !userAnalyticsViewDuration ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  7D
                </button>
                <button
                  onClick={() => setUserAnalyticsViewDuration(true)}
                  className={`px-4 py-1 ${
                    userAnalyticsViewDuration ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  1M
                </button>
              </div>
            </div>
            <div className="w-full h-full">{<AreaChart />}</div>
          </div>
          <div className="w-full h-[450px]">
            <div className="font-bold   text-gray-500 border-b-2 p-4 ">
              Ads Incomes
            </div>
            <div className=" h-5/6 overflow-visible pr-6">
              {MyResponsiveBarCanvas({ data: incomeData })}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 my-5">
        {IncomeData.map((income) => {
          return (
            <div
              key={income.title}
              className=" bg-white h-fit p-4 font-bold rounded-sm  drop-shadow-md shadow-black transition-transform ease-in-out transform  duration-500 "
            >
              <div className="font-bold text-gray-500 uppercase">
                {income.title}
              </div>
              <div className="flex items-center">
                <div className="text-xl mr-2 text-gray-500">$</div>
                <div className="text-black text-2xl w-full">
                  {income.value.toLocaleString()}
                </div>
                <div
                  className={`text-xl ${
                    Number(income.change) < 0
                      ? "text-red-500"
                      : "text-green-400"
                  }`}
                >
                  {income.change}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-2xl font-bold text-bold text-black">
        User Analytics
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 my-4">
        {UserAnalyticsData.map((item) => {
          return (
            <div
              key={item.title}
              className="h-[300px] w-full bg-white rounded-sm drop-shadow-lg p-4 transition-transform ease-in-out transform  duration-500 hover:scale-105"
            >
              <div className="text-black font-extrabold text-center w-full h-fit mb-2 text-lg">
                {item.title}
              </div>
              {MyResponsivePie({ data: item.data })}
            </div>
          );
        })}
      </div>
      <div>
        <div
          id="requests activity"
          className="min-h-[calc(100vh-4rem)] max-h-full pb-10 "
        >
          <h1 className="font-bold text-black mb-6 uppercase text-2xl my-12">
            Requests Activity
          </h1>

          <div className="bg-white mt-3 rounded-md drop-shadow-md text-center">
            <div className="bg-white uppercase font-bold  drop-shadow-md text-black grid grid-cols-4 items-center justify-between px-2 py-3">
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
                key={`${user.txId} + ${index}`}
                className=" grid grid-cols-4 text-black justify-center  border-b p-2"
              >
                <span className=" col-span-1  mx-2 my-4    ">{user.txId}</span>
                <span className=" col-span-1 mx-2 my-4 ">{user.user}</span>
                <span className=" col-span-1 mx-2 my-4 ">{user.date}</span>
                <span className="  col-span-1 mx-2 my-4 ">{user.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export class AreaChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      animationDuration: 2000,
      title: {
        text: "",
      },
      axisX: {
        startValue: new Date(2022, 8),
        gridDashType: "dot",
        gridThickness: 1,
        labelFontSize: 11,
        indexLabelPlacement: "inside",
      },
      axisY: {
        title: "Total users",
        gridDashType: "dot",
        gridThickness: 1,
      },
      legend: {
        fontSize: 20,
      },
      data: [
        {
          type: "splineArea",
          fillOpacity: 0.4,
          markerType: "none",
          lineColor: "#28b56c",
          color: "#c3fade",
          xValueFormatString: "YYYY",
          yValueFormatString: "",

          dataPoints: [
            { x: new Date(2022, 7), y: 200 },
            { x: new Date(2022, 8), y: 500 },
            { x: new Date(2022, 9), y: 350 },
            { x: new Date(2022, 10), y: 700 },
            { x: new Date(2022, 11), y: 450 },
            { x: new Date(2022, 12), y: 900 },
            { x: new Date(2023, 1), y: 1500 },
            { x: new Date(2023, 2), y: 1200 },
            { x: new Date(2023, 3), y: 1800 },
            { x: new Date(2023, 4), y: 1900 },
            { x: new Date(2023, 5), y: 2500 },
            { x: new Date(2023, 6), y: 2300 },
            { x: new Date(2023, 7), y: 3500 },
            { x: new Date(2023, 8), y: 3700 },
            { x: new Date(2023, 9), y: 5000 },
          ],
        },
        {
          type: "column",
          fillOpacity: 1,
          lineColor: "blue",
          color: "#f6c8a5",
          xValueFormatString: "YYYY",
          yValueFormatString: "",
          indexLabelPlacement: "outside",
          indexLabel: "{y}",
          labelFontSize: 8,

          dataPoints: [
            { x: new Date(2022, 7), y: 0 },
            { x: new Date(2022, 8), y: 300 },
            { color: "#b3dcc7", x: new Date(2022, 9), y: -150 },
            { x: new Date(2022, 10), y: 350 },
            { color: "#b3dcc7", x: new Date(2022, 11), y: -250 },
            { x: new Date(2022, 12), y: 450 },
            { x: new Date(2023, 1), y: 600 },
            { color: "#b3dcc7", x: new Date(2023, 2), y: -300 },
            { x: new Date(2023, 3), y: 600 },
            { x: new Date(2023, 4), y: 100 },
            { x: new Date(2023, 5), y: 600 },
            { color: "#b3dcc7", x: new Date(2023, 6), y: -200 },
            { x: new Date(2023, 7), y: 1200 },
            { x: new Date(2023, 8), y: 200 },
            { x: new Date(2023, 9), y: 1300 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          containerProps={{ width: "100%", height: "100%" }}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

const MyResponsiveLine = ({ data }: any) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 20, right: 30, bottom: 130, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisBottom={{
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Date",
      legendOffset: 36,
      legendPosition: "start",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "User",
      legendOffset: -40,
      legendPosition: "start",
    }}
    pointSize={10}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    useMesh={true}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateY: 50,
        itemWidth: 80,
        itemHeight: 10,
        symbolSize: 18,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

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
      legend: "incomes",
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

const UserAnalyticsData = [
  {
    title: "Users by age",
    data: PieChartData,
  },
  {
    title: "Users by Gender",
    data: userGenderData,
  },
  {
    title: "User usage rate",
    data: activeUserData,
  },
];

const MyResponsivePie = ({ data }: any) => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 90, bottom: 50, left: 90 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.23]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#000000"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[]}
    fill={[]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 20,
        itemsSpacing: 7,
        itemWidth: 40,
        itemHeight: 10,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 14,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);
