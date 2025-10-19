import './App.css'
import { Routes, Route } from 'react-router-dom'
import Ejercicio1 from './components/Ejercicio1'
import Ejercicio2 from './components/Ejercicio2'
import Ejercicio3 from './components/Ejercicio3'
import Ejercicio4 from './components/Ejercicio4'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ejercicio1' element={<Ejercicio1/>}/>
        <Route path='/ejercicio2' element={<Ejercicio2/>}/>
        <Route path='/ejercicio3' element={<Ejercicio3/>}/>
        <Route path='/ejercicio4' element={<Ejercicio4/>}/>
      </Routes>
    </>
  )
}

export default App
