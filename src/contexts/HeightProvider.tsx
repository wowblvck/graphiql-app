import React, { createContext } from 'react';

export const HeightContext = createContext<{ headerHeight: number; footerHeight: number }>({
  headerHeight: 0,
  footerHeight: 0,
});

type HeightProviderProps = {
  children: React.ReactNode;
  headerHeight: number;
  footerHeight: number;
};

const HeightProvider: React.FC<HeightProviderProps> = ({
  children,
  headerHeight,
  footerHeight,
}) => {
  return (
    <HeightContext.Provider value={{ headerHeight, footerHeight }}>
      {children}
    </HeightContext.Provider>
  );
};

export default HeightProvider;
