import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./dbankcart.css";
import fqcdhxmhawnwj from "./assets/fqcdhxmhawnwj.png";

const Dbankcart = () => {
  const navigate = useNavigate();
  return (
    <div className="pskwmndgkhabq">
      <img className="zmrulrrkcning" onClick={() => navigate("/Carts")} src={fqcdhxmhawnwj} />
      <span className="iccmgxyyjutbq">Добавить банковскую карту</span>
      <div className="rectangle-84">
        <span className="kbhnzrsgrlwvw">Номер карты</span>
        <input className="rectangle-89" type="text" />
        <div className="flex-container">
          <span>Срок действия</span>
          <span>CCV</span>
        </div>
        <div className="flex-container-1">
          <div className="rectangle-33">ММ &#x2F; ГГ</div>
          <div className="rectangle-90">
            <span className="pvmtxhubsghet">•••</span>
          </div>
        </div>
      </div>
      <button className="rectangle-30" onClick={() => navigate("/Carts")}>Добавить</button>
    </div>
  );
};
export default Dbankcart;