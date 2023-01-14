import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Otvetotz.css";
import xqojlanvchage from "./assets/xqojlanvchage.png";
import ellipse18 from "./assets/ellipse18.svg";
import group113 from "./assets/group113.svg";

const Otvetotz = () => {
    const navigate = useNavigate();
  return (
    <div className="bbvlneavcosza">
      <img className="yjvvpcdlxhhke" onClick={() => navigate("/Detzak")} src={xqojlanvchage} />
      <span className="num-02">Ответить на отзыв: С-02</span>
      <span className="kntippzrvzyhq">
        Оценка: .........................................................5{" "}
      </span>
      <span className="wguydojdarhro">Отзыв:</span>
      <div className="flex-container">
        <img className="ellipse-18" src={ellipse18} />
        <div className="flex-container-1">
          <span className="bjdabumvjolul">Иван</span>
          <img className="group-113" src={group113} />
        </div>
        <span className="num-23102022-1523">23.10.2022 15:23</span>
      </div>
      <input className="rectangle-76" placeholder="Очень вкусно!" type="text" />
      <span className="rucwdquhrusey">Ваш ответ:</span>
      <input className="rectangle-60" type="text" />
      <button className="rectangle-75">
        <span className="dciusgkibxluy">Отправить ответ</span>
      </button>
    </div>
  );
};
export default Otvetotz;