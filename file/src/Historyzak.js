import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Historyzak.css";
import ellipse10 from "./assets/ellipse10.svg";
import rectangle57 from "./assets/rectangle57.svg";
import group26 from "./assets/group26.svg";

const Historyzak = () => {
    const navigate = useNavigate();
  return (
    <div className="vugkaaqbkcixj">
      <img className="group-26" onClick={() => navigate("/Strazak")} src={group26} />
      <span className="num-03">История заказа: Д-03</span>
      <div className="flex-container">
        <img className="ellipse-8" src={ellipse10} />
        <span className="lbbuzqtyjeigy">
          Дата: ..............................................сегодня
        </span>
      </div>
      <div className="flex-container-1">
        <img className="ellipse-9" src={ellipse10} />
        <span className="kprlhupnknjqk">
          Время: .....................................ближайшее
        </span>
      </div>
      <div className="flex-container-2">
        <img className="ellipse-10" src={ellipse10} />
        <span className="zzkcelkpkdhwa">
          Кол-во позиций в заказе: .......................3
        </span>
      </div>
      <div className="flex-container-3">
        <img className="ellipse-11" src={ellipse10} />
        <span className="vtwyvbqpgsiam">Позиции в заказе:</span>
      </div>
      <hr className="line-17" />
      <div className="flex-container-4">
        <img className="rectangle-57" src={rectangle57} />
        <div className="flex-container-5">
          <span className="tweqbvlzhktka">Название блюда</span>
          <span className="yxehecrdztnym">Пожелания: без сыра</span>
        </div>
        <span className="iuxxkzunvjmyl">Кол-во:</span>
        <span className="hslrdrnxwikdp">1</span>
      </div>
      <hr className="line-18" />
      <div className="flex-container-6">
        <img className="rectangle-57-1" src={rectangle57} />
        <div className="flex-container-7">
          <span>Название блюда</span>
          <span className="mnbntknudluri">Пожелания: без сыра</span>
        </div>
        <span className="xuvgmmpbxleht">Кол-во:</span>
        <span className="ykjgcvjtjeqys">1</span>
      </div>
      <hr className="line-181" />
      <div className="flex-container-8">
        <img className="rectangle-57-2" src={rectangle57} />
        <div className="flex-container-9">
          <span className="msfmouikaoboa">Название блюда</span>
          <span className="owsexwvfjxcsn">Пожелания: без сыра</span>
        </div>
        <span className="vyewhumjhkekt">Кол-во:</span>
        <span className="bbxzkajiblszw">1</span>
      </div>
      <hr className="line-182" />
      <div className="flex-container-10">
        <div className="flex-container-11">
          <img className="ellipse-12" src={ellipse10} />
          <img className="ellipse-15" src={ellipse10} />
        </div>
        <span className="glaqmweztogss">
          Оплата: .........наличными при получении
        </span>
      </div>
      <div className="flex-container-12">
        <img className="ellipse-13" src={ellipse10} />
        <span className="ghmeromaqrdbh">
          Кол-во комплекта приборов: .................2
        </span>
      </div>
      <div className="flex-container-13">
        <img className="ellipse-14" src={ellipse10} />
        <span className="wlrjpcbfkzrlm">Контактная информация:</span>
      </div>
      <div className="rectangle-58">
        <span className="num-79833561123">
          Имя пользователя: ...........................Анна Номер телефона:
          .............+79833561123
        </span>
      </div>
      <button className="rectangle-48" onClick={() => navigate("/Historyzac")}>Приступить к готовке заказа</button>
    </div>
  );
};
export default Historyzak;