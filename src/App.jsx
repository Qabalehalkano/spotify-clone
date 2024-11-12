import React from 'react'
import SideBar from './componets/SideBar'
import Player from './componets/Player'
import Display from './componets/Display'


const App = () => {
  return (
    <div className='h-screen bg-black '>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Display/>
      </div>
      <Player/>
      
    </div>
  )
}

export default App
