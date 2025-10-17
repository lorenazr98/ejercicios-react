import './App.css'
import { Routes, Route } from 'react-router-dom'
import Ejercicio1 from './components/Ejercicio1'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/ejercicio1' element={<Ejercicio1/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
