import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Opisblud.css";
import lmypdhoiwrhac from "./assets/lmypdhoiwrhac.png";
import rectangle59 from "./assets/rectangle59.svg";

const Opisblud = () => {
    const navigate = useNavigate();
  return (
    <div className="fdryuiefpzshd">
      <img className="itluynsipiqaw" onClick={() => navigate("/Menu")} src={lmypdhoiwrhac} />
      <span className="vifosakuluqlw">Название блюда</span>
      <img className="rectangle-59" src={rectangle59} />
      <span className="bhxfmiepohkhp">Описание</span>
      <input className="rectangle-91" placeholder="Редактировать" type="text" />
      <span className="afmtftzvjenct">Состав</span>
      <input
        className="rectangle-91-1"
        placeholder="Редактировать"
        type="text"
      />
      <div className="flex-container">
        <span className="num-250">Вес: 250 гр</span>
        <span className="oderkcwsrrgbb">Ред.</span>
      </div>
      <div className="flex-container-1">
        <span className="num-500">Цена: 500 ₽</span>
        <span>Ред.</span>
      </div>
      <div className="flex-container-2">
        <span>Время приготовления:</span>
        <span className="jspymkhoorgdf">Ред.</span>
      </div>
      <div className="flex-container-3">
        <button className="rectangle-48" onClick={() => navigate("/Dobavblud")}>Сохранить</button>
        <button className="rectangle-48-1">Удалить</button>
      </div>
    </div>
  );
};
export default Opisblud;