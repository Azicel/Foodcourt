import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./bonuscart.css";
import bmotxwimtyprt from "./assets/bmotxwimtyprt.png";
import rectangle83 from "./assets/rectangle83.svg";

const Bonuscart = () => {
  const navigate = useNavigate();
  return (
    <div className="ssspuazkniiik">
      <img className="qotwjbsjzjdfp" onClick={() => navigate("/Bonuscarts")} src={bmotxwimtyprt} />
      <span className="uwifodpoitzpr">*название ресторана*</span>
      <img className="rectangle-83" src={rectangle83} />
      <div className="rectangle-87">
        <span className="rtpjjzmedwdnw">Данные карты</span>
        <div className="rectangle-84">
          <span className="eqgctlxphonnq">*штрихкод*</span>
        </div>
        <span className="omuztuqiodnjy">Номер карты</span>
        <input className="rectangle-33" type="text" />
        <span className="fqguvnmwwlwlu">Количество бонусов</span>
        <input className="rectangle-88" type="text" />
      </div>
    </div>
  );
};
export default Bonuscart;