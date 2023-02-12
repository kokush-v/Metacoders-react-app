import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Vacancies.scss';

// ==================================================

const showModal = () => {
   var container = document.querySelector('.modal-position');

   container.classList.add('show');
   document.querySelector('.dark').classList.add('active');
   document.querySelector('body').classList.add('lock');

   if (!container.classList.contains('show')) {
      setTimeout(() => {
         container.css('display', 'none');
      }, 300);
   }
};

function closeModal() {
   document.querySelector('.modal-position').classList.remove('show');
   document.querySelector('.dark').classList.remove('active');
   document.querySelector('body').classList.remove('lock');
}

// ==================================================

const Vacancies = (props) => {
   return (
      <div className='vacancies'>
         <span className='dark' onClick={closeModal}></span>
         <div className='main-block'>
            <div className='text-wrapper'>
               <b>A position under recruitment</b>
               <p>Become a member of the Metacoders team.</p>
            </div>
            <input
               type='button'
               className='position-view'
               id='project'
               value='View all Positions'
               onClick={showModal}
            />
         </div>

         <div className='modal-position'>
            <FontAwesomeIcon
               className='cross'
               icon={'xmark'}
               onClick={closeModal}
            />
            {props.config.map((elem, x) => {
               return (
                  <div key={x}>
                     <div className='text'>
                        <h1>{elem.h1}</h1>
                        <p>
                           <FontAwesomeIcon icon={elem.icon} className='ic' />
                           Full-Time
                        </p>
                        <a href='/'>Full Description</a>
                     </div>
                     <a id='project' href='/'>
                        Apply now
                     </a>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Vacancies;
