import React from 'react';

import './Advertisement.scss';

import photo1 from '../../img/code.png';
import photo2 from '../../img/dots.png';

const Advertisement = () => {
   return (
      <div className='advertisement'>
         <div className='advertisement-wrapper'>
            <div className='project_list'>
               <h1>
                  We are recruiting people
                  <br />
                  to work with Metacoders
               </h1>
               <ul>
                  <li>
                     Who wants to help spread the capabilities of Vietnamese
                     developers to the world.
                  </li>
                  <li>
                     Who wants to grow together by participating in a
                     world-changing project.
                  </li>
                  <li>People who enjoy logical thinking and problem solving</li>
               </ul>
               <a id='project' href='/'>
                  See Running Projects
               </a>
            </div>
            <div className='project_photo'>
               <img src={photo1} alt='' />
               <img src={photo2} alt='' />
            </div>
         </div>
      </div>
   );
};

export default Advertisement;
