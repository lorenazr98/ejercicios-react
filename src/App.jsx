import './App.css'
import { Routes, Route } from 'react-router-dom'
import Ejercicio1 from './components/Ejercicio1'
import Ejercicio2 from './components/Ejercicio2'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ejercicio1' element={<Ejercicio1/>}/>
        <Route path='/ejercicio2' element={<Ejercicio2/>}/>
      </Routes>
    </>
  )
}

export default App
