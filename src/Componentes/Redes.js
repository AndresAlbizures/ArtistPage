import React from "react";
import '../Hojas-de-estilos/Redes.css';


function Redes() {

    return (

        <div className="div-redes">
            <a href="https://www.instagram.com/b.andres_ag/">
                <img

                    src={require('../Imagenes/Insta.png')}
                    width="100px"
                    height="100px"
                    margin-left="25px"
                    className="ico-blur"
                    alt=""
                />

            </a>
            <a href="https://twitter.com/Lesh_alb">
                <img
                    src={require('../Imagenes/X.png')}
                    width="100px"
                    height="100px"
                    className="ico-blur"
                    alt=""

                />
            </a>
            <a href="https://open.spotify.com/artist/1Ez7Ygqdwsf0eU5fEUdRiB?si=EUqSwbsjR_yhSjy2qvmPug">
                <img
                    src={require('../Imagenes/Spotify.png')}
                    width="100px"
                    height="100px"
                    className="ico-blur"
                    alt=""
                />
            </a>
            <a href="https://www.youtube.com/channel/UCp0bDSGOrz8yp8rSm3Igkpg">
                <img
                    src={require('../Imagenes/YT.png')}
                    width="100px"
                    height="100px"
                    className="ico-blur"
                    alt=""
                />

            </a>
            <h1>Sigueme en mis redes sociales</h1>
        </div>
    )

}

export default Redes;