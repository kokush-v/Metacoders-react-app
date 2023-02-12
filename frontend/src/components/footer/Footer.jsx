import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';
import { useState, useEffect } from 'react';

const Footer = () => {
   const [scrollTop, setScrollTop] = useState(0);

   useEffect(() => {
      const handleScroll = (event) => {
         setScrollTop(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <footer>
         <div className='footer-wrapper'>
            <h1>Metacoders</h1>
            <div className='footer_nav'>
               <a href='/'>Dublicate</a>
               <a href='/'>Search</a>
               <a href='/'>Login</a>
            </div>
            <div className='footer_icon'>
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
         </div>
         <div className='copyright'>
            Copyright. Nasif Sabbir. All rights reserved
         </div>
         <div
            className={scrollTop >= 1000 ? 'bttop active' : 'bttop '}
            onClick={() => {
               window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
         >
            <FontAwesomeIcon icon={'angle-up'} />
         </div>
      </footer>
   );
};

export default Footer;
