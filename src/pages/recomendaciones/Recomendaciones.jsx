import React from 'react'
import './recomendaciones.css'
import { FaLeaf, FaMugHot, FaWater, FaClock, FaSun, FaSmile } from 'react-icons/fa'


const recomendaciones = [

  {
    icon: <FaMugHot />,
    title: "Usá yerba de buena calidad",
    text: "Elegí una yerba fresca, sin exceso de polvo, para lograr un sabor más suave y duradero."
  },
  {
    icon: <FaWater />,
    title: "Cuidá la temperatura del agua",
    text: "No dejes que hierva. Lo ideal es entre 70°C y 80°C para no quemar la yerba."
  },
  {
    icon: <FaLeaf />,
    title: "Probá distintos tipos de yerba",
    text: "Con o sin palo, orgánica, con hierbas. Experimentá hasta encontrar tu favorita."
  },
  {
    icon: <FaClock />,
    title: "No recargues demasiado",
    text: "Dejá que la yerba respire un poco entre cebadas para mantener su sabor."
  },
  {
    icon: <FaSun />,
    title: "Disfrutá al aire libre",
    text: "Un buen mate se disfruta mejor con solcito y buena compañía."
  },
  {
    icon: <FaSmile />,
    title: "Compartí el momento",
    text: "El mate es más que una bebida: es conexión, charla y disfrute compartido."
  }

]


const Recomendaciones = () => {

  return (

    <section className="section_recomendaciones" id="recomendaciones">

      <div className="recomendaciones_wrapper">

        <h1 className="recomendaciones_title">Recomendaciones</h1>
        <p className="recomendaciones_subtitle">
          Consejos útiles para disfrutar al máximo tu mate
        </p>

        <div className="recomendaciones_grid">
          {recomendaciones.map ((item, index) => (

            <div key={index} className="recomendacion_card">
              <div className="recomendacion_icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            
          ))}
        </div>

      </div>

    </section>

  )

}

export default Recomendaciones
