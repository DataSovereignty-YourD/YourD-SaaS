import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import Path from "./path";
import {
  activeUserData,
  IncomeData,
  incomeData,
  PieChartData,
  userGenderData,
  userGrowthData,
} from "../../test/dashboardTestData";
export default function DashBoard() {
  const location = useLocation();
  const pathName = location.pathname;

  let analyticsData: {
    title: string;
    value: number;
    icon: ReactElement;
    color: string;
  }[] = [
    {
      title: "Total Users",
      value: 1895,
      icon: <IoIosArrowUp color="lightGreen" size={30} />,
      color: "blue",
    },
    {
      title: "Daily New Users",
      value: 30,
      icon: <IoIosArrowUp color="lightGreen" size={30} />,
      color: "red",
    },
    {
      title: "Daily User Grow Rate",
      value: 460 / 100,
      icon: <IoIosArrowUp color="lightGreen" size={30} />,
      color: "orange",
    },
    {
      title: "Average Usage Time(mins)",
      value: 5,
      icon: <IoIosArrowDown color="red" size={30} />,
      color: "green",
    },
  ];

  return (
    <div id="dashboard">
      <Path pathname={pathName} />
      <h1 className="font-bold text-black mb-2 uppercase text-2xl">OverView</h1>
      <div id="total" className=" mb-5 ">
        <div className="flex gap-7 my-5">
          {analyticsData.map((data, index) => {
            return (
              <div
                key={data.title}
                className="bg-white min-w-[180px] h-fit w-1/4 p-3  font-bold rounded-sm  drop-shadow-md shadow-black transition-transform ease-in-out transform duration-500 hover:scale-110"
                style={{
                  borderBottomColor: data.color,
                  borderBottomWidth: 3,
                }}
              >
                <div className="mb-3 text-gray-500 uppercase">
                  {data.title}
                </div>
                <div className="flex items-center gap-2 my-2">
                  <div>{data.icon}</div>
                  <div className="text-black font-extrabold text-2xl">
                    {data.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex h-[450px] w-full bg-white rounded-lg shadow-md gap-6">
          <div className="w-2/3 h-full">
            <div className="font-bold  text-gray-500 border-b-2 p-4">
              {" "}
              User Growth Analysis
            </div>
            <div className="w-full h-full">
              {MyResponsiveLine({ data: userGrowthData })}
            </div>
          </div>
          <div className="w-1/3">
            <div className="font-bold  text-gray-500 border-b-2 p-4">
              {" "}
              Ads Incomes
            </div>
            <div className=" h-5/6 overflow-visible pr-6">
              {MyResponsiveBarCanvas({ data: incomeData })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-7 my-5">
        {IncomeData.map((income) => {
          return (
            <div className="w-1/4 bg-white h-fit p-4 font-bold rounded-sm  drop-shadow-md shadow-black transition-transform ease-in-out transform  duration-500 hover:scale-110">
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
      <div className="flex h-[300px] w-full gap-6 my-4">
        {UserAnalyticsData.map((item) => {
          return (
            <div className="h-full w-full bg-white rounded-sm drop-shadow-lg p-4 transition-transform ease-in-out transform  duration-500 hover:scale-110">
              <div className="text-black font-extrabold text-center w-full h-fit mb-2 text-lg">
                {item.title}
              </div>
              {MyResponsivePie({ data: item.data })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
      legend: "user",
      legendOffset: -40,
      legendPosition: "start",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={3}
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
