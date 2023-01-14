import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./txt.css";
import pngegg11 from "./assets/pngegg11.png";
import pngegg2 from "./assets/pngegg2.png";
import ellipse18 from "./assets/ellipse18.svg";
import axltunwibexfq from "./assets/axltunwibexfq.png";


const Txt = () => {
  const navigate = useNavigate();
  return (
    <div className="gdaqrtixmcquk">
      <img className="tbkhmpfsvuyyn" onClick={() => navigate("/Prof")} src={axltunwibexfq} />
      <span className="vajetnekyhnpm">Тех. поддержка</span>
      <hr className="line-9" />
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="ellipse-18" src={ellipse18} />
          <img className="pngegg-2" src={pngegg2} />
        </div>
        <div className="rectangle-77">
          Здравствуйте! Можете задать интересующий вас вопрос.
        </div>
      </div>
      <hr className="line-25" />
      <div className="rectangle-78">
        <span className="rbtlgethhlksp">Введите сообщение</span>
        <img className="pngegg-1-1" src={pngegg11} />
      </div>
    </div>
  );
};
export default Txt;