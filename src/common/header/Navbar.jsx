
import { Link } from "react-router-dom"

import { useState } from 'react';



const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
             دسته بندی<i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>خانه</Link>
              </li>
              <li>
                <Link to='/pages'>موجودی
             
                </Link>
              </li>
              <li>
                <Link to='/user'>درباره ما</Link>
              </li>
              
              
              <li>
                <Link to='/contact'>مخاطب</Link>
              </li>

              <li>
          
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
