import React from 'react';
import {useNavigate } from "react-router-dom";
import rectangle35 from "./assets/rectangle35.svg";
import group11 from "./assets/group11.svg";
import group13 from "./assets/group13.svg";
import group14 from "./assets/group14.svg";
import "./Basketcss.css"

const Basket = () => {
  const navigate = useNavigate();
  return (
    <div className="element5">
    <div className="ibuyaoocjmlrq">
      <div className="flex-container">
        <img className="group-11" src={group11} />
        <span className="erkdikmosvdxr">Корзина</span>
      </div>
      <span className="znjqxvcquueum">Промокод</span>
      <div className="flex-container-1">
        <input className="rectangle-33" placeholder="Введите код" type="text" />
        <div className="rectangle-34">Активировать</div>
      </div>
      <span className="oflddkjscxcwm">Вы заказали</span>
      <hr className="line-8" />
      <div className="flex-container-2">
        <img className="rectangle-35" src={rectangle35} />
        <span className="ijvatgvkiqlzh">Название блюда</span>
        <img className="group-13" src={group13} />
      </div>
      <div className="flex-container-3">
        <span className="num-130">130 руб</span>
        <hr className="line-6" />
        <span className="mldwixhfimear">1</span>
        <img className="group-14" src={group14} />
      </div>
      <div className="flex-container-4">
        <div className="rectangle-33-1">Введите пожелание</div>
        <div className="rectangle-34-1">Добавить</div>
      </div>
      <div className="flex-container-5">
        <img className="rectangle-35-1" src={rectangle35} />
        <span className="laasbuofwjiop">Название блюда</span>
        <img className="group-131" src={group13} />
      </div>
      <div className="flex-container-6">
        <span className="num-130-1">130 руб</span>
        <hr className="line-61" />
        <span className="rdyihmowkhqxf">1</span>
        <img className="group-141" src={group14} />
      </div>
      <div className="flex-container-7">
        <div className="rectangle-33-2">Введите пожелание</div>
        <div className="rectangle-34-2">Добавить</div>
      </div>
      <hr className="line-10" />
      <span className="kpvwqifdpltcj">Добавить к заказу</span>
      <hr className="line-9" />
      <div className="flex-container-8">
        <img className="rectangle-35-2" src={rectangle35} />
        <span className="vsvetyxgyqmxy">Название блюда</span>
        <img className="group-132" src={group13} />
      </div>
      <div className="flex-container-9">
        <span className="num-130-2">130 руб</span>
        <hr className="line-62" />
        <span className="vdvnanvyvsweb">0</span>
        <img className="group-142" src={group14} />
      </div>
      <hr className="line-91" />
      <span className="ppnplbprrenrn">Общее время готовки: *макс. время*</span>
      <div className="rectangle-36">
        <span className="num-260">260 руб</span>
        <span className="pczejocplnlgl" onClick={() => navigate("/Ofz") }>Оформить заказ</span>
      </div>
    </div>
    </div>
  );
};
export default Basket;
  
