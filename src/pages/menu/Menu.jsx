import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./menu.css"


const Header = () => {

    window.addEventListener ('scroll', function () {
        
        const header = document.querySelector ("header")

        if (this.scrollY >= 80) header.classList.add ("scroll-header")

        else header.classList.remove ("scroll-header")
    })


    const [Toggle, showMenu] = useState (false)


    return (
        <header className="header">

            <nav className="nav container">
                <a href="#" className="nav__logo">Amatero</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#recomendaciones" className="nav__link">
                                Recomendaciones
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#compania" className="nav__link">
                                Compañia
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#pasoapaso" className="nav__link">
                                Paso a Paso
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#temporizador" className="nav__link">
                                Temporizador
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#tipos" className="nav__link">
                                Tipos
                            </a>
                        </li>
                    </ul>

                    <FaTimes className="nav__close" onClick={() => showMenu(!Toggle)} />

                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}> 
                    <FaBars />
                </div>
                
            </nav>

        </header>
    )
}

export default Header
