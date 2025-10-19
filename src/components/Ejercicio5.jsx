import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio5() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");

    function sumar() {
        if (num1 === "" || num2 === "") {
            alert("Debes introducir un número")
        } else if (isNaN(num1) || (isNaN(num2))) {
            alert("Debes introducir un número válido.")
        } else {
            setResultado(Number(num1) + Number(num2))
        }
    }

    function restar() {
        if (num1 === "" || num2 === "") {
            alert("Debes introducir un número")
        } else if (isNaN(num1) || (isNaN(num2))) {
            alert("Debes introducir un número válido.")
        } else {
            setResultado(Number(num1) - Number(num2))
        }
    }

    function multiplicar() {
        if (num1 === "" || num2 === "") {
            alert("Debes introducir un número")
        } else if (isNaN(num1) || (isNaN(num2))) {
            alert("Debes introducir un número válido.")
        } else {
            setResultado(Number(num1) * Number(num2))
        }
    }

    function dividir() {
        if (num1 === "" || num2 === "") {
            alert("Debes introducir un número")
        } else if (isNaN(num1) || (isNaN(num2))) {
            alert("Debes introducir un número válido.")
        } else if (num2 <= 0) {
            alert("No se puede dividir por 0")
        } else {
            setResultado(Number(num1) / Number(num2))
        }
    }

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 5 - Calculadora sencilla</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>
            <p>El resultado es: {resultado}</p>
        </div>
    )
}

export default Ejercicio5;