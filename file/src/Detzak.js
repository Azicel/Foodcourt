import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Detzak.css";
import ellipse10 from "./assets/ellipse10.svg";
import eijvunsuoqfiz from "./assets/eijvunsuoqfiz.png";
import rectangle57 from "./assets/rectangle57.svg";

const Detzak = () => {
    const navigate = useNavigate();
  return (
    <div className="aeytyatwokmiu">
      <img className="xflzshjfzddbc" onClick={() => navigate("/Statistic")} src={eijvunsuoqfiz} />
      <span className="num-02">Детали заказа: С-02</span>
      <div className="flex-container">
        <img className="ellipse-8" src={ellipse10} />
        <span className="urblxugbhakzf">
          Дата: ..............................................сегодня
        </span>
      </div>
      <div className="flex-container-1">
        <img className="ellipse-9" src={ellipse10} />
        <span className="num-1700-1830">
          Время: ...................................17:00 - 18:30
        </span>
      </div>
      <div className="flex-container-2">
        <img className="ellipse-10" src={ellipse10} />
        <span className="owfrkhwrvpfan">
          Кол-во позиций в заказе: .......................2
        </span>
      </div>
      <div className="flex-container-3">
        <img className="ellipse-11" src={ellipse10} />
        <span className="vnibkkbawojwj">Позиции в заказе:</span>
      </div>
      <hr className="line-17" />
      <div className="flex-container-4">
        <img className="rectangle-57" src={rectangle57} />
        <div className="flex-container-5">
          <span className="fmvwebzspppnw">Название блюда</span>
          <span className="fxcihgzfqadlc">Пожелания: нет</span>
        </div>
        <span className="nxqgcwbdkdbxk">Кол-во:</span>
        <span className="eafgoebszwyzr">1</span>
      </div>
      <hr className="line-18" />
      <div className="flex-container-6">
        <img className="rectangle-57-1" src={rectangle57} />
        <div className="flex-container-7">
          <span className="kekzoikqkojgl">Название блюда</span>
          <span className="ylvqdalssfwug">Пожелания: нет</span>
        </div>
        <span className="erkvjnrpnexuf">Кол-во:</span>
        <span className="fdbgohtfahbkl">1</span>
      </div>
      <hr className="line-181" />
      <div className="flex-container-8">
        <div className="flex-container-9">
          <img className="ellipse-12" src={ellipse10} />
          <img className="ellipse-15" src={ellipse10} />
        </div>
        <span className="flbrjuuzwaovf">
          Оплата: .........наличными при получении
        </span>
      </div>
      <div className="flex-container-10">
        <img className="ellipse-13" src={ellipse10} />
        <span className="xdrnicqzhxrgu">
          Кол-во комплекта приборов: .................2
        </span>
      </div>
      <div className="flex-container-11">
        <img className="ellipse-14" src={ellipse10} />
        <span className="cpbmppislzgwf">Контактная информация:</span>
      </div>
      <div className="rectangle-58">
        <span className="num-79542672764">
          Имя пользователя: ...........................Иван Номер телефона:
          .............+79542672764
        </span>
      </div>
      <div className="flex-container-12">
        <img className="ellipse-16" src={ellipse10} />
        <span className="eapcwvvdvoivv">
          Оценка: ......................................................5
        </span>
      </div>
      <div className="flex-container-13">
        <img className="ellipse-17" src={ellipse10} />
        <span className="snoeojohinsys">Отзыв:</span>
      </div>
      <input className="rectangle-59" placeholder="Очень вкусно!" type="text" />
      <button className="rectangle-75" onClick={() => navigate("/Otvetotz")}>Ответить на отзыв</button>
    </div>
  );
};
export default Detzak;