import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import rectangle59 from "./assets/rectangle59.svg";
import lofjrbjujrwtx from "./assets/lofjrbjujrwtx.png";

const Menu = () => {
    const navigate = useNavigate();
  return (
    <div className="mrkdoymvfpfgk">
      <img className="xgbaskiydsesw" onClick={() => navigate("/Glavnstr")} src={lofjrbjujrwtx} />
      <span className="hokrghwvqqzpm">Меню</span>
      <div className="rectangle-91" onClick={() => navigate("/Opisblud")}>
        <img className="rectangle-59" src={rectangle59} />
        <div className="flex-container">
          <span>Название</span>
          <span className="iibpaddvyogjs">описание</span>
        </div>
        <div className="flex-container-1">
          <span className="num-500">500 ₽</span>
          <span className="kdmshojoftsgm">Подробно</span>
        </div>
      </div>
      <div className="rectangle-91-1" onClick={() => navigate("/Opisblud")}>
        <img className="rectangle-59-1" src={rectangle59} />
        <div className="flex-container-2">
          <span>Название</span>
          <span className="bcxmkfjajqxny">описание</span>
        </div>
        <div className="flex-container-3">
          <span>500 ₽</span>
          <span className="xrwoxgyebbrgp">Подробно</span>
        </div>
      </div>
      <div className="rectangle-91-2" onClick={() => navigate("/Opisblud")}>
        <img className="rectangle-59-2" src={rectangle59} />
        <div className="flex-container-4">
          <span className="qzsspsymvgsns">Название</span>
          <span className="wjleoakpomsrw">описание</span>
        </div>
        <div className="flex-container-5">
          <span className="num-500-1">500 ₽</span>
          <span className="kqsgzsblcoakq">Подробно</span>
        </div>
      </div>
      <div className="rectangle-91-3" onClick={() => navigate("/Opisblud")}>
        <img className="rectangle-59-3" src={rectangle59} />
        <div className="flex-container-6">
          <span className="wzesboesajnsk">Название</span>
          <span className="xncyvgifbgzvx">описание</span>
        </div>
        <div className="flex-container-7">
          <span className="num-500-2">500 ₽</span>
          <span className="inaddouhqauln">Подробно</span>
        </div>
      </div>
      <div className="rectangle-91-4" onClick={() => navigate("/Opisblud")}>
        <img className="rectangle-59-4" src={rectangle59} />
        <div className="flex-container-8">
          <span className="klzkfsbnsiemq">Название</span>
          <span className="lnxcjweqbulkn">описание</span>
        </div>
        <div className="flex-container-9">
          <span>500 ₽</span>
          <span className="auikefeasfcqg">Подробно</span>
        </div>
      </div>
      <div className="rectangle-91-5" onClick={() => navigate("/Opisblud")}>
        <img className="rectangle-59-5" src={rectangle59} />
        <div className="flex-container-10">
          <span className="matpkauomuevd">Название</span>
          <span className="gsxnbfoualhmj">описание</span>
        </div>
        <div className="flex-container-11">
          <span className="num-500-3">500 ₽</span>
          <span className="fnnvodubqfpuv">Подробно</span>
        </div>
      </div>
      <button className="rectangle-48" onClick={() => navigate("/Dobavblud")}>Добавить блюдо</button>
    </div>
  );
};
export default Menu;