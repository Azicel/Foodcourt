import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./ctr.css";
import pngegg41 from "./assets/pngegg41.png";
import ellipse4 from "./assets/ellipse4.svg";
import polygon1 from "./assets/polygon1.svg";
import vsdlfkdxouvue from "./assets/vsdlfkdxouvue.png";
import star3 from "./assets/star3.svg";
import rectangle26 from "./assets/rectangle26.svg";
import pngegg31 from "./assets/pngegg31.png";
import gfepkkvrzwfvx from "./assets/gfepkkvrzwfvx.png";
import rectangle22 from "./assets/rectangle22.svg";
import pngwing2 from "./assets/pngwing2.png";
import pngegg51 from "./assets/pngegg51.png";
import tyffmmtkxzvvi from "./assets/tyffmmtkxzvvi.png";

const Ctr = () => {
  const navigate = useNavigate();
  return (
    <div className="idwsyqgprodry">
      <div className="flex-container">
        <img className="ggcqopsvhwbkx" onClick={() => navigate("/Homepage")} src={vsdlfkdxouvue} />
        <img className="ldtbskucuhfym" src={gfepkkvrzwfvx} />
        <img className="tarmypqrzrfta" src={tyffmmtkxzvvi} />
      </div>
      <div className="rectangle-21">
        <div className="flex-container-1">
          <span className="xuxvuwjicqnrh">Название</span>
          <span className="fkxkqxqpmbpvi">описание</span>
          <div className="flex-container-2">
            <img className="star-3" src={star3} />
            <span className="num-42">4,2</span>
            <img className="ellipse-4" src={ellipse4} />
            <div className="flex-container-3">
              <img className="rectangle-22" src={rectangle22} />
              <img className="polygon-1" src={polygon1} />
            </div>
            <span onClick={() => navigate("/Otv")}>999+</span>
          </div>
        </div>
        <img className="ellipse-5" src={ellipse4} />
        <span className="num-500">Средний чек 500 ₽</span>
      </div>
      <span className="gzmpvhncvcztg">Акции</span>
      <div className="flex-container-4">
        <div className="rectangle-8">
          <span className="llyjnzozxwlmw">Акции и скидки</span>
        </div>
        <div className="rectangle-9">
          <span className="agdmzrtsoqziz">Акции и скидки</span>
        </div>
        <div className="rectangle-10">
          <span className="eckcakhuufulv">Акции и скидки</span>
        </div>
      </div>
      <div className="rectangle-23">
        <div className="flex-container-5">
          <img className="pngwing-2" src={pngwing2} />
          <button className="rectangle-24">
            <span className="dqxtfrbaldusm">Популярные</span>
          </button>
          <span className="utifbercsybcw">Название блюда</span>
          <span className="ctiiuteweqdkb">Название блюда</span>
        </div>
        <span className="enanwsndoytnn">Популярные</span>
        <div className="flex-container-6">
          <div className="rectangle-25">
            <img className="rectangle-26" src={rectangle26} />
            <span className="lmoekdrouhmww" onClick={() => navigate("/Ctrb")}>Название</span>
            <span className="vhphrsynfeidd">вес</span>
            <span className="num-300">300 ₽</span>
            <button className="rectangle-27">
              <span className="zqrmuqpxfiomg" onClick={() => navigate("/Basket")}>В корзину</span>
            </button>
          </div>
          <div className="rectangle-25-1">
            <img className="rectangle-26-1" src={rectangle26} />
            <span className="xclkbnpnfdwjb" onClick={() => navigate("/Ctrb")}>Название</span>
            <span className="srcbedfmnuaju">вес</span>
            <span className="num-300-1">300 ₽</span>
            <button className="rectangle-27-1">
              <span className="gjyezhfwacpsn" onClick={() => navigate("/Basket")}>В корзину</span>
            </button>
          </div>
        </div>
        <hr className="line-24" />
      </div>
      <div className="rectangle-72">
        <div className="flex-container-7">
          <img className="pngegg-5-1" src={pngegg51} />
          <span onClick={() => navigate("/Homepage")}>Главная</span>
        </div>
        <div className="flex-container-8">
          <img className="pngegg-4-1" src={pngegg41} />
          <span onClick={() => navigate("/Basket")}>Корзина</span>
        </div>
        <div className="flex-container-9">
          <img className="pngegg-3-1" src={pngegg31} onClick={() => navigate("/Prof")}/>
          <span>Профиль</span>
        </div>
      </div>
    </div>
  );
};
export default Ctr;