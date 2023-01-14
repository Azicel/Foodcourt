import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./zakp.css";
import khhhayyarzyrb from "./assets/khhhayyarzyrb.png";

const Zakp = () => {
  const navigate = useNavigate();
  return (
    <div className="wfjtchxelsmui">
      <img className="kgfpyfzehvugr" onClick={() => navigate("/Prof")} src={khhhayyarzyrb} />
      <span className="kewyizpxeayqs">Заказы</span>
      <hr className="line-11" />
      <div className="flex-container">
        <span className="num-25-1419">25 октября, 14:19 - завершён</span>
        <div className="rectangle-81">500 ₽</div>
      </div>
      <span className="zexkaqnfttugc">*Название ресторана*</span>
      <div className="flex-container-1">
        <span className="tkxcbcnarhhsv">*позиция*</span>
        <span>1 х 200 ₽</span>
      </div>
      <div className="flex-container-2">
        <span className="zqzpfskqztwyw">*позиция*</span>
        <span>2 х 150 ₽</span>
      </div>
      <button className="rectangle-30">Повторить</button>
      <hr className="line-10" />
      <div className="flex-container-3">
        <span className="num-26-1111">26 октября, 11:11 - завершён</span>
        <div className="rectangle-81-1">480 ₽</div>
      </div>
      <span className="tksxkbyrsfgzn">*Название ресторана*</span>
      <div className="flex-container-4">
        <span className="sdkvcmrfhjpep">*позиция*</span>
        <span>1 х 200 ₽</span>
      </div>
      <div className="flex-container-5">
        <span className="qisntmnnwiknt">*позиция*</span>
        <span>2 х 150 ₽</span>
      </div>
      <span className="lwmrnuuyqgyst">*Название ресторана*</span>
      <div className="flex-container-6">
        <span className="kefoxpdpobxpz">*позиция*</span>
        <span>1 х 130 ₽</span>
      </div>
      <button className="rectangle-30-1">Повторить</button>
      <hr className="line-101" />
      <div className="flex-container-7">
        <span className="num-29-1644">29 октября, 16:44 - в процессе</span>
        <div className="rectangle-81-2">330 ₽</div>
      </div>
      <span className="muoknjuoulwra">*Название ресторана*</span>
      <div className="flex-container-8">
        <span className="zmseodbjcmkot">*позиция*</span>
        <span>1 х 180 ₽</span>
      </div>
      <div className="flex-container-9">
        <span className="peiiffsrxkewb">*позиция*</span>
        <span>2 х 150 ₽</span>
      </div>
      <hr className="line-102" />
    </div>
  );
};
export default Zakp;