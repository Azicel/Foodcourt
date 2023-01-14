import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./bonuscarts.css";
import rectangle84 from "./assets/rectangle84.svg";
import oeporonuxycrw from "./assets/oeporonuxycrw.png";
import rectangle85 from "./assets/rectangle85.svg";

const Bonuscarts = () => {
  const navigate = useNavigate();
  return (
    <div className="wwraptaylohbk">
      <img className="joumqwcnmzvgi" onClick={() => navigate("/Prof")} src={oeporonuxycrw} />
      <span className="leomtkcqauyqc">Бонусные карты</span>
      <input className="rectangle-1" placeholder="Поиск" type="text" />
      <div className="flex-container">
        <div className="rectangle-83">
          <span className="cvvpjuicoapqx" onClick={() => navigate("/Bonuscart")}>*картинка карты*</span>
        </div>
        <img className="rectangle-84" src={rectangle84} />
      </div>
      <div className="flex-container-1">
        <img className="rectangle-85" src={rectangle85} />
        <img className="rectangle-86" src={rectangle84} />
      </div>
      <button className="rectangle-30">
        <span className="cnouvmrjzqtys" onClick={() => navigate("/Dbonuscart")}>Добавить новую карту</span>
      </button>
    </div>
  );
};
export default Bonuscarts;