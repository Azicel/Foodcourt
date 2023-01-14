import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./dbonuscart.css";
import pngegg3 from "./assets/pngegg3.png";
import wuvqkvqthtpth from "./assets/wuvqkvqthtpth.png";

const Dbonuscart = () => {
  const navigate = useNavigate();
  return (
    <div className="rkbdqyjcwwkgd">
      <img className="aujhnwfnzpovx" onClick={() => navigate("/Bonuscarts")} src={wuvqkvqthtpth} />
      <span className="kafczdcthkwvl">Добавить бонусную карту</span>
      <span className="kvszuiukmyvma">Введите название ресторана</span>
      <input className="rectangle-37" type="text" />
      <span className="pefvegxobudgp">Введите номер карты</span>
      <input className="rectangle-37-1" type="text" />
      <div className="flex-container">
        <img className="pngegg-3" src={pngegg3} />
        <span className="cvjypnwymajlz">Просканировать карту</span>
      </div>
      <button className="rectangle-30" onClick={() => navigate("/Bonuscarts")}>Добавить</button>
    </div>
  );
};
export default Dbonuscart;