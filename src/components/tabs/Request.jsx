import React from 'react'
import CustomBtn from '../elements/CustomBtn'
import InputBox from '../elements/InputBox'

function Request() {
  return (
    <div>
        <div className='flex flex-col gap-4 items-start w-full md:w-2/4'>
            <InputBox
                type="email"
                value = "Email"
                placeValue = "niko@mail.com"
             />
            <div>
                <CustomBtn
                btnContent= "Request Info"
                 />
            </div>
        </div>
    </div>
  )
}

export default Request