import React from 'react'
import './compania.css'


const Compania = () => {

    return (

        <section className="section_compania" id="compania">

            <div className="compania_container">

                <h1 className="compania_title">Buena Compañía</h1>

                <div className="spotify_player">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXTdx4nYEjeS"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify playlist"
                    ></iframe>
                </div>

                <p className="compania_description">
                    El mate siempre se disfruta más con música de fondo. Te dejamos una playlist para que acompañes cada cebada con buena energía.
                </p>

            </div>
            
        </section>
    )
}

export default Compania
