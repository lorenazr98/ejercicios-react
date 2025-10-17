import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Ejercicios React con Javascript</h1>
            <ul>
                <li><Link to="/ejercicio1">Ejercicio 1 - Cambiador de color de fondo</Link></li>
                <li><Link to="/ejercicio2">Ejercicio 2 - Contador de clics</Link></li>
                <li><Link to="/ejercicio3">Ejercicio 3 - Lista dinámica</Link></li>
                <li><Link to="/ejercicio4">Ejercicio 4 - Filtro de búsqueda en tiempo real</Link></li>
                <li><Link to="/ejercicio5">Ejercicio 5 - Calculadora sencilla</Link></li>
                <li><Link to="/ejercicio6">Ejercicio 6 - Temporizador con inicio, pausa y reinicio</Link></li>
                <li><Link to="/ejercicio7">Ejercicio 7 - Generador de Contraseñas aleatorias</Link></li>
                <li><Link to="/ejercicio8">Ejercicio 8 - Contador de Palabras y Caracteres</Link></li>
                <li><Link to="/ejercicio9">Ejercicio 9 - Lista de Tareas con LocalStorage</Link></li>
            </ul>
        </div>
    )
}

export default Home;