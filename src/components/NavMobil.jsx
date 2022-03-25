import React from 'react'
import { Link } from 'react-router-dom';
import {Close} from "@material-ui/icons"

function NavMobil({active, showMenu}) {
  return (
    <ul className={active ? 'flex-col  fixed inset-0 left-1/4 flex items-center gap-8 justify-center uppercase font-medium bg-stone-50/10 backdrop-blur-md z-10000 lg:hidden' : 'hidden'}>
    <Close onClick={showMenu} className ='cursor-pointer text-white scale-150' />
    <li className='text-white hover:text-inherit uppercase'> <Link to="/">pricing</Link> </li>
    <li className='text-white hover:text-inherit uppercase'> <Link to="/contact"> Contact </Link></li>
    <li className='text-white hover:text-inherit uppercase'> <Link to="/works"> Works </Link> </li>
    <li className='text-white hover:text-inherit uppercase'> <Link to="/about"> About </Link> </li>
</ul>
  )
}

export default NavMobil