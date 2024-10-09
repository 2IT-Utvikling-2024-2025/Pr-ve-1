import { useState } from 'react'
import './App.css'
import './index.css'
import Japan from './japan'
import England from './england'
import Unitedstates from './unitedStates'
import Germany from './Germany'


function App() {

  return (
    <>
      <div className='container'>
          <Japan />
          <England />
          <Unitedstates />
          <Germany />
      </div>
    </>
  )
}

export default App
