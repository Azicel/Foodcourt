import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./prof.css";
import pngegg41 from "./assets/pngegg41.png";
import pngegg31 from "./assets/pngegg31.png";
import bycujimldnttl from "./assets/bycujimldnttl.png";
import ankwjuqitjofo from "./assets/ankwjuqitjofo.png";
import fxkydapztodwr from "./assets/fxkydapztodwr.png";
import pngegg51 from "./assets/pngegg51.png";
import gebwqzyhnxdxg from "./assets/gebwqzyhnxdxg.png";
import oxynwawclmbob from "./assets/oxynwawclmbob.png";
import pngegg21 from "./assets/pngegg21.png";
import zqyqprzmnaiip from "./assets/zqyqprzmnaiip.png";

const Prof = () => {
  const navigate = useNavigate();
  return (
    <div className="xzbutdpcivazw">
      <span className="ndrwjagqwizjc">Профиль</span>
      <div className="flex-container">
        <span className="uvoljaizzxghw">Имя</span>
        <div className="rectangle-49" onClick={() => navigate("/Homepage")}>Выйти</div>
      </div>
      <div className="flex-container-1">
        <img className="rpevaplgcigid" src={ankwjuqitjofo} />
        <span onClick={() => navigate("/Stravtor")}>Данные</span>
        <img className="zgvrnyubqdfjf" src={fxkydapztodwr} />
      </div>
      <hr className="line-92" />
      <div className="flex-container-2">
        <img className="otzctrtvelvze" src={zqyqprzmnaiip} />
        <span className="ymooldtrkwbwd" onClick={() => navigate("/Zakp")}>Заказы</span>
        <img className="azrxdahmrhbrx" src={fxkydapztodwr} />
      </div>
      <hr className="line-102" />
      <div className="flex-container-3">
        <img className="tcdcsbyzjgofc" src={gebwqzyhnxdxg} />
        <span onClick={() => navigate("/Carts")}>Карты</span>
        <img className="riyhpykwcynfq" src={fxkydapztodwr} />
      </div>
      <hr className="line-91" />
      <div className="flex-container-4">
        <img className="sbsssqewuhlga" src={bycujimldnttl} />
        <span className="cqrvswkkjaasb" onClick={() => navigate("/Liker")}>Любимые рестораны</span>
        <img className="caiecpfofgfwp" src={fxkydapztodwr} />
      </div>
      <hr className="line-9" />
      <div className="flex-container-5">
        <img className="wkobvbjtcgvte" src={oxynwawclmbob} />
        <span className="wjecgsnpxjenm" onClick={() => navigate("/Bonuscarts")}>Бонусные карты</span>
        <img className="lqrozsvpatxxp" src={fxkydapztodwr} />
      </div>
      <hr className="line-101" />
      <div className="flex-container-6">
        <img className="pngegg-2-1" src={pngegg21} />
        <span onClick={() => navigate("/Txt")} >Тех. поддержка</span>
        <img className="mpfjvhoueeuwn" src={fxkydapztodwr} />
      </div>
      <hr className="line-10" />
      <hr className="line-24" />
      <div className="rectangle-72">
        <div className="flex-container-7">
          <img className="pngegg-5-1" src={pngegg51} />
          <span onClick={() => navigate("/Homepage")}>Главная</span>
        </div>
        <div className="flex-container-8">
          <img className="pngegg-4-1" src={pngegg41} />
          <span onClick={() => navigate("/Basket")} >Корзина</span>
        </div>
        <div className="flex-container-9">
          <img className="pngegg-3-1" src={pngegg31} />
          <span>Профиль</span>
        </div>
      </div>
    </div>
  );
};
export default Prof;