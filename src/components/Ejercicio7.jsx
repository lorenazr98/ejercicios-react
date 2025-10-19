import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio7() {

    const [input, setInput] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 7 - Generador de Contraseñas aleatorias</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}>{pass}</input>
            <button>Generar</button>
            <small></small>
        </div>
    )
}

export default Ejercicio7;