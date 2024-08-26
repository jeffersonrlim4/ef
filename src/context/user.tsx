"use client";

import { createContext } from "react";

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
