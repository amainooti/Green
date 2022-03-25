import React from 'react'
import CustomBtn from '../elements/CustomBtn'
import InputBox from '../elements/InputBox'

function Reservations() {
  return (
    <div className='flex flex-col w-full justify-start'>
        <div className='children:uppercase flex flex-col gap-4 items-start lg:w-2/4 md:h-2/4 justify-center'>
        <InputBox
            value="name"
            type = "text"
            placeValue= "e.g Niko"
             />
            <InputBox
            value= "email"
            type = "email"
            placeValue= "Niko@mail.com"
             />
            <InputBox
            placeValue= "99-999-999-999"
            type = "text"
            value= "Account Number"
             />

        <div className='mt-5'>
            <CustomBtn
            btnContent="Reservation"
             />
        </div>

        </div>

    </div>
  )
}

export default Reservations