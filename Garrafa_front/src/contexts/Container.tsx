"use client";

import { Dispatch, SetStateAction, useState, createContext, useContext } from "react";

export interface ContainerUIProps {
  containerLayout: React.ReactNode;
  setContainerLayout: Dispatch<SetStateAction<React.ReactNode>>;
}

export interface ContainerUIProviderProps {
  children: React.ReactNode;
}

export const ContainerUI = createContext({} as ContainerUIProps);

export const ContainerUIProvider = ({ children }: ContainerUIProviderProps) => {
  const [containerLayout, setContainerLayout] = useState<React.ReactNode>();

  return (
    <ContainerUI.Provider
      value={{
        containerLayout,
        setContainerLayout,
      }}
    >
      {children}
    </ContainerUI.Provider>
  );
};

const useContainer = () => useContext(ContainerUI);

export { useContainer };
