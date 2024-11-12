import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <div>
        <>
    <NavBar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((items,index)=>(
            <AlbumItem key={index}
            name={items.name}
            desc={items.desc}
            id={items.id}
            image={items.image}
            />
        ))}
        </div>
        



    </div>


        </>
      
    </div>
  )
}

export default DisplayHome
