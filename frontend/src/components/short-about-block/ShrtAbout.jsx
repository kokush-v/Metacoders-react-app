import React from 'react';
import './ShrtAbout.scss';
import children from '../../img/children.png';

const ShrtAbout = () => {
   return (
      <div className='short-about'>
         <div className='text'>
            <h2>
               Metacoders is a Vietnamese S-class developer team that will boost
               the growth of startups.
            </h2>
            <p>
               We work as a remote programming team for Korean rocket start-ups.
               Join as a long-term team member rather than outsourcing.
            </p>
            <a id='project' href='/'>
               See Running Projects
            </a>
         </div>
         <img src={children} alt={''} />
      </div>
   );
};

export default ShrtAbout;
