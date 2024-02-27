import React from "react";
import png2 from "../assets/2.png";

function Main() {
  return (
    <div className="main-container">
      <div className="left"></div>
      <div className="right">
        <div className="top">
          <p>
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
        </div>

        <div className="side-image">
          <img src={png2} alt="image" />
        </div>

        <div className="bottom">
          <p>
            Government of India has awarded the{" "}
            <span>"National Energy Conservation Award 2018"</span>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
