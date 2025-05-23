import React from 'react' 
import './pasoapaso.css'
import { Slider } from './slider.jsx'


const curarMate = [
  {
    quote: "Llená el mate con yerba usada y un chorrito de agua caliente, dejalo reposar 24 horas.",
    name: "Reposo sagrado",
    designation: "Chamán del mate",
    src: "🧉",
  },
  {
    quote: "Raspá suavemente el interior para retirar restos de yerba, pero sin dañar la calabaza.",
    name: "Raspadita con cariño",
    designation: "Protector de calabazas",
    src: "🥄",
  },
  {
    quote: "Repetí el proceso por al menos 3 días para eliminar el sabor amargo del mate nuevo.",
    name: "La paciencia del matero",
    designation: "Sabio de la ronda",
    src: "⏳",
  }
]

const armarMate = [
  {
    quote: "Llená el mate ¾ partes con yerba, incliná para formar una montañita y dejá un huequito.",
    name: "La montañita mágica",
    designation: "Arquitecto del sabor",
    src: "🌄",
  },
  {
    quote: "Agregá un chorrito de agua tibia (no hervida) y dejá que la yerba se hidrate.",
    name: "El primer mimo",
    designation: "Hidratador oficial",
    src: "💧",
  },
  {
    quote: "Colocá la bombilla en el hueco húmedo y cebá siempre en el mismo lugar.",
    name: "Bombilla sabia",
    designation: "Cebador nivel leyenda",
    src: "🥄",
  }
]


const PasoAPaso = () => {

  return (

    <section className="section_pasoapaso" id="pasoapaso">

      <div className="pasoapaso_container">

        <h1 className="pasoapaso_main_title">Paso a Paso</h1>

        <div className="pasoapaso_slider">

          <div className="slider_container">
            <Slider testimonials={curarMate} />
          </div>

          <div className="pasoapaso_text">
            <h2 className="pasoapaso_title">Cómo curar un mate</h2>
            <p className="pasoapaso_subtitle">Existen muchas técnicas, nosotros te mostramos la correcta.</p>
          </div>

        </div>


        <div className="pasoapaso_slider">

          <div className="slider_container">
            <Slider testimonials={armarMate} />
          </div>

          <div className="pasoapaso_text">
            <h2 className="pasoapaso_title">Pasos para armar un buen mate</h2>
            <p className="pasoapaso_subtitle">Te contamos el paso a paso para que disfrutes un mate como se debe.</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default PasoAPaso
