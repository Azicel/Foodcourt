import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Dobavblud.css";
import pngegg5 from "./assets/pngegg5.png";
import dbjvmcigzcfsw from "./assets/dbjvmcigzcfsw.png";

const Dobavblud = () => {
    const navigate = useNavigate();
  return (
    <div className="nfsoxpyrcxkql">
      <img className="sfcknrejvlkiy" onClick={() => navigate("/Menu")} src={dbjvmcigzcfsw} />
      <span className="tstkveiazttxs">Добавить блюдо</span>
      <span className="qfavyiowdjwvm">Название</span>
      <input className="rectangle-37" type="text" />
      <span className="dbhynwlbtfoni">Описание</span>
      <input className="rectangle-37-1" type="text" />
      <span className="rzvvbfirrkajp">Состав</span>
      <input className="rectangle-37-2" type="text" />
      <span className="xqazwjafimtef">Вес</span>
      <input className="rectangle-37-3" type="text" />
      <span className="nnlnolprcidhd">Цена</span>
      <input className="rectangle-37-4" type="text" />
      <span className="mcclqnbkwgmyq">Время приготовления</span>
      <input className="rectangle-37-5" type="text" />
      <div className="flex-container">
        <img className="pngegg-5" src={pngegg5} />
        <span className="afmijlrnqlxct">Загрузить фото</span>
      </div>
      <button className="rectangle-48">Добавить</button>
    </div>
  );
};
export default Dobavblud;