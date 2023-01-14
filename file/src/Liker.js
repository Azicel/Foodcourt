import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./liker.css";
import mrcjujylsytmd from "./assets/mrcjujylsytmd.png";
import star1 from "./assets/star1.svg";
import rectangle15 from "./assets/rectangle15.svg";

const Liker = () => {
  const navigate = useNavigate();
  return (
    <div className="hmwbarbfoxhou">
      <img className="gybfzwqegswvy" onClick={() => navigate("/Prof")} src={mrcjujylsytmd} />
      <span className="adzyzazvsohre">Любимые рестораны</span>
      <div className="rectangle-14">
        <img className="rectangle-15" src={rectangle15} />
        <div className="flex-container">
          <span className="mmusoqwoubkub" onClick={() => navigate("/Ctr")}>Название</span>
          <img className="star-1" src={star1} />
          <span className="num-45">4,5</span>
        </div>
      </div>
      <div className="rectangle-14-1">
        <img className="rectangle-15-1" src={rectangle15} />
        <div className="flex-container-1">
          <span className="dgdhfikcjkxoy" onClick={() => navigate("/Ctr")}>Название</span>
          <img className="star-12" src={star1} />
          <span className="num-43">4,3</span>
        </div>
      </div>
      <div className="rectangle-14-2">
        <img className="rectangle-15-2" src={rectangle15} />
        <div className="flex-container-2">
          <span className="kpuxkmmsomfvi" onClick={() => navigate("/Ctr")}>Название</span>
          <img className="star-11" src={star1} />
          <span className="num-42">4,2</span>
        </div>
      </div>
    </div>
  );
};
export default Liker;