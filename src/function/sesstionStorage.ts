import { useState, useEffect } from 'react';

// 세션 스토리지의 특정 키에 대한 값을 가져오거나 설정하는 훅
function useSessionStorage(key, initialValue) {
  // 로컬 상태를 초기화합니다.
  // 세션 스토리지에 이미 값이 있으면 해당 값을, 없으면 initialValue를 사용합니다.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return JSON.parse(item).length ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // storedValue가 변경될 때마다 세션 스토리지를 업데이트합니다.
  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useSessionStorage;