import React, {useState} from 'react'
import CustomBtn from './elements/CustomBtn'
import Reservations from './tabs/Reservations'
import SendMessage from './tabs/SendMessage'
import Request from './tabs/Request'

function Information() {
  const [tab, setTab] = useState('')

  return (
    <div className='w-full bg-info min-h-screen bg-cover bg-center uppercase p-8 '>
      <div className='children:m-4'>
            <CustomBtn btnContent='Send Message' onClickItem={()=> setTab('sendMessage')} />
            <CustomBtn btnContent='Request Info' onClickItem={()=> setTab('requestInfo')} />
            <CustomBtn btnContent='Make Reservations' onClickItem={()=> setTab('makeReservations')} />
      </div>
      {tab === 'sendMessage'? <SendMessage />:null}
      {tab === 'requestInfo'? <Request />: null}
      {tab === 'makeReservations' && <Reservations />}
    </div>
  )
}

export default Information