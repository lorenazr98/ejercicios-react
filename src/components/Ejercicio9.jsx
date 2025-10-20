import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ejercicio9() {

    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareas, setTareas] = useState(() => {
        const guardadas = localStorage.getItem("tareas")
        return guardadas ? JSON.parse(guardadas) : []
    });

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas))
    }, [tareas]);

    function agregarTarea() {
        setTareas([...tareas, {nombre: nuevaTarea, completada: false}]);
        setNuevaTarea("");
    }

    function limpiarCompletadas() {
        const tareasNoCompletadas = tareas.filter((tarea) => tarea.completada === false);
        setTareas(tareasNoCompletadas);
    }

    return (
        <div>
            <Link to="/">Volver atrás</Link>
            <h1>Ejercicio 9 - Lista de Tareas con LocalStorage</h1>
            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}><input type="checkbox" checked={tarea.completada} onChange={() => setTareas(
                        tareas.map((t, i) => {
                        if (i === index) {
                            return {...t, completada: !t.completada}
                        } else {
                            return t
                        }
                        }))}/>{tarea.nombre}</li>
                ))}
            </ul>
            <button onClick={limpiarCompletadas}>Limpiar completadas</button>
        </div>
    )
}

export default Ejercicio9;