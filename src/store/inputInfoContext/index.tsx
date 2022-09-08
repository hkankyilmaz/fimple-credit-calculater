import React, { useState, createContext } from "react";
import { IInfoPropsContext, IInfoProps, IChildren } from "./inputInfo";

const IinfoContext = createContext({} as IInfoPropsContext);

export const IinfoProvider = ({ children }: IChildren) => {
  const [info, setInfo] = useState({
    principal: null,
    profitRate: null,
    taxRateBSMV: null,
    taxRateKKDF: null,
    numberOfIns: null,
    insInterval: null,
  } as IInfoProps);

  const value = {
    info,
    setInfo,
  };

  return (
    <IinfoContext.Provider value={value}> {children} </IinfoContext.Provider>
  );
};

export default IinfoContext;
