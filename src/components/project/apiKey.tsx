import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { projectType } from "../../recoil/dashBoard/project";
import Path from "./path";

export default function ApiKey({ item }: { item: projectType }) {
  const location = useLocation();
  const pathName = location.pathname;
  const apikey1 = "ab090990336c0a8b0809b809";
  const tezosEndpoint = "https://tezos.com";
  const klaytnEndpoint = "https://klaytn.foundation/";
  const [copied, setCopied] = useState([false, false]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied[0]) setCopied([false, copied[1]]);
      if (copied[1]) setCopied([copied[0], false]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [copied]);

  const Endpoints = [
    {
      chain: "ethereum",
      endpointUri: "https://ethereum.org",
    },
    {
      chain: "klaytn",
      endpointUri: "https://klaytn.foundation",
    },
    {
      chain: "tezos",
      endpointUri: "https://tezos.com",
    },
  ];

  const CopyButton = (data) => (
    <button
      className="px-5 py-2 w-28 h-10 mx-3 border bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 rounded-lg shadow "
      onClick={() => navigator.clipboard.writeText(String(data))}
    >
      Copy
    </button>
  );

  return (
    <div id="ApiKey" className="min-h-[calc(100vh-4rem)] ">
      <Path pathname={pathName} />
      <h1 className="font-bold text-black mb-2 uppercase text-2xl">ApiKey</h1>
      <div className="flex flex-col bg-white drop-shadow-md rounded-sm p-4 text-black my-3 items-center gap-4">
        <div className="flex w-full items-center">
          <div className="font-medium w-20 whitespace-nowrap">Client ID </div>
          <div className="w-full py-2 px-4 ml-2 border rounded-lg bg-black/5">
            {item.clientId}
          </div>
          {CopyButton(item.clientId)}
        </div>
        <div className="flex w-full items-center">
          <div className="font-medium w-20 whitespace-nowrap">API KEY</div>
          <div className="w-full py-2 px-4 ml-2 border rounded-lg justify-center bg-black/5">
            {apikey1}
          </div>
          {CopyButton(apikey1)}
        </div>
      </div>
      <div className="relative w-full p-4 rounded-sm drop-shadow-md  bg-white text-black my-10 ">
        <div className="uppercase font-medium">Endpoints</div>
        {Endpoints.map((type,index) => {
          return (
            <div key={index} className="flex items-center mt-2">
              <div className="font-bold text-lg w-32 mr-2">{type.chain}</div>
              <div className=" w-full py-2 px-4 border rounded-xl justify-center bg-black/5">
                {type.endpointUri}
              </div>
              {CopyButton(type.endpointUri)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
