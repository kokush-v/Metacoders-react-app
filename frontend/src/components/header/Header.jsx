import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <h3>
            <Link to={'/'}>
               <FontAwesomeIcon icon={'envelope-open'} />
               hello@Metacoders
            </Link>
         </h3>
         <div className='ic'>
            <a href='/'>
               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href='/'>
               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href='/'>
               <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href='/'>
               <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
         </div>
         <div className='log'>
            <a href='/login'>
               <FontAwesomeIcon icon={'user'} />
            </a>
            <a href='/'>
               <FontAwesomeIcon color='white' icon={'magnifying-glass'} />
            </a>
         </div>
      </header>
   );
};

export default Header;
