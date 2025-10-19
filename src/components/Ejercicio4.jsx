import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio4() {

    const animales = ["Perro", "Gato", "Pez", "Rana"]

    const [busqueda, setBusqueda] = useState("");
    const [lista, setLista] = useState(animales);

    let listaFiltrada = lista.filter((animal) => (animal.toLowerCase().includes(busqueda.toLowerCase())));

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 4 - Filtro de búsqueda en tiempo real</h1>
            <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
            <ul>
                {listaFiltrada.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Ejercicio4;