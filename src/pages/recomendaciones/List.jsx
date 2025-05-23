import React, { useEffect, useRef, useState } from "react"
import "./list.css"

const notifications = [
  {
    name: "Elegí una buena yerba",
    description: "Probá distintas marcas hasta encontrar la que más te guste.",
    time: "Hace 1h",
    icon: "🌿",
    color: "#6B8E23",
  },
  {
    name: "No uses agua hirviendo",
    description: "Lo ideal es entre 70°C y 80°C para no quemar la yerba.",
    time: "Hace 50min",
    icon: "🔥",
    color: "#FF6F61",
  },
  {
    name: "Cebá con calma",
    description: "Verté el agua despacio para no mover la yerba.",
    time: "Hace 35min",
    icon: "☕",
    color: "#99621E",
  },
  {
    name: "Probá con hierbas",
    description: "Podés sumar menta, boldo o cáscara de naranja.",
    time: "Hace 20min",
    icon: "🍊",
    color: "#FFB347",
  },
  {
    name: "No muevas la bombilla",
    description: "Una vez que la colocás, es mejor no moverla para no taparla.",
    time: "Hace 10min",
    icon: "🧉",
    color: "#C19A6B",
  },
  {
    name: "Disfrutá el momento",
    description: "Tomar mate es una pausa, no corras. Aprovechá y relajate.",
    time: "Hace 5min",
    icon: "🕯️",
    color: "#87A96B",
  },
];


export function CustomAnimatedList() {

  const [items, setItems] = useState([])

  useEffect(() => {

    const longList = Array.from ({ length: 10 }, () => notifications).flat()
    setItems (longList)
  }, [])


  return (

    <div className="list-container">

      <div className="list-inner">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="notification"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              className="icon-box"
              style={{ backgroundColor: item.color }}
            >
              <span>{item.icon}</span>
            </div>

            <div className="content-box">
              <div className="title-row">
                {item.name}
                <span className="time-text"> · {item.time}</span>
              </div>
              <div className="description-text">{item.description}</div>
            </div>

          </div>
        ))}

      </div>

      <div className="fade-bottom"></div>

    </div>
  )
}
