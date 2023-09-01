import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { projectType } from '../../recoil/dashBoard/project';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CgCopy } from 'react-icons/cg';
import Path from '../../components/project/path';
import LocalPush from '../../components/utils/localPush';
import Dropdown from '../../components/project/dropDown';

import ethereumImg from '../../assets/img/eth_logo.png';
import solanaImg from '../../assets/img/solana_logo.png';
import tezosImg from '../../assets/img/tezos_logo.png';
import xrpImg from '../../assets/img/xrp_logo.png';
import klaytnImg from '../../assets/img/klaytn_logo.png';
export default function ApiKey({ item }: { item: projectType }, visible) {
  const location = useLocation();
  const pathName = location.pathname;
  const apikey1 = 'ab090990336c0a8b0809b809';
  const [isApiKey, setIsApiKey] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const handleApiKeyToggle = () => {
    setIsApiKey(!isApiKey);
  };
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  if (!visible) return null;
  //did 체인 선택, 서비스 체인 선택 항목 추가

  if (visible) document.body.style.overflow = 'hidden';
  // 모달이 열릴 때 스크롤을 막습니다.
  else document.body.style.overflow = ''; // 모달이 닫힐 때 스크롤을 다시 허용합니다.

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
          <div className="font-medium w-32 whitespace-nowrap ">Client ID </div>
          <div className="w-full py-2 px-4 ml-2 border rounded-sm bg-black/5">
            {item.clientId}
          </div>
          {CopyButton(item.clientId)}
        </div>
        <div className="flex w-full items-center">
          <div className="font-lg text-xl w-32 whitespace-nowrap sm:text-lg">
            API KEY
          </div>
          <input
            type={isApiKey ? 'text' : 'password'}
            value={apikey1}
            disabled
            className="w-full py-2 px-4 ml-2 border rounded-sm justify-center bg-black/5 focus:outline-0 sm:flex-col max-h-[50px] overflow-auto"
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
      <h1 className="font-bold text-black mb-2 uppercase text-xl mt-3">
        Endpoints
      </h1>
      <div className="relative w-full p-4 rounded-sm drop-shadow-md  bg-white text-black my-2 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 ">
        {Endpoints.map((type, index) => {
          return (
            <div key={index} className="flex items-center mt-2">
              <img src={type.image} className="w-8 h-8 mr-2" />
              <div className="font-medium text-lg w-32 mr-2 sm:text-sm overflow-hidden">
                {type.chain}
              </div>
              <div className="w-full py-2 px-4 border rounded-sm justify-center bg-black/5 flex items-center sm:flex-col max-h-[50px] overflow-auto">
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

{
  /* <button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
{dropdownVisibility ? "Close" : "Select"}
</button>
<Dropdown visibility={dropdownVisibility}>
<ul
className={`flex flex-col gap-3 bg-white duration-300 border border-gray-100 ${
  dropdownVisibility ? "translate-y-0 " : " -translate-y-52"
}`}
>
<button className="border-b-[1px] px-4 py-2">Klaytn</button>
<li className="border-b-[1px] px-4 py-2">Tezos</li>
<li className="border-b-[1px] px-4 py-2">item 3</li>
<li className="px-4 py-2">item 4</li>
</ul>
</Dropdown> */
}
