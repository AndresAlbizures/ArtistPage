import React, { useState } from "react";
import '../Hojas-de-estilos/Startbar.css';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Startbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-start fixed-top">
      <img
        src={require('../Imagenes/BRANDLESH.png')}
        width="200px"
        height="100px"
        className=""
        alt="" />

      <input type="checkbox" id="check" checked={menuOpen} onChange={handleMenuToggle}></input>

      <label id="toggle" htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} style={{ color: "#e8e8e8" }} />
      </label>

      <ul className={`hor ${menuOpen ? 'show-menu' : ''}`}>
        <li><Link to="/inicio" className="link-bar2" onClick={handleMenuItemClick}>Inicio</Link></li>
        <li><Link to="/media" className="link-bar2" onClick={handleMenuItemClick}>Media</Link></li>
        <li><Link to="/redes" className="link-bar2" onClick={handleMenuItemClick}>Redes Sociales</Link></li>
        <li><Link to="/contacto" className="link-bar2" onClick={handleMenuItemClick}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Startbar;