import React from "react";
import "../Hojas-de-estilos/Contacto.css"
function Contacto() {

    return (

        <div className="div-con">

            <form action="https://formsubmit.co/andresag.soft@gmail.com" method="POST" className="form">
                <h2 className="h2">Contacto </h2>
                <div className="input-group" />
                <label className="label" for="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Nombre"></input>
                <label className="label" for="phone">Telefono</label>
                <input type="tel" name="phone" id="phone" placeholder="Telefono"></input>
                <label className="label" for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email"></input>
                <label className="label" for="message">Mensaje</label>
                <textarea className="text-area" name="message" ide="message" cols="30" rows="5" placeholder="Mensaje"></textarea>

                <div className="form-txt">

                </div>
                <input className="btn-contacto" type="submit" value="Enviar"></input>
            </form>

         



        </div>
    )

}

export default Contacto;