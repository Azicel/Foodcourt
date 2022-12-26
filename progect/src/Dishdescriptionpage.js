import React from 'react';
import {useNavigate } from "react-router-dom";
import "./Dishdescriptionpagecss.css"
import pngegg31 from "./assets/pngegg31.png";
import zwyrrdbsbopxa from "./assets/zwyrrdbsbopxa.png";
import uptkwckdpkjje from "./assets/uptkwckdpkjje.png";
import rectangle26 from "./assets/rectangle26.svg";
import pngegg41 from "./assets/pngegg41.png";
import ellipse4 from "./assets/ellipse4.svg";
import rectangle22 from "./assets/rectangle22.svg";
import star3 from "./assets/star3.svg";
import polygon1 from "./assets/polygon1.svg";
import pngwing2 from "./assets/pngwing2.png";
import pngegg51 from "./assets/pngegg51.png";
import dedoglkdyoxwk from "./assets/dedoglkdyoxwk.png";


const Dishdescriptionpage = () => {
  const navigate = useNavigate();
  return (
    <div className="element3">
    <div className="kipshvjgdbdkt">
      <div className="flex-container">
        <img className="nlnkcvwnikjsv" src={dedoglkdyoxwk} />
        <img className="ukmveutolknvz" src={zwyrrdbsbopxa} />
        <img className="rodqyqqrxmeet" src={uptkwckdpkjje} />
      </div>
      <div className="rectangle-21">
        <div className="flex-container-1">
          <span className="gamcrrybrwyib">Название</span>
          <span className="orwmijhtpjpjn">описание</span>
          <div className="flex-container-2">
            <img className="star-3" src={star3} />
            <span className="num-42">4,2</span>
            <img className="ellipse-4" src={ellipse4} />
            <div className="flex-container-3">
              <img className="rectangle-22" src={rectangle22} />
              <img className="polygon-1" src={polygon1} />
            </div>
            <span className="num-999">999+</span>
          </div>
        </div>
        <img className="ellipse-5" src={ellipse4} />
        <span className="num-500">Средний чек 500 ₽</span>
      </div>
      <span className="hqbuyulbaxrql">Акции</span>
      <div className="flex-container-4">
        <div className="rectangle-8">
          <span className="seoyfqgmwbfgo">Акции и скидки</span>
        </div>
        <div className="rectangle-9">
          <span className="wvqnjnnahpout">Акции и скидки</span>
        </div>
        <div className="rectangle-10">
          <span className="uhjninewvbswv">Акции и скидки</span>
        </div>
      </div>
      <div className="rectangle-23">
        <div className="flex-container-5">
          <img className="pngwing-2" src={pngwing2} />
          <button className="rectangle-24">
            <span className="clfccojsogmnu">Популярные</span>
          </button>
          <span className="wjbjhfsbzxdlj">Название блюда</span>
          <span className="hsreyibhdwziq">Название блюда</span>
        </div>
        <span className="sdzlrwdbupuqs">Популярные</span>
        <div className="flex-container-6">
          <div className="rectangle-25">
            <img className="rectangle-26" src={rectangle26} />
            <span className="pmgfaruxlvmcy">Название</span>
            <span className="ctcukicbgjjtz">вес</span>
            <span className="num-300">300 ₽</span>
            <button className="rectangle-27">
              <span className="kjpytwmqwkmqj">В корзину</span>
            </button>
          </div>
          <div className="rectangle-25-1">
            <img className="rectangle-26-1" src={rectangle26} />
            <span className="qaezcbwvnnagg">Название</span>
            <span className="apebsmwushwjh">вес</span>
            <span className="num-300-1">300 ₽</span>
            <button className="rectangle-27-1">
              <span className="hqzgzskfsgbxi" onClick={() => navigate("/Basket") } >В корзину</span>
            </button>
          </div>
        </div>
        <hr className="line-24" />
      </div>
      <div className="rectangle-72">
        <div className="flex-container-7">
          <img className="pngegg-5-1" src={pngegg51} />
          <span>Главная</span>
        </div>
        <div className="flex-container-8">
          <img className="pngegg-4-1" src={pngegg41} />
          <span>Корзина</span>
        </div>
        <div className="flex-container-9">
          <img className="pngegg-3-1" src={pngegg31} />
          <span>Профиль</span>
        </div>
      </div>
    </div>
    </div>
  );
};
  
  export default Dishdescriptionpage;