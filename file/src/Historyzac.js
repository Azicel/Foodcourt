import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Historyzac.css";
import ellipse10 from "./assets/ellipse10.svg";
import rectangle57 from "./assets/rectangle57.svg";
import group26 from "./assets/group26.svg";

const Historyzac = () => {
    const navigate = useNavigate();
  return (
    <div className="vnkbprhlvafpp">
      <img className="group-26" onClick={() => navigate("/Historyzak")} src={group26} />
      <span className="num-03">История заказа: Д-03</span>
      <div className="flex-container">
        <img className="ellipse-8" src={ellipse10} />
        <span className="fxiepnsvontlr">
          Дата: ..............................................сегодня
        </span>
      </div>
      <div className="flex-container-1">
        <img className="ellipse-9" src={ellipse10} />
        <span className="txulfpmcekomq">
          Время: .....................................ближайшее
        </span>
      </div>
      <div className="flex-container-2">
        <img className="ellipse-10" src={ellipse10} />
        <span className="lqadmdakoqaat">
          Кол-во позиций в заказе: .......................3
        </span>
      </div>
      <div className="flex-container-3">
        <img className="ellipse-11" src={ellipse10} />
        <span className="lmrjldjcalnyx">Позиции в заказе:</span>
      </div>
      <hr className="line-17" />
      <div className="flex-container-4">
        <img className="rectangle-57" src={rectangle57} />
        <div className="flex-container-5">
          <span className="ojtqpkzkeqdio">Название блюда</span>
          <span className="ltkbjpsllmime">Пожелания: без сыра</span>
        </div>
        <span className="sezddykhgrxpq">Кол-во:</span>
        <span className="cktkmxpdkxpdw">1</span>
      </div>
      <hr className="line-18" />
      <div className="flex-container-6">
        <img className="rectangle-57-1" src={rectangle57} />
        <div className="flex-container-7">
          <span className="becvwpudnnufh">Название блюда</span>
          <span className="eljxgporhhatu">Пожелания: без сыра</span>
        </div>
        <span className="nrkjqjlegjjvp">Кол-во:</span>
        <span className="vzhortennpfwq">1</span>
      </div>
      <hr className="line-181" />
      <div className="flex-container-8">
        <img className="rectangle-57-2" src={rectangle57} />
        <div className="flex-container-9">
          <span className="ujcbcdouyblln">Название блюда</span>
          <span className="zderzbpnvjosc">Пожелания: без сыра</span>
        </div>
        <span className="qsjbxuhddbpcm">Кол-во:</span>
        <span className="dfdlkhrzlpfzb">1</span>
      </div>
      <hr className="line-182" />
      <div className="flex-container-10">
        <div className="flex-container-11">
          <img className="ellipse-12" src={ellipse10} />
          <img className="ellipse-15" src={ellipse10} />
        </div>
        <span className="qludqgoozqvfo">
          Оплата: .........наличными при получении
        </span>
      </div>
      <div className="flex-container-12">
        <img className="ellipse-13" src={ellipse10} />
        <span className="whizzfzqcdwdw">
          Кол-во комплекта приборов: .................2
        </span>
      </div>
      <div className="flex-container-13">
        <img className="ellipse-14" src={ellipse10} />
        <span className="tljihcirxsdnp">Контактная информация:</span>
      </div>
      <div className="rectangle-58">
        <span className="num-79833561123">
          Имя пользователя: ...........................Анна Номер телефона:
          .............+79833561123
        </span>
      </div>
      <span className="ahyxatoelgagj">Заказ готовится...</span>
      <button className="rectangle-48">
        <span className="yufjcoelotuuh">Заказ готов</span>
      </button>
    </div>
  );
};
export default Historyzac;