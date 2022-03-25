import React from 'react'

function Card({imageText, h1Text, bgImage, textColor}) {
  return (
    <div className='relative hover:opacity-80 shadow-md cursor-pointer p-4 bg-blue-200/10 backdrop-blur-lg'>
        <div className= {`${bgImage} w-full h-5/6 h bg-cover bg-center`}>
            <h1 className={`absolute left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2 ${textColor} text-2xl text-white uppercase`}>{imageText}</h1>
        </div>

        <div className='m-2 lg:m-4'>
            <h1 className='text-white uppercase'>{h1Text} </h1>
        </div>
    </div>
  )
}

export default Card