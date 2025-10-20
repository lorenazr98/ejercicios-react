import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio7() {

    const [input, setInput] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    

    function generar() {

        if (Number(input) < 4) {
            setError("Debe ser mayor a 4 caracteres");
            return;
        } else {
            setError("");
        }

        let characters = "qwertyuiopasdfghjklñzxcvbnm0123456789!#$%&()*+,-./:;<=>?@[\]^_{|}~";
        let nuevaPass = "";

        while (nuevaPass.length < Number(input)) {
            let c = Math.floor(Math.random()*characters.length);
            nuevaPass += characters[c];
        }

        setPass(nuevaPass)
    }

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 7 - Generador de Contraseñas aleatorias</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <input type="text" value={pass} readOnly />
            <button onClick={generar}>Generar</button><br />
            <small style={{color: 'red'}}>{error}</small>
        </div>
    )
}

export default Ejercicio7;