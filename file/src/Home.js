import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import ellipse18 from "./assets/ellipse18.svg";
import pngegg2 from "./assets/pngegg2.png";
import pngegg12 from "./assets/pngegg12.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="dzhlsyaadctta">
      <div className="rectangle-80">
        <span className="sarnzypzdwhsa">*лого приложения*</span>
      </div>
      <span className="fnybgaywlcrqu">Кем вы являетесь?</span>
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="ellipse-18" src={ellipse18} />
          <img className="pngegg-2" src={pngegg2} />
        </div>
        <span className="fqdokmaaokmop" onClick={() => navigate("/Form")}>Я пользователь</span>
      </div>
      <div className="flex-container-2">
        <div className="flex-container-3">
          <img className="ellipse-19" src={ellipse18} />
          <img className="pngegg-1-2" src={pngegg12} />
        </div>
        <span className="raettdkpkoozb" onClick={() => navigate("/")}>Я сотрудник</span>
      </div>
      <div className="flex-container-4">
        <img className="ellipse-191" src={ellipse18} />
        <span className="rfwsehccpnvww" onClick={() => navigate("/Dostuporg")}>Я организация</span>
      </div>
    </div>
  );
};
export default Home;