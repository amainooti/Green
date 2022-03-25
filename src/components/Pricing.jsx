import Card from './elements/Card';
import React from 'react'

function Pricing() {
  return (
    <div className='text-center w-full bg-pricing-bg bg-cover bg-center h-screen grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 p-4'>
      <Card
      imageText="Lagos"
      h1Text="See More"
      bgImage="bg-hotel1"
      />
      <Card
      imageText="Abuja"
      h1Text="See More"
      bgImage="bg-hotel2"
      />
      <Card
      imageText="Port-Harcourt"
      h1Text="See More"
      bgImage="bg-hotel3"
      />
      <Card
      imageText="Warri"
      h1Text="See More"
      bgImage="bg-hotel4"
      />
    </div>
  )
}

export default Pricing;