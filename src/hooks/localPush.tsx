import React, { useEffect, useState } from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai';

type NotificationProps = {
    type : string;
  message: string;
  duration?: number;  // 지속 시간 (기본값: 3000ms)
};

const LocalPush = ({ message, duration = 3000,type }:NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);  // 컴포넌트 언마운트 시 타이머 제거
  }, [duration]);

  return (
    <div
      className={`fixed flex bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-4 text-sm items-center drop-shadow-md gap-4 bg-gray-50 rounded-sm z-50 text-black border-l-4 border-green-600 duration-300 ${isVisible ? '-translate-y-5' : 'translate-y-10'}`}
    >
      <AiOutlineCheckCircle size={24} color={'green'}/>{message}
    </div>
  );
};

export default LocalPush;
