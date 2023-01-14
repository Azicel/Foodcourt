import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Dannorg.css";
import ellipse18 from "./assets/ellipse18.svg";
import urnykbpldpevh from "./assets/urnykbpldpevh.png";

const Dannorg = () => {
    const navigate = useNavigate();
  return (
    <div className="objlmbjweipha">
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="jgtbtcpdvehgn" onClick={() => navigate("/Glavnastr")} src={urnykbpldpevh} />
          <span>Данные организации</span>
        </div>
        <img className="ellipse-18" src={ellipse18} />
      </div>
      <span className="dkbngmtwgivwg">Название организации</span>
      <input className="rectangle-37" type="text" />
      <span className="jhsxceqrksttz">Код организации</span>
      <input className="rectangle-37-1" type="text" />
      <span className="whhwzxbaksrse">Описание</span>
      <input className="rectangle-37-2" type="text" />
      <button className="rectangle-48">
        <span className="gmqgpeonqrzao" onClick={() => navigate("/Glavnastr")}>Принять</span>
      </button>
    </div>
  );
};
export default Dannorg;