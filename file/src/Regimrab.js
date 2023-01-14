import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Regimrab.css";
import skusacunfbmjl from "./assets/skusacunfbmjl.png";
import rectangle70 from "./assets/rectangle70.svg";

const Regimrab = () => {
    const navigate = useNavigate();
  return (
    <div className="uxlxndimfeufu">
      <img className="ecukwmpmmiepj" onClick={() => navigate("/Glavnaia")} src={skusacunfbmjl} />
      <span className="vnolzadkdkjhq">Режим работы</span>
      <span className="xvbfaxdqmqjll">Время работы зала</span>
      <div className="rectangle-69">
        <div className="flex-container">
          <span className="ltmqnevrqgtsm">Пн</span>
          <span className="xrugvuhwqhpfp">от</span>
          <img className="rectangle-70" src={rectangle70} />
          <span className="fpqnezheyudci">до</span>
          <img className="rectangle-71" src={rectangle70} />
        </div>
        <hr className="line-19" />
        <div className="flex-container-1">
          <span className="vrukxfdphzvbp">Вт</span>
          <span className="eqqggutwhzahl">от</span>
          <img className="rectangle-70-1" src={rectangle70} />
          <span className="euqoleidxktmy">до</span>
          <img className="rectangle-71-1" src={rectangle70} />
        </div>
        <hr className="line-191" />
        <div className="flex-container-2">
          <span className="ktatamadbfrvk">Ср</span>
          <span className="sajxderoobcsd">от</span>
          <img className="rectangle-70-2" src={rectangle70} />
          <span className="ggybpjbecxdnb">до</span>
          <img className="rectangle-71-2" src={rectangle70} />
        </div>
        <hr className="line-192" />
        <div className="flex-container-3">
          <span className="mmgvkwbeqjpgf">Чт</span>
          <span className="cvubfnypgppww">от</span>
          <img className="rectangle-70-3" src={rectangle70} />
          <span className="xcbhfxogbcozo">до</span>
          <img className="rectangle-71-3" src={rectangle70} />
        </div>
        <hr className="line-193" />
        <div className="flex-container-4">
          <span className="xujhaxcpipums">Пт</span>
          <span className="nsfqrmecxgpfb">от</span>
          <img className="rectangle-70-4" src={rectangle70} />
          <span className="ruuenomwpjwpv">до</span>
          <img className="rectangle-71-4" src={rectangle70} />
        </div>
        <hr className="line-194" />
        <div className="flex-container-5">
          <span className="rixopxrgwuzqk">Сб</span>
          <span className="rfyetnhnytgzb">от</span>
          <img className="rectangle-70-5" src={rectangle70} />
          <span className="qpfkeqsgxawsk">до</span>
          <img className="rectangle-71-5" src={rectangle70} />
        </div>
        <hr className="line-195" />
        <div className="flex-container-6">
          <span className="mdtuppdihshtf">Вс</span>
          <span className="rpqliiwcmdzlm">от</span>
          <img className="rectangle-70-6" src={rectangle70} />
          <span className="ihtocmhriggqb">до</span>
          <img className="rectangle-71-6" src={rectangle70} />
        </div>
      </div>
    </div>
  );
};
export default Regimrab;