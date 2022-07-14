import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopesObj from "../data/horoscopes.js";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);

  return (
    <div className="details">
      <img src={sign.backgroundImg} alt="" />
      <h2>{sign.name}</h2>
      <h4>{sign.element}</h4>
      <h4>{sign.traits}</h4>
    </div>
  );
};

export default Detail;
