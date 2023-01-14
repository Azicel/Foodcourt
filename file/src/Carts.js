import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./carts.css";
import jjshggoblwvse from "./assets/jjshggoblwvse.png";
import pngegg22 from "./assets/pngegg22.png";

const Carts = () => {
  const navigate = useNavigate();
  return (
    <div className="cjolcntlwfnac">
      <img className="usvhqwwpkqpci" onClick={() => navigate("/Prof")} src={jjshggoblwvse} />
      <span className="fxyvdhukgupmg">Карты</span>
      <div className="rectangle-82">
        <span className="num-1234">•••• 1234</span>
        <span className="num-0527">05&#x2F;27</span>
        <img className="pngegg-2-2" src={pngegg22} />
      </div>
      <div className="rectangle-82-1">
        <span className="num-5678">•••• 5678</span>
        <span className="num-0224">02&#x2F;24</span>
        <img className="pngegg-2-2-1" src={pngegg22} />
      </div>
      <button className="rectangle-30">
        <span className="gryypuxwrkkgk" onClick={() => navigate("/Dbankcart")}>Добавить новую карту</span>
      </button>
    </div>
  );
};
export default Carts;