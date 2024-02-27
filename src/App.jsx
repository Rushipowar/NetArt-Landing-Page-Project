import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import png3 from "./assets/3.png";

function App() {
  return (
    <>
      <main>
        <header className="header"></header>

        <Main />

        <div className="instalatoins">
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.{" "}
          </p>
        </div>

        <div className="pumps"><img src={png3} alt="" /></div>

        <div className="pump-content">
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
