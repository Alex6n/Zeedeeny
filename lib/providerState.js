import React, { createContext, useState, useContext } from "react";

const ProviderContext = createContext();

export const ProviderStateProvider = ({ children }) => {
  const [provider, setProvider] = useState(false);

  return (
    <ProviderContext.Provider value={{ provider, setProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProvider = () => useContext(ProviderContext);
