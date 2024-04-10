import React from "react"
import '../Hojas-de-estilos/Startbar.css';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";




const Startbar = () => {
  return (

    <><nav className="navbar-start fixed-top">
      <a class="enlace">
        <img
          src={require('../Imagenes/brand-logo-cian.png')}
          width="100px"
          height="100px"
          className="brand-blur"
          alt="" />
      </a>
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} style={{ color: "#e8e8e8", }} />
      </label>

      <ul className="hor">
        <li ><Link to="/inicio"  className="link-bar2">Inicio</Link></li>
        <li ><Link to="/media" className="link-bar2">Media</Link></li>
        <li ><Link to="/redes" className="link-bar2">Redes Sociales</Link></li>
        <li ><Link to="/contacto" className="link-bar2">Contacto</Link></li>
      </ul>

    </nav>

    </>

  )



}
export default Startbar;