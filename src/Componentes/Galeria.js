import React from "react";
import "../Hojas-de-estilos/Galeria.css"


function Galeria() {

    return (
        <div className="carro">
            <div className="div-center">
                <h1 className="h1">Escuchame en donde tu elijas!</h1>
        <div className="div-galeria">
                <a href="https://open.spotify.com/intl-es/artist/1Ez7Ygqdwsf0eU5fEUdRiB?si=F7cD7zHTQqyQFlUcJfhYGg/">
                    <img
                        src={require('../Imagenes/SP.png')}
                        width= "75px"
                        height="75px"
                        margin-left="25px"
                        className="ico-frame2"
                        alt=""

                    />
                </a>
                <a href="https://music.youtube.com/channel/UCsWQMVZtWA1vdEQLcynW3iw">
                    <img

                        src={require('../Imagenes/YTM.png')}
                        width="75px"
                        height="75px"
                        margin-left="25px"
                        className="ico-frame2"
                        alt=""
                    />

                </a>


                <a href="https://music.apple.com/us/artist/lesh-ag/1698607627">
                    <img

                        src={require('../Imagenes/Apple Music.png')}
                        width="75px"
                        height="75px"
                        margin-left="25px"
                        className="ico-frame"
                        alt=""
                    />

                </a>

                <a href="https://www.amazon.com/music/player/artists/B0CCPHMMHM/lesh-ag">
                    <img

                        src={require('../Imagenes/AmazonMusic.png')}
                        width="75px"
                        height="75px"
                        margin-left="25px"
                        className="ico-frame"
                        alt=""
                    />

                </a>

                <a href="https://www.deezer.com/es/artist/222822215">
                    <img

                        src={require('../Imagenes/DZ.png')}
                        width="75px"
                        height="75px"
                        margin-left="25px"
                        className="ico-frame"
                        alt=""
                    />

                </a>
                </div>
                </div>
        </div>
    )

}

export default Galeria;
