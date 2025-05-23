import React from 'react'
import './recomendaciones.css'
import { CustomAnimatedList } from './List.jsx'


const Recomendaciones = () => {

  return (

    <section className="section_recomendaciones" id="recomendaciones">

      <div className="recomendaciones_wrapper">

        <h1 className="recomendaciones_title">Recomendaciones</h1>
        <p className="recomendaciones_subtitle">
          Consejos útiles para disfrutar al máximo tu mate
        </p>

        <div className="recomendaciones_content">
          <CustomAnimatedList />
          <div className="recomendaciones_img" />
        </div>

      </div>

    </section>
  )
}

export default Recomendaciones
