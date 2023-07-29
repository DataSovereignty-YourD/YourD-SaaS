import { ResponsiveLine } from "@nivo/line";
import { useEffect } from "react";
import { projectType } from "../../recoil/dashBoard/project";

export default function DashBoard({ item }: { item: projectType }) {

    return (
        <div id="dashboard" >
            <div id="24h ">
                <h1 className="font-bold text-black mb-2 uppercase text-2xl">OverView</h1>
                <div id="total" className="grid  lg:grid-cols-5 md:grid-cols-2 gap-6 mb-5">
                    <div className="bg-black/5 p-6 rounded-lg h-28 ">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-8 h-8 text-black/5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-indigo-300 text-m font-medium uppercase leading-4">Total Users</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-xl py-2">1986</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/5 p-6 rounded-lg h-28 ">
                        <div className="flex flex-row space-x-4 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>

                            </span>
                            <div>
                                <p className="text-indigo-300 text-m font-medium uppercase leading-4">Daily Grow rate</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-xl py-2">71.5%</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-black/5 pt-6 pb-6 pl-6 rounded-lg h-28 ">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-in w-8 h-8">
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                            </div>
                            <div>
                                <p className="text-indigo-300 text-m font-medium uppercase leading-4">Daiily Login Transaction</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-xl py-2">2364</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-black/5 p-6 rounded-lg h-28 ">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-8 h-8 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-indigo-300 text-m font-medium uppercase leading-4">Total Users</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-xl py-2">1986</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-black/5 p-6 rounded-lg h-28 ">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-8 h-8 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-indigo-300 text-m font-medium uppercase leading-4">Total Users</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-xl py-2">1986</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="h-96 w-full lg:col-span-5  bg-white rounded-lg p-2 md:col-span-3">
                        {MyResponsiveLine({ data: exdata })}

                    </div>
                </div>

                <h1 className="font-bold text-black py-4 uppercase">Last 24h Statistics</h1>
                <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
                    <div className="bg-black/5 to-white/5 p-6 rounded-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-10 h-10 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">Users</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-lg">+201</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/5 p-6 rounded-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-10 h-10 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </div>
                            <div >
                                <p className="text-teal-300 text-sm font-medium uppercase leading-4">Income</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span className="text-lg">$873.88</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>

                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/5 p-6 rounded-lg">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-10 h-10 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-blue-300 text-sm font-medium uppercase leading-4">Traffic</p>
                                <p className="text-black font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>+3923</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>

                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="last-incomes">
                <h1 className="font-bold py-4 text-black uppercase">Last 24h incomes</h1>
                <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                            <a href="#" className="inline-flex space-x-2 items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
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
                            <a href="#" className="inline-flex space-x-2 items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
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
                            <a href="#" className="inline-flex space-x-2 items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <span>Info</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


const exdata = [
    {
        "id": "Total User",
        "color": "hsl(74, 70%, 50%)",
        "data": [
            {
                "x": "6/28",
                "y": 967
            },
            {
                "x": "6/29",
                "y": 1002
            },
            {
                "x": "6/30",
                "y": 1105
            },
            {
                "x": "6/31",
                "y": 1175
            },
            {
                "x": "7/1",
                "y": 1299
            },
            {
                "x": "7/2",
                "y": 1496
            },
            {
                "x": "7/3",
                "y": 1652
            },
            {
                "x": "7/4",
                "y": 1785
            },
            {
                "x": "7/5",
                "y": 1986
            },
        ]
    },
    {
        "id": "New User",
        "color": "hsl(41, 70%, 50%)",
        "data": [
            {
                "x": "6/28",
                "y": 24
            },
            {
                "x": "6/29",
                "y": 35
            },
            {
                "x": "6/30",
                "y": 103
            },
            {
                "x": "6/31",
                "y": 70
            },
            {
                "x": "7/1",
                "y": 124
            },
            {
                "x": "7/2",
                "y": 97
            },
            {
                "x": "7/3",
                "y": 164
            },
            {
                "x": "7/4",
                "y": 133
            },
            {
                "x": "7/5",
                "y": 201
            }
        ]
    }
]

const MyResponsiveLine = ({ data /* see data tab */ }: any) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 90, bottom: 30, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            // stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}

        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',

        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'user',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 13,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                        }
                    }
                ]
            }
        ]}
    />
)