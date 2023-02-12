import React from 'react';

import './ProjInProgress.scss';

const ProjInProgress = () => {
   return (
      <div className='project-in-progress'>
         <h1>
            Currently in
            <br />
            progress
         </h1>
         <h5>Metacoders has done this so far.</h5>
         <div className='items'>
            <div>
               <b>
                  We have signed a business agreement with VNU and confirmed ITP
                  (Information Technology Park) as a base.
               </b>
               <ul>
                  <li>
                     We conduct a one-year course for VNU CS undergraduate
                     graduates.
                  </li>
                  <li>
                     Within three years, a metacodus community of 1,000
                     developers will be born.
                  </li>
               </ul>
            </div>
            <div>
               <b>
                  We decided to provide technical support to Green Labs (agTech)
                  as the first client.
               </b>
               <ul>
                  <li>홈페이지</li>
                  <li>
                     Green Labs revolutionizes human eating in a sustainable
                     way.
                  </li>
                  <li>
                     Annual sales of 100 billion won (2021) 500 billion won
                     (2022)
                  </li>
               </ul>
            </div>
            <div>
               <b>
                  We are contacting a fast-growing startup that will become an
                  additional client.
               </b>
            </div>
            <div>
               <b>
                  Green Labs, SNU, D-Camp, Hanmi Engineering & Construction,
                  #HASHED, etc. signed a partnership.
               </b>
            </div>
         </div>
      </div>
   );
};

export default ProjInProgress;
