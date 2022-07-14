import { createContext, useState } from "react";
import horoscopesObj from "../data/horoscopes.js";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Taurus");
  const sign = horoscopesObj[currentSign];
  console.log(sign);
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
