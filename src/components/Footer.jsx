import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="top">
        <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
        <p>
          CHEMICALS & PROCESS <span>|</span> POWER WATER & WASTE WATER
          <span>|</span> OILS & GAS PHARMA <span>|</span> SUGARS & DISTILLERIES
          <span>|</span> PAPER & PULP <span>|</span>
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD &
          BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span>
          SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span>FIRE
          FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="bottom">
        <ul className="footer-links">
          <li>
            <i class="fa fa-phone"></i> <a href="#">Toll Free:1234567890</a>
          </li>
          <li>
          <i class="fa fa-facebook"></i>{" "}
            <a href="#">www.facebook.com/cripumps</a>
          </li>
          <li>
            <i class="fa fa-globe"></i> <a href="#">www.cripumps.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
