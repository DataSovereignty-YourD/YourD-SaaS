import { useCallback, useState } from "react";

export const useInput = (initialValue, name) => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback(
      (e) => setValue({ ...value, [name]: e.target.value }),
      [name, value]
    );
    const resetValue = useCallback(
        () => setValue({ ...value, [name]: '' }),
        [name, value]
      );
    return { value, onChange,resetValue };
  };