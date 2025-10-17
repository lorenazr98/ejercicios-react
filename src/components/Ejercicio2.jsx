import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio2() {

    const [clics, setClics] = useState(0);

    function contador() {
        setClics(clics + 1)
    }

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 2 - Contador de clics</h1>
            <button onClick={contador}>Contar clics</button>
            <p>Clics: {clics}</p>
        </div>
    )
}

export default Ejercicio2;