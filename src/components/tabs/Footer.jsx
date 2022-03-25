import React from 'react';
// import {Link} from "react-route-dom";

function Footer() {

    const date = new Date().getFullYear();
    const author = "Amaino"

  return (
    <div className='w-full h-1/3 bg-black relative '>
        <div className='lg:col-span-2 1 w-full min-h-full p-10 '>
            <p className='text-white text-lg text-center font-semibold uppercase '> {date} &copy; copy rights all rights reserved at green limited made by {author} </p>
        </div>
    </div>
  )
}

export default Footer