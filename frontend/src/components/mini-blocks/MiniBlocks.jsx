import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './MiniBlocks.scss';

const MiniBlocks = (props) => {
   return (
      <div className='plate'>
         {props.config.map((elem, x) => {
            return (
               <div className='blocks' key={x}>
                  <FontAwesomeIcon icon={elem.ic} />
                  <h2>Metacoders</h2>
                  <p>{elem.p}</p>
               </div>
            );
         })}
      </div>
   );
};

export default MiniBlocks;
