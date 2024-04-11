import React from "react"
import '../Hojas-de-estilos/Startbar.css';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";




const Startbar = () => {
  return (

    <><nav className="navbar-start fixed-top">

      <img
        src={require('../Imagenes/BRANDLESH.png')}
        width="200px"
        height="100px"
        className=""
        alt="" />

      <input type="checkbox" id="check"></input>

      <label id="toggle" for="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} style={{ color: "#e8e8e8", }} />
      </label>

      <ul className="hor">
        <li ><Link to="/inicio" for="toggle" className="link-bar2">Inicio</Link></li>
        <li ><Link to="/media" for="toggle" className="link-bar2">Media</Link></li>
        <li ><Link to="/redes" for="toggle" className="link-bar2">Redes Sociales</Link></li>
        <li ><Link to="/contacto" for="toggle" className="link-bar2">Contacto</Link></li>
      </ul>

    </nav>
     
    </>

  )



}
export default Startbar;