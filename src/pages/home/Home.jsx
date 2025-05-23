import React from 'react'
import './home.css'


const Home = () => {

  return (

    <section className="section_home" id="home">
      
      <div className="hero-image slide-in-top">
        <h1 className="home_title">Amatero</h1>
      </div>

      <div className="home_text fadeIn">
        <p className="home_description">
          Te acompañamos a preparar un buen mate. <br />
          Poné la pava que de lo demás nos encargamos nosotros.
        </p>
      </div>

    </section>
  )
}

export default Home
