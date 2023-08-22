
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { projectType } from "../../recoil/dashBoard/project";
import Path from "./path";

export default function ApiKey({item}:{item:projectType}) {
    const location = useLocation();
    const pathName = location.pathname;
    const apikey1 = "ab090990336c0a8b0809b809";
    const tezosEndpoint = "https://tezos.com";
    const klaytnEndpoint = "https://klaytn.foundation/";
    const [copied, setCopied] = useState([false,false]);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied[0]) setCopied([false, copied[1]]);
            if (copied[1]) setCopied([copied[0], false]);
        }, 1500);
        return () => clearTimeout(timeout);
    }, [copied]);

    const HandleCopy = (index:number) => {
        navigator.clipboard.writeText(index === 0 ? apikey1 : index === 1 ? tezosEndpoint : klaytnEndpoint);
        setCopied((prevCopied) => {
          const newCopied = [...prevCopied];
          newCopied[index] = true;
          return newCopied;
        });
    }

    return (
        <div id="ApiKey" >
            <Path pathname={pathName}/>
            <h1 className="font-bold text-black mb-2 uppercase text-2xl">ApiKey</h1>
            <div className="text-black flex  text-xl my-3">
                <div className="font-medium">ClientID: </div>
                <div className="ml-2 ">{item.clientId}</div>
            </div>
            <div className="relative w-full p-4 rounded-xl bg-white text-black border-gray-400 border my-10">
                <div>API KEY</div>
                <div className="flex items-center mt-2">
                    <div className="w-full py-2 border rounded-xl px-4 justify-center bg-black/5">{apikey1}</div>
                    <button
                        className="px-5 py-2 w-28 h-10 mx-3 border bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 rounded-lg shadow "
                        onClick={() => HandleCopy(0)}>
                        {!copied[0] ? "Copy" :
                            <div className="flex w-full h-full items-center transition-all duration-300 ease-in-out">
                                <svg
                                    width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" color='green'
                                    style={{ strokeDasharray: 100, strokeDashoffset: copied ? 0 : -50, transition: 'all 300ms ease-in-out' }}
                                >
                                    <path d="M13.25 4.75L6 12L2.75 8.75" />
                                </svg>
                                Copied!
                            </div>
                        }
                    </button>
                </div >
            </div>
            <div className="relative w-full p-4 rounded-xl bg-white text-black border-gray-400 border my-10">
                <div>Endpoints</div>
                <div className="flex items-center mt-2">
                    <div className="font-bold text-lg w-20">Tezos</div>
                    <div className="w-full py-2 border rounded-xl px-4 justify-center bg-black/5">{tezosEndpoint}</div>
                    <button
                        className="px-5 py-2 w-28 h-10 mx-3 border bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 rounded-lg shadow "
                        onClick={() => HandleCopy(1)}>
                        {!copied[1] ? "Copy" :
                            <div className="flex w-full h-full items-center ">
                                <svg
                                    width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" color='green'
                                    style={{ strokeDasharray: 100, strokeDashoffset: copied ? 0 : -50, transition: 'all 300ms ease-in-out' }}
                                >
                                    <path d="M13.25 4.75L6 12L2.75 8.75" />
                                </svg>
                                Copied!
                            </div>
                        }
                    </button>
                </div >
                <div className="flex items-center mt-2">
                    <div className="font-bold text-lg w-20">Klaytn</div>
                    <div className="w-full py-2 border rounded-xl px-4 justify-center bg-black/5">{klaytnEndpoint}</div>
                    <button
                        className="px-5 py-2 w-28 h-10 mx-3 border bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 rounded-lg shadow "
                        onClick={() => HandleCopy(2)}>
                        {!copied[2] ? "Copy" :
                            <div className="flex w-full h-full items-center transition-all duration-300 ease-in-out">
                                <svg
                                    width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" color='green'
                                    style={{ strokeDasharray: 100, strokeDashoffset: copied ? 0 : -50, transition: 'all 300ms ease-in-out' }}
                                >
                                    <path d="M13.25 4.75L6 12L2.75 8.75" />
                                </svg>
                                Copied!
                            </div>
                        }
                    </button>
                </div >
            </div>
        </div>
    )
}