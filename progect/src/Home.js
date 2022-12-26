import React from "react";
import { useNavigate } from "react-router-dom";
import "./App1.css";
import ellipse18 from "./assets/ellipse18.svg";
import ellipse19 from "./assets/ellipse19.svg";
import pngegg2 from "./assets/pngegg2.png";
import pngegg12 from "./assets/pngegg12.png";


function Home(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="element1">    
      <div className="fzbyllaykszqr">
      <div className="rectangle-80">
        <span className="tczeqbpyptqnp">*лого приложения*</span>
      </div>
      <span className="wcsossnpudhrj">Кем вы являетесь?</span>
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="ellipse-18" src={ellipse18} />
          <img className="pngegg-2" src={pngegg2} />
        </div>
            <span className="lmzrqtrsjpimq" onClick={() => navigate("/Form")}>Я пользователь</span>
            </div>
      <div className="flex-container-2">
        <div className="flex-container-3">
          <img className="ellipse-19" src={ellipse19} />
          <img className="pngegg-1-2" src={pngegg12} />
        </div>
            <span className="ullejfphnewqd" onClick={() => navigate("/Employee")}>Я работник</span>
            </div>
      <div className="flex-container-4">
        <img className="ellipse-18" src={ellipse18} />
            <span className="gldsrxqwxeccl" onClick={() => navigate("/Employee")}>Я организация</span>
          </div>
        </div>
        </div>
    </>
  );
}

export default Home;