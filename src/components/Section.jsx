import React from 'react'
import CustomBtn from './elements/CustomBtn'

function Section() {
  return (
    <div className= 'w-full h-screen bg-hero-img bg-cover bg-center flex items-center justify-center'>
        <div className='mt-14 text-white text-center sm:w-3/4 lg:w-2/4 p-8 bg-black/50 rounded-lg'>
            <h1 className='font-medium res-font-sm uppercase'>Come join us as we travel around naija</h1>
            <p className='capitalize res-font py-2 font-extrabold'> Create your own travel fantasy</p>
            <h3 className='capitalize font-medium  p-2 res-font-usm'>join green and enjoy life</h3>
            <CustomBtn btnContent= 'Start' />
        </div>
    </div>
  )
}

export default Section