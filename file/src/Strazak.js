import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Strazak.css";
import rectangle54 from "./assets/rectangle54.svg";
import group5 from "./assets/group5.svg";
import rectangle543 from "./assets/rectangle543.svg";
import rectangle542 from "./assets/rectangle542.svg";
import tvcnozxsmbckt from "./assets/tvcnozxsmbckt.png";
import ellipse10 from "./assets/ellipse10.svg";
const Strazak = () => {
    const navigate = useNavigate();
  return (
    <div className="itpzsnczevjch">
      <img className="duonlmlmigkxg" onClick={() => navigate("/Glavnaia")} src={tvcnozxsmbckt} />
      <div className="flex-container">
        <span className="kjrkujurzabuh">Текущие заказы</span>
        <span className="dhnjjllvukyht">Фильтры</span>
        <img className="group-5" src={group5} />
      </div>
      <div className="rectangle-53" onClick={() => navigate("/Historyzak")}>
        <div className="flex-container-1">
          <span className="num-03" onClick={() => navigate("/Historyzak")}>Заказ Д-03</span>
          <div className="flex-container-2">
            <img className="ellipse-8" src={ellipse10} />
            <span>
              Дата:
              .............................................................сегодня
            </span>
          </div>
          <div className="flex-container-3">
            <img className="ellipse-9" src={ellipse10} />
            <span>
              Время:
              ....................................................ближайшее
            </span>
          </div>
          <div className="flex-container-4">
            <img className="ellipse-10" src={ellipse10} />
            <span className="jetbbxzkjhvzv">
              Кол-во позиций в заказе: ......................................3
            </span>
          </div>
        </div>
        <img className="rectangle-54" src={rectangle54} />
      </div>
      <div className="rectangle-53-1">
        <div className="flex-container-5">
          <span className="num-02">Заказ С-02</span>
          <div className="flex-container-6">
            <img className="ellipse-85" src={ellipse10} />
            <span>
              Дата:
              .............................................................сегодня
            </span>
          </div>
          <div className="flex-container-7">
            <img className="ellipse-95" src={ellipse10} />
            <span>
              Время:
              ....................................................ближайшее
            </span>
          </div>
          <div className="flex-container-8">
            <img className="ellipse-105" src={ellipse10} />
            <span className="vvgcjqjgkmhic">
              Кол-во позиций в заказе: ......................................5
            </span>
          </div>
        </div>
        <img className="rectangle-54-1" src={rectangle542} />
      </div>
      <div className="rectangle-53-2">
        <div className="flex-container-9">
          <span className="num-02-1">Заказ Д-02</span>
          <div className="flex-container-10">
            <img className="ellipse-81" src={ellipse10} />
            <span>
              Дата:
              ...............................................................завтра
            </span>
          </div>
          <div className="flex-container-11">
            <img className="ellipse-91" src={ellipse10} />
            <span className="num-0900">
              Время:
              ..............................................................09:00
            </span>
          </div>
          <div className="flex-container-12">
            <img className="ellipse-101" src={ellipse10} />
            <span className="rbkuiftnvpuon">
              Кол-во позиций в заказе: ......................................1
            </span>
          </div>
        </div>
        <img className="rectangle-54-2" src={rectangle54} />
      </div>
      <div className="rectangle-53-3">
        <div className="flex-container-13">
          <span className="num-01">Заказ Д-01</span>
          <div className="flex-container-14">
            <img className="ellipse-82" src={ellipse10} />
            <span>
              Дата:
              .............................................................сегодня
            </span>
          </div>
          <div className="flex-container-15">
            <img className="ellipse-92" src={ellipse10} />
            <span>
              Время:
              ....................................................ближайшее
            </span>
          </div>
          <div className="flex-container-16">
            <img className="ellipse-102" src={ellipse10} />
            <span className="bbrurjcddnqrx">
              Кол-во позиций в заказе: ......................................3
            </span>
          </div>
        </div>
        <img className="rectangle-54-3" src={rectangle542} />
      </div>
      <div className="rectangle-53-4">
        <div className="flex-container-17">
          <span className="num-01-1">Заказ С-01</span>
          <div className="flex-container-18">
            <img className="ellipse-83" src={ellipse10} />
            <span>
              Дата:
              .............................................................сегодня
            </span>
          </div>
          <div className="flex-container-19">
            <img className="ellipse-93" src={ellipse10} />
            <span className="num-2100">
              Время:
              ...............................................................21:00
            </span>
          </div>
          <div className="flex-container-20">
            <img className="ellipse-103" src={ellipse10} />
            <span className="ihthaypotzhgf">
              Кол-во позиций в заказе: ......................................3
            </span>
          </div>
        </div>
        <img className="rectangle-54-4" src={rectangle543} />
      </div>
      <div className="rectangle-53-5">
        <div className="flex-container-21">
          <span className="num-01-2">Заказ В-01</span>
          <div className="flex-container-22">
            <img className="ellipse-84" src={ellipse10} />
            <span>
              Дата:
              .............................................................сегодня
            </span>
          </div>
          <div className="flex-container-23">
            <img className="ellipse-94" src={ellipse10} />
            <span>
              Время:
              ....................................................ближайшее
            </span>
          </div>
          <div className="flex-container-24">
            <img className="ellipse-104" src={ellipse10} />
            <span className="fcbtbfzcqykiy">
              Кол-во позиций в заказе: ......................................2
            </span>
          </div>
        </div>
        <img className="rectangle-54-5" src={rectangle543} />
      </div>
    </div>
  );
};
export default Strazak;