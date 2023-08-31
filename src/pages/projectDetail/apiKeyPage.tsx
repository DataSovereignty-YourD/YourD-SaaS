import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { projectType } from '../../recoil/dashBoard/project';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CgCopy } from 'react-icons/cg';
import Path from '../../components/project/path';
import LocalPush from '../../components/utils/localPush';
import ethereumImg from '../../assets/img/eth_logo.png';
import solanaImg from '../../assets/img/solana_logo.png';
import tezosImg from '../../assets/img/tezos_logo.png';
import xrpImg from '../../assets/img/xrp_logo.png';
import klaytnImg from '../../assets/img/klaytn_logo.png'
export default function ApiKey({ item }: { item: projectType }, visible) {
  const location = useLocation();
  const pathName = location.pathname;
  const apikey1 = 'ab090990336c0a8b0809b809';
  const [isApiKey, setIsApiKey] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const handleApiKeyToggle = () => {
    setIsApiKey(!isApiKey);
  };

  const Endpoints = [
    {
      chain: 'Ethereum',
      endpointUri: 'https://ethereum.org',
      image: ethereumImg,
    },
    {
      chain: 'Klaytn',
      endpointUri: 'https://klaytn.foundation',
      image: klaytnImg,
    },
    {
      chain: 'Tezos',
      endpointUri: 'EXAMPLE',
      image: tezosImg,
    },
    {
      chain: 'Solana',
      endpointUri: 'https://api.mainnet-beta.solana.com',
      image: solanaImg,
    },
    { chain: 'XRP', endpointUri: 'EXAMPLE', image: xrpImg },
  ];

  const CopyButton = (data) => (
    <button
      className="w-fit h-10 px-2 py-2 ml-3 border bg-white  hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 rounded-sm shadow"
      onClick={() => {
        navigator.clipboard.writeText(String(data));
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
      }}
    >
      <CgCopy size={24} color={'gray'} />
    </button>
  );

  return (
    <div id="ApiKey" className="min-h-[calc(100vh-4rem)] ">
      <Path pathname={pathName} />
      {showNotification && (
        <LocalPush message="Successfully Copied!" type="success" />
      )}
      <h1 className="font-bold text-black mb-2 uppercase text-2xl">ApiKey</h1>
      <div className="flex flex-col bg-white drop-shadow-md rounded-sm p-4 text-black my-3 items-center gap-4">
        <div className="flex w-full items-center">
          <div className="font-medium w-32 whitespace-nowrap">Client ID </div>
          <div className="w-full py-2 px-4 ml-2 border rounded-sm bg-black/5">
            {item.clientId}
          </div>
          {CopyButton(item.clientId)}
        </div>
        <div className="flex w-full items-center">
          <div className="font-medium w-32 whitespace-nowrap">API KEY</div>
          <input
            type={isApiKey ? 'text' : 'password'}
            value={apikey1}
            disabled
            className="w-full py-2 px-4 ml-2 border rounded-sm justify-center bg-black/5 focus:outline-0"
          />
          <button
            type="button"
            onClick={handleApiKeyToggle}
            className="absolute right-[75px] "
            style={{ width: '24px', height: '24px' }}
          >
            {isApiKey ? <FaEyeSlash /> : <FaEye />}
          </button>
          {CopyButton(apikey1)}
        </div>
      </div>
      <h1 className="font-bold text-black mb-2 uppercase text-2xl mt-3">
        Endpoints
      </h1>
      <div className="relative w-full p-4 rounded-sm drop-shadow-md  bg-white text-black my-2 ">
        {Endpoints.map((type, index) => {
          return (
            <div key={index} className="flex items-center mt-2">
              <img src={type.image} className="w-8 h-8 mr-2" />
              <div className="font-medium text-lg w-32 mr-2">{type.chain}</div>
              <div className=" w-full py-2 px-4 border rounded-sm justify-center bg-black/5">
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