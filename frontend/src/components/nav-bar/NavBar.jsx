import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
   const [burger, setBurger] = useState(false);

   function BurgerToggle() {
      burger ? setBurger(false) : setBurger(true);
      if (window.innerWidth <= 425) {
         document.querySelector('body').classList.toggle('lock');
      }
   }

   return (
      <div className='nav-bar'>
         <h2>Metacoders</h2>
         <div className='nav_wrapper'>
            <div className='navitems'>
               <div
                  className={burger ? 'nav active' : 'nav'}
                  onClick={() => {
                     BurgerToggle();
                  }}
               >
                  <h4>Duplicate</h4>
                  <FontAwesomeIcon icon={'circle'} />
                  <h4>
                     <FontAwesomeIcon icon={'magnifying-glass'} /> Search
                  </h4>
                  <FontAwesomeIcon icon={'circle'} />
                  <h4>
                     <Link to='/login'>Login</Link>
                  </h4>
                  <Link to='/login'>
                     <div className='login'>
                        <FontAwesomeIcon icon={'user'} />
                     </div>
                  </Link>
               </div>
            </div>
            <div
               className={burger ? 'burger active' : 'burger'}
               onClick={BurgerToggle}
            >
               <span></span>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
