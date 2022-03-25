import { MenuOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavMobil from './NavMobil';

function Header() {
    const [active, setActive] = useState(false)

    function showMenu() {
        setActive(!active);
    }
  return (
      <div className='w-full absolute lg:flex items-center p-4 flex justify-between'>
          <span className='text-4xl font-extrabold uppercase select-none text-white'> green </span>
          <nav>
              <ul className='hidden lg:flex gap-8 p-6 font-medium'>
                <li className='text-white hover:text-inherit uppercase'> <Link to="/">pricing</Link> </li>
                <li className='text-white hover:text-inherit uppercase'> <Link to="/contact"> Contact </Link> </li>
                <li className='text-white hover:text-inherit uppercase'> <Link to="/works"> Works </Link> </li>
                <li className='text-white hover:text-inherit uppercase'> <Link to="/about"> About </Link> </li>
              </ul>

          </nav>

          <NavMobil showMenu={showMenu} active={active} />

          <div className='lg:hidden scale-150'>
                  <MenuOutlined onClick={showMenu} className='cursor-pointer text-white' />
          </div>
      </div>
  )
}

export default Header;