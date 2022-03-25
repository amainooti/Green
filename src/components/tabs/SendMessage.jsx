import React from 'react'
import CustomBtn from '../elements/CustomBtn'
import InputBox from '../elements/InputBox'

function SendMessage() {
  return (
    <div className='flex items-start flex-col py-5'>
        <div className='children:uppercase flex flex-col gap-4 lg:w-3/6 lg:items-start sm:w-full sm:justify-center sm:items-center md:h-3/4 justify-center'>
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
            <InputBox
            value= "Phone Number"
            type = "text"
            placeValue= "+234 "
             />
        </div>
        <div className='mt-5'>
            <CustomBtn
            btnContent="Send Message"
             />
        </div>


    </div>
  )
}

export default SendMessage