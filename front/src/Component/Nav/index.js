import React from 'react'
import Logo from './white.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
         <nav>
            <div class="nav-wrapper purple darken-4">
            <Link to='/' className='brand-logo left'>Logo</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to='/form'> Sign Up</Link></li>
            <li><Link to='/login'> Login</Link></li>
            <li><Link to='/about'> About</Link></li>
            <li><Link to='/blog'> Blog</Link></li>
            <li><Link to='/dash'> Dashboard</Link></li>

            </ul>
            </div>
  </nav>
        
    </div>
  )
}

export default Navbar