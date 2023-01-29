import React from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import Home from './page/Home'

function App() {

  return (
    <div className="app">
      
      <div className='menu'>
        <Menu />
      </div>

      <div className='home'>
        <Home />
      </div>
      
    </div>
  )
}

export default App
