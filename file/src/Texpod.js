import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Texpod.css";
import rmhwxtmmpjieo from "./assets/rmhwxtmmpjieo.png";
import ellipse18 from "./assets/ellipse18.svg";

const Texpod = () => {
    const navigate = useNavigate();
  return (
    <div className="igyqmjsqcoued">
      <img className="hlhemmmvvqetd" onClick={() => navigate("/Glavnaia")} src={rmhwxtmmpjieo} />
      <span className="bktvwtkchpsks">Тех. поддержка</span>
      <div className="flex-container">
        <img className="ellipse-18" src={ellipse18} />
        <div className="flex-container-1">
          <div className="flex-container-2">
            <span className="wrytkbubwrbtn">Иван</span>
            <span className="num-23102022-1523">23.10.2022 15:23</span>
          </div>
          <input
            className="rectangle-79"
            placeholder="Помогите с..."
            type="text"
          />
        </div>
      </div>
      <div className="flex-container-3">
        <span className="zovruaslndqnb">Перейти в диалог</span>
        <img className="oicdgwxwleakw" src={rmhwxtmmpjieo} />
      </div>
      <hr className="line-18" />
      <div className="flex-container-4">
        <img className="ellipse-181" src={ellipse18} />
        <div className="flex-container-5">
          <div className="flex-container-6">
            <span className="rwyxgudewluow">Анна</span>
            <span className="num-23102022-1523-1">23.10.2022 15:23</span>
          </div>
          <input
            className="rectangle-79-1"
            placeholder="У меня возникла проблема с..."
            type="text"
          />
        </div>
      </div>
      <div className="flex-container-7">
        <span className="moipbyobfglra">Перейти в диалог</span>
        <img className="fqwzcpomhvshm" src={rmhwxtmmpjieo} />
      </div>
      <hr className="line-181" />
      <div className="flex-container-8">
        <img className="ellipse-183" src={ellipse18} />
        <div className="flex-container-9">
          <div className="flex-container-10">
            <span className="vsrcpycchfzpt">Александр</span>
            <span className="num-23102022-1523-2">23.10.2022 15:23</span>
          </div>
          <input className="rectangle-79-2" placeholder="*текст*" type="text" />
        </div>
      </div>
      <div className="flex-container-11">
        <span className="pmcuzoqstmjbs">Перейти в диалог</span>
        <img className="oitmothglxtub" src={rmhwxtmmpjieo} />
      </div>
      <hr className="line-183" />
      <div className="flex-container-12">
        <img className="ellipse-182" src={ellipse18} />
        <div className="flex-container-13">
          <div className="flex-container-14">
            <span className="gjtjwinspebgt">Ксения</span>
            <span className="num-23102022-1523-3">23.10.2022 15:23</span>
          </div>
          <input className="rectangle-79-3" placeholder="*текст*" type="text" />
        </div>
      </div>
      <div className="flex-container-15">
        <span className="gzvsrrpntxkzm">Перейти в диалог</span>
        <img className="fpmkgcpogztde" src={rmhwxtmmpjieo} />
      </div>
      <hr className="line-182" />
    </div>
  );
};
export default Texpod;