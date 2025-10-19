import { useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio3() {

    const [items, setItems] = useState([])
    const [nuevoItem, setNuevoItem] = useState("")

    function agregarItem() {
        setItems([...items, nuevoItem]);
        setNuevoItem("");
    }

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 3 - Lista dinámica</h1>
            <input type="text" value={nuevoItem} onChange={(e) => setNuevoItem(e.target.value)}/>
            <button onClick={agregarItem}>Agregar</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}<button onClick={() => setItems(items.filter((item, i) => (i !== index)))}>X</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Ejercicio3;