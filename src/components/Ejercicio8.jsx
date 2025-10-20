import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio8() {

    const [input, setInput] = useState("");
    let frase = input.trim();
    let caracteres = 0;
    let palabras = 0;

    if (frase === "") {
        caracteres = 0;
        palabras = 0;
    } else {
        caracteres = frase.split(" ").join("").length;
        palabras = frase.split(" ").length;
    }

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 8 - Contador de Palabras y Caracteres</h1>
            <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <p>Caracteres: {caracteres}. Palabras: {palabras} </p>
        </div>
    )
}

export default Ejercicio8;