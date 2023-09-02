import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { projectType } from '../../recoil/dashBoard/project';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CgCopy } from 'react-icons/cg';
import Path from '../../components/project/path';
import LocalPush from '../../components/utils/localPush';
import Dropdown from '../../components/project/dropDown';
import { RxDropdownMenu } from 'react-icons/rx';
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
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedUri, setSelectedUri] = useState({
    name: 'ECAD Labs',
    uri: 'https://mainnet.ecadinfra.com',
  });
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
      endpointUri: [
        {
          name: 'ECAD Labs',
          uri: 'https://mainnet.ecadinfra.com',
        },
        { name: 'SmartPy', uri: 'https://mainnet.smartpy.io' },
        { name: 'Tezos Foundation', uri: 'https://rpc.tzbeta.net/' },
        { name: 'Marigold', uri: 'https://mainnet.tezos.marigold.dev/' },
      ],
      image: tezosImg,
    },
    {
      chain: 'Solana',
      endpointUri: 'https://api.mainnet-beta.solana.com',
      image: solanaImg,
    },
    {
      chain: 'XRP',
      endpointUri: 'https://s1.ripple.com:51234/',
      image: xrpImg,
    },
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const CopyButton = (data) => (
    <button
      className="flex items-center justify-center w-10 h-10 px-2 py-2 sm:ml-3 border bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 rounded-sm shadow"
      onClick={() => {
        navigator.clipboard.writeText(String(data));
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
      }}
    >
      <CgCopy size={20} className="sm:hidden" color={'gray'} />
      <CgCopy size={16} className="hidden sm:inline-block" color={'gray'} />
    </button>
  );

  return (
    <div id="ApiKey" className="min-h-[calc(100vh-4rem)] ">
      <Path pathname={pathName} />
      {showNotification && (
        <LocalPush message="Successfully Copied!" type="success" />
      )}
      <h1 className="font-bold text-black my-5 uppercase text-xl ">ApiKey</h1>
      <div className="flex flex-col bg-white drop-shadow-md rounded-sm p-4 text-black my-3 items-center gap-4">
        <div className="flex w-full items-center">
          <div className="font-medium w-40 whitespace-nowrap text-sm sm:text-lg px-4 ml-2">
            Client ID{' '}
          </div>
          <div className="w-full py-2 px-4 ml-2 border rounded-sm text-sm sm:text-lg bg-black/5">
            {item.clientId}
          </div>
          {CopyButton(item.clientId)}
        </div>
        <div className="flex w-full items-center">
          <div className="font-medium text-sm w-40 whitespace-nowrap sm:text-lg px-4 ml-2">
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
            className="absolute right-[50px] "
            style={{ width: '24px', height: '24px' }}
          >
            {isApiKey ? <FaEyeSlash /> : <FaEye />}
          </button>
          {CopyButton(apikey1)}
        </div>
      </div>
      <h1 className="font-bold text-black my-5 uppercase text-xl ">
        Endpoints
      </h1>

      <div className="relative w-full p-4 rounded-sm drop-shadow-md bg-white text-black my-2 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 ">
        {Endpoints.map((type, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start mt-2 relative h-full"
            >
              <div className="flex mb-3 items-center">
                <img src={type.image} className="w-8 h-8 mr-2" />
                <div className="font-medium text-sm w-32 mr-2 sm:text-lg">
                  {type.chain}
                </div>
                {type.chain === 'Tezos' && (
                  <button
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                    className="sm:hidden flex bg-blue-white text-slate-400 font-bold border border-slate-300 h-10 items-center w-28 justify-between"
                  >
                    {selectedUri.name}
                  </button>
                )}
              </div>
              <div className="flex flex-col w-full sm:ml-40 justify-start">
                {Array.isArray(type.endpointUri) && (
                  <div className="hidden sm:flex flex-col relative -left-32">
                    <button
                      onClick={() => setDropdownVisible(!dropdownVisible)}
                      className="flex bg-blue-white text-slate-400 font-bold absolute left-0 border border-slate-300 h-10 items-center w-28 justify-between"
                    >
                      {selectedUri.name}
                    </button>
                    <div className="absolute mt-10">
                      <Dropdown
                        visibility={dropdownVisible}
                        style={{ top: '50px' }}
                      >
                        <div className="flex flex-col bg-white w-40">
                          {type.endpointUri.map((item, uriIndex) => (
                            <div
                              key={uriIndex}
                              className={`py-1 cursor-pointer ${
                                uriIndex === selectedItemIndex
                                  ? 'bg-blue-200'
                                  : 'hover:bg-gray-200'
                              }`}
                              onClick={() => {
                                setSelectedUri({
                                  name: item.name,
                                  uri: item.uri,
                                });
                                setSelectedItemIndex(uriIndex);
                                setDropdownVisible(false);
                              }}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </Dropdown>
                    </div>
                  </div>
                )}
                <div className="w-full py-2 px-4 border rounded-sm  bg-black/5 flex sm:flex-col max-h-[50px] overflow-auto ">
                  {Array.isArray(type.endpointUri) ? (
                    <div className="flex justify-between items-center h-full">
                      <div>{selectedUri.uri}</div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center">
                      {type.endpointUri}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {CopyButton(type.endpointUri)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
