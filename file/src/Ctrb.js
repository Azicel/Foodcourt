import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./ctrb.css";
import line5 from "./assets/line5.svg";
import pbzncovvpxfkx from "./assets/pbzncovvpxfkx.png";
import pngegg31 from "./assets/pngegg31.png";
import pngegg41 from "./assets/pngegg41.png";
import pngegg51 from "./assets/pngegg51.png";

const Ctrb = () => {
  const navigate = useNavigate();
  return (
    <div className="bzllkmrbjldbq">
      <img className="pnhvklkbspjze" onClick={() => navigate("/Ctr")}src={pbzncovvpxfkx} />
      <div className="rectangle-28">Время приготовления: *время*</div>
      <span className="mkdvtcxgpvkan">Название продукта</span>
      <span className="num-250">250 гр</span>
      <div className="rectangle-31">Описание</div>
      <div className="rectangle-32">На 100 грамм</div>
      <button className="rectangle-30">
        <div className="flex-container">
          <img className="line-5" src={line5} />
          <hr className="line-4" />
        </div>
        <span className="zelilelhjuqaz"onClick={() => navigate("/Basket")}>Добавить</span>
        <span className="vobztphebncji">.</span>
        <span className="num-130">130 руб</span>
      </button>
      <hr className="line-24" />
      <div className="rectangle-72">
        <div className="flex-container-1">
          <img className="pngegg-5-1" src={pngegg51} />
          <span onClick={() => navigate("/Homepage")}>Главная</span>
        </div>
        <div className="flex-container-2">
          <img className="pngegg-4-1" src={pngegg41} />
          <span onClick={() => navigate("/Basket")}>Корзина</span>
        </div>
        <div className="flex-container-3">
          <img className="pngegg-3-1" src={pngegg31} />
          <span onClick={() => navigate("/Prof")}>Профиль</span>
        </div>
      </div>
    </div>
  );
};
export default Ctrb;