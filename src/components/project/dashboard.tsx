import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBarCanvas } from '@nivo/bar'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projectType } from "../../recoil/dashBoard/project";
import Path from "./path";
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io";
import { incomeData, userGrowthData } from "../../test/dashboardTestData";
export default function DashBoard() {
  const location = useLocation();
  const pathName = location.pathname;

  let analyticsData: {
    title: string;
    value: number;
    icon: any;
    color: string;
  }[] = [
    {
      title: "Total Users",
      value: 1895,
      icon: <IoIosArrowUp color="lightGreen" size={30}/>,
      color: 'blue',
    },
    {
      title: "Daily New Users",
      value: 30,
      icon: <IoIosArrowUp color="lightGreen" size={30}/>,
      color: 'red',
    },
    {
      title: "Daily User Grow Rate",
      value: 460 / 100,
      icon: <IoIosArrowUp color="lightGreen" size={30}/>,
      color: 'orange',
    },
    {
      title: "Average Usage Time(mins)",
      value: 5,
      icon: <IoIosArrowDown color="red" size={30}/>,
      color: 'green',
    },
  ];

  return (
    <div id="dashboard">
      <div id="24h ">
        <Path pathname={pathName} />
        <h1 className="font-bold text-black mb-2 uppercase text-2xl">
          OverView
        </h1>
        <div id="total" className=" mb-5 ">
          <div className="flex gap-6 my-5">
            {analyticsData.map((data,index) => {
              return (
                <div key={data.title} className="bg-white min-w-[200px] w-full p-3  font-bold rounded-sm shadow-md" style={{borderBottomColor:data.color,borderBottomWidth:3}}>
                  <div className="mb-3 text-gray-500">{data.title.toUpperCase()}</div>
                  <div className="flex items-center gap-2 my-2">
                    <div>{data.icon}</div>
                    <div className="text-black font-extrabold text-2xl">{data.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex h-[500px] w-full bg-white rounded-lg shadow-md gap-6">
            <div className="w-2/3 h-full">
              <div className="font-bold  text-gray-500 border-b-2 p-4"> User Growth Analysis</div>
              <div className="w-full h-full">
                {MyResponsiveLine({ data: userGrowthData })}
              </div>
            </div>
            <div className="w-1/3">
            <div className="font-bold  text-gray-500 border-b-2 p-4"> D-Ad Incomes</div>
              <div className=" h-5/6 overflow-visible pr-6">
                {MyResponsiveBarCanvas({data:incomeData})}
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-black py-4 uppercase">
          Last 24h Statistics
        </h1>
        <div
          id="stats"
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5"
        >
          <div className="bg-black/5 to-white/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-10 h-10 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                  Users
                </p>
                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                  <span className="text-lg">+201</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-10 h-10 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-teal-300 text-sm font-medium uppercase leading-4">
                  Income
                </p>
                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                  <span className="text-lg">$873.88</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-10 h-10 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium uppercase leading-4">
                  Traffic
                </p>
                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+3923</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="last-incomes">
        <h1 className="font-bold py-4 text-black uppercase">
          Last 24h incomes
        </h1>
        <div
          id="stats"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <div className="bg-black/5 to-white/5 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="text-3xl p-4">💰</div>
              <div className="p-2">
                <p className="text-xl font-bold">348$</p>
                <p className="text-black font-medium">Amber Gates</p>
                <p className="text-black text-sm">24 Nov 2022</p>
              </div>
            </div>
            <div className="border-t border-black/5 p-4">
              <a
                href="#"
                className="inline-flex space-x-2 items-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span>Info</span>
              </a>
            </div>
          </div>
          <div className="bg-black/5 to-white/5 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="text-3xl p-4">💰</div>
              <div className="p-2">
                <p className="text-xl font-bold">68$</p>
                <p className="text-black font-medium">Maia Kipper</p>
                <p className="text-black text-sm">23 Nov 2022</p>
              </div>
            </div>
            <div className="border-t border-black/5 p-4">
              <a
                href="#"
                className="inline-flex space-x-2 items-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span>Info</span>
              </a>
            </div>
          </div>
          <div className="bg-black/5 to-white/5 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="text-3xl p-4">💰</div>
              <div className="p-2">
                <p className="text-xl font-bold">12$</p>
                <p className="text-black font-medium">Oprah Milles</p>
                <p className="text-black text-sm">23 Nov 2022</p>
              </div>
            </div>
            <div className="border-t border-black/5 p-4">
              <a
                href="#"
                className="inline-flex space-x-2 items-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span>Info</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
          translateY:50,
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

const MyResponsiveBarCanvas = ({ data /* see data tab */ }:{data:any}) => (
  <ResponsiveBarCanvas
      data={data}
      keys={[
          'hot dog',
          'burger',
      ]}
      indexBy="Date"
      
      margin={{ top: 20, right: 0, bottom:20, left: 60 }}
      pixelRatio={2}
      padding={0.2}
      innerPadding={0}
      minValue="auto"
      maxValue="auto"
      groupMode="stacked"
      layout="vertical"
      reverse={false}
      valueScale={{ type: 'linear' }}
      colors={{ scheme: 'pastel2' }}
      colorBy="id"
      borderRadius={0}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Date',
          legendPosition: 'start',
          legendOffset: 36
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'incomes',
          legendPosition: 'start',
          legendOffset: -40
      }}
      enableGridY={true}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
      }}
      isInteractive={true}
      legends={[]}
  />
)