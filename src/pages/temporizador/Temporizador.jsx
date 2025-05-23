import React, { useState, useEffect, useRef } from 'react'
import './temporizador.css'


const Temporizador = () => {

    const [tiempo, setTiempo] = useState (0)
    const [activo, setActivo] = useState (false)
    const [pausado, setPausado] = useState (false)
    const [tipActual, setTipActual] = useState (0)

    const intervalRef = useRef (null)

    useEffect (() => {

        if (activo && !pausado && tiempo > 0) {

            intervalRef.current = setInterval (() => {
                setTiempo ((prev) => prev - 1)
            }, 1000)
        }

        return () => clearInterval (intervalRef.current)

    }, [activo, pausado])


    useEffect (() => {

        if (tiempo === 0 && activo) {

            clearInterval (intervalRef.current)
            setActivo (false);
            setPausado (false);
            alert ("🧉 ¡El agua ya está lista para el mate!")
        }

    }, [tiempo, activo])


    const iniciarTemporizador = (minutos) => {

        clearInterval (intervalRef.current)
        setTiempo (minutos * 60)
        setActivo (true)
        setPausado (false)
    }


    const pausarTemporizador = () => {

        clearInterval (intervalRef.current)
        setPausado (true)
    }


    const continuarTemporizador = () => {
        setPausado (false)
    }


    const formatearTiempo = (segundos) => {

        const min = Math.floor (segundos / 60)
        const sec = segundos % 60

        return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
    }


    return (

        <section className="section_temporizador" id="temporizador">

            <div className="temporizador_container">

                <h1 className="temporizador_seccion_titulo">Temporizador</h1>

                <div className="temporizador_texto">

                    <h2 className="temporizador_titulo">¿Cuándo está lista el agua?</h2>
                    <p className="temporizador_tip">Si ves burbujitas pequeñas en el fondo, ¡ya está!</p>
                    <p className="temporizador_tip">80-85°C es la temperatura ideal para cebar bien.</p>

                </div>

                <div className="temporizador_reloj">

                    <p className="temporizador_tiempo">{formatearTiempo(tiempo)}</p>

                    <div className="temporizador_botones">
                        <button onClick={() => iniciarTemporizador(5)}>5 min</button>
                        <button onClick={() => iniciarTemporizador(8)}>8 min</button>
                        <button onClick={() => iniciarTemporizador(10)}>10 min</button>
                    </div>

                    {activo && (
                        <div className="temporizador_extra">
                        {pausado ? (
                            <button onClick={continuarTemporizador}>▶️ Continuar</button>
                        ) : (
                            <button onClick={pausarTemporizador}>⏸️ Pausar</button>
                        )}
                        </div>
                    )}

                </div>

            </div>

        </section>
    )
}

export default Temporizador
