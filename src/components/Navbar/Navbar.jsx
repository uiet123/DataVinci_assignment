import { React, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img className="navbar-logo" src={assets.logo} alt="logo" />

      <div className="call">
        <img src={assets.call} alt="telephone icon" />
        <p className="nav-no">470-518-5965</p>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={assets.menu} alt="" />
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="call-items" onClick={() => setMenuOpen(false)}>
          <img src={assets.call} alt="telephone icon" />
          <p className="nav-no">470-518-5965</p>
        </div>
        <button onClick={() => setMenuOpen(false)} className="nav-btn">
          Book a Tour Today
        </button>
      </div>
    </div>
  );
};

export default Navbar;
