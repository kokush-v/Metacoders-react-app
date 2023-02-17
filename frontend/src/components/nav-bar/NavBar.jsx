import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Token } from '../../context/Context';
import './NavBar.scss';
import { Navigate, Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
   const [burger, setBurger] = useState(false);
   const { gToken, setToken } = useContext(Token);
   const navigate = useNavigate();

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
                  <div
                     onClick={(e) => {
                        navigate(gToken ? '/acc' : '/login', { replace: true });
                     }}
                  >
                     <div className='login'>
                        <FontAwesomeIcon icon={'user'} />
                     </div>
                  </div>
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
