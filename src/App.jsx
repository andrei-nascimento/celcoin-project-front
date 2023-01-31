import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu/Menu'
import Home from './page/Home/Home'
import Pacientes from './page/Pacientes/Pacientes'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pacientes' element={<Pacientes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
