import { useState, useEffect } from "react";

function Ejercicio1() {

    const [color, setColor] = useState('#000')

    function changeBackground() {
        var letters = '0123456789ABCDEF';
        var nuevoColor = '#';
        for (var i = 0; i < 6; i++) {
            nuevoColor += letters[Math.floor(Math.random() * 16)];
        }

        setColor(nuevoColor)
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    return (
        <div>
            <h1>Ejercicio 1 - Cambiador de color de fondo</h1>
            <button onClick={changeBackground}>Cambiar color</button>
        </div>
    )
}

export default Ejercicio1;