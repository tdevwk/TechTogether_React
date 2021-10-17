import React from "react";
import { Link } from "react-router-dom";
import Sline from "../images/s-line.png";
import Fline from "../images/f-line.png";
import Lline from "../images/l-line.png";
import Line3 from "../images/3-line.png";
import Rline from "../images/r-line.png";
import Line5 from "../images/5-line.png";

function Trains() {
  return (
    <main className="page-bg">
      <h1 className="header">NYC Subway</h1>
      <div className="trainimg">
        <Link to="/location">
          <img className="trainline s-line" src={Sline} alt="S train" />
        </Link>
        <img className="trainline" src={Fline} alt="F Train" />
        <img className="trainline" src={Lline} alt="L train" />
        <img className="trainline" src={Line3} alt="3 train" />
        <img className="trainline" src={Rline} alt="R train" />
        <img className="trainline" src={Line5} alt="5 train" />
      </div>
    </main>
  );
}

export default Trains;
