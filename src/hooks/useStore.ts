import { useState, useEffect } from "react";

// const useStore = <T>(store: (callback: T) => any, callback: T) => {
//   const result = store(callback);
//   const [data, setData] = useState(result);

//   useEffect(() => {
//     setData(result);
//   }, [result]);

//   return data;
// };

const useStore = (store: (arg0: any) => any, callback: (some: any) => void) => {
  const result = store(callback);
  const [data, setData] = useState();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
