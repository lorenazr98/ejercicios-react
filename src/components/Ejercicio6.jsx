import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio6() {

    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    const [corriendo, setCorriendo] = useState(false);

    function formatearNumeros(n) {
        if (n < 10) {
            n = `0${n}`
        }
        return n;
    }

    function reiniciar() {
        setCorriendo(false);
        setHoras(0);
        setMinutos(0);
        setSegundos(0);
    }

    useEffect(() => {
        if (corriendo) {
            const intervalo = setInterval(() => {
                setSegundos(segundos + 1)

                if (segundos == 59) {
                    setMinutos(minutos + 1);
                    setSegundos(0);
                }

                if (minutos == 59) {
                    setHoras(horas + 1);
                    setMinutos(0);
                }
            }, 1000)

            return () => clearInterval(intervalo)
        }
    }, [corriendo, segundos])

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 6 - Temporizador con inicio, pausa y reinicio</h1>
            <p>{formatearNumeros(horas)}:{formatearNumeros(minutos)}:{formatearNumeros(segundos)}</p>
            <button onClick={() => setCorriendo(true)}>Iniciar</button>
            <button onClick={() => setCorriendo(false)}>Pausar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    )
}

export default Ejercicio6;