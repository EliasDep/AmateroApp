import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "./tipos.css"

import mateTorpedo from "../../assets/mate-torpedo.jpg"
import mateImperial from "../../assets/mate-imperial.jpg"
import mateCamionero from "../../assets/mate-camionero.jpeg"
import mateMadera from "../../assets/mate-madera.jpg"
import mateAcero from "../../assets/mate-acero.jpg"


const testimonials = [
  {
    quote:
      "Empecemos con el mate torpedo. Si lo ves de perfil, vas a notar que tiene una forma redondeada, casi como un pequeño barrilito, lo que le da ese nombre tan peculiar",
    name: "Mate Torpedo",
    designation: "El clásico redondeado",
    src: mateTorpedo,
  },
  {
    quote:
      "Este es un mate que, con solo mirarlo, te transporta a un mundo de tradición y artesanía. Se distingue por su boca ancha, pero lo que realmente lo hace sobresalir son los detalles que lo adornan.",
    name: "Mate Imperial",
    designation: "Tradición y Artesanía",
    src: mateImperial,
  },
  {
    quote:
      "Este es el tipo de mate que asocias inmediatamente con largas jornadas en la ruta, con charlas que parecen no tener fin y con mates que se mantienen firmes y llenos de sabor.",
    name: "Mate Camionero",
    designation: "Compañero ideal",
    src: mateCamionero,
  },
  {
    quote:
      "El mate de madera es un clásico que nunca pasa de moda. Su diseño elegante y su calidez lo convierten en una opción perfecta para disfrutar de un buen mate.",
    name: "Mate de madera",
    designation: "Elegancia y calidez",
    src: mateMadera,
  },
  {
    quote:
      "Este mate siempre esta listo para enfrentar cualquier aventura. Su diseño robusto y su resistencia lo convierten en el compañero perfecto para los amantes del mate.",
    name: "Mate de acero",
    designation: "Durabilidad y resistencia",
    src: mateAcero,
  },
]


const Tipos = () => {

  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }


  return (

    <section className="tipos-section" id="tipos">

      <h2 className="section-title">Tipos de Mates</h2>

      <div className="testimonial-wrapper">

        <div className="testimonial-grid">

          <div className="testimonial-image-wrapper">
            <AnimatePresence>
              {testimonials.map((testimonial, index) =>
                index === active ? (
                  <motion.img
                    key={testimonial.src}
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="testimonial-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  />
                ) : null
              )}
            </AnimatePresence>
          </div>

          <div className="testimonial-content">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="testimonial-header"
            >
              <h3 className="testimonial-name">{testimonials[active].name}</h3>
              <p className="testimonial-role">{testimonials[active].designation}</p>
              <p className="testimonial-quote">{testimonials[active].quote}</p>
            </motion.div>

            <div className="testimonial-controls">

              <button onClick={handlePrev} className="arrow-btn" aria-label="Anterior">
                <FaArrowLeft />
              </button>

              <button onClick={handleNext} className="arrow-btn" aria-label="Siguiente">
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>
      
    </section>
  )
}

export default Tipos
