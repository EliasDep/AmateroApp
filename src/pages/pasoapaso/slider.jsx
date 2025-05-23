import React, { useState, useEffect } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "./slider.css"


export const Slider = ({ testimonials }) => {

  const [index, setIndex] = useState (0)
  const [direction, setDirection] = useState ("right")
  const [animating, setAnimating] = useState (false)

  const handlePrev = () => {

    setDirection ("left")
    setAnimating (true)
    setIndex ((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {

    setDirection ("right")
    setAnimating (true)
    setIndex ((prev) => (prev + 1) % testimonials.length)
  }

  useEffect (() => {

    if (animating) {
      const timeout = setTimeout (() => setAnimating(false), 500)
      return () => clearTimeout (timeout)
    }

  }, [index, animating])

  const { quote, name, designation, src } = testimonials[index]


  return (

    <div className="testimonials-wrapper">

      <div className={`testimonial-card ${animating ? (direction === 'right' ? 'slide-right' : 'slide-left') : ''}`}>

        <div className="testimonial-img emoji">{src}</div>
        <p className="testimonial-quote">"{quote}"</p>

        <div className="testimonial-author">

          <p className="testimonial-name">{name}</p>
          <p className="testimonial-role">{designation}</p>

        </div>

      </div>

      <div className="testimonial-controls">
        
        {/* Botones reemplazados por íconos redondos */}
        <button onClick={handlePrev} className="arrow-btn">
          <FaArrowLeft />
        </button>

        <button onClick={handleNext} className="arrow-btn">
          <FaArrowRight />
        </button>

      </div>
      
    </div>
  )
}
