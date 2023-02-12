import React, { useEffect } from 'react';

import './Accordeon.scss';
import photo1 from '../../img/1img.png';
import photo2 from '../../img/2img.png';
import photo3 from '../../img/3img.png';

const Accordeon = (props) => {
   var myIndex = 0;

   useEffect(() => {
      if (window.innerWidth <= 770) {
         SlideShow();
      }

      document
         .querySelectorAll('.drop-box-section')[1]
         .childNodes.forEach((elem) => {
            elem.classList.add('open');
         });
   });

   async function SlideShow() {
      var slides = document.querySelector('.imgs').childNodes;

      for (var i = 0; i < slides.length; i++) {
         slides[i].style.opacity = '0';
      }
      myIndex++;

      if (myIndex > slides.length) {
         myIndex = 1;
      }
      slides[myIndex - 1].style.opacity = '1';

      setTimeout(SlideShow, 5000);
   }

   return (
      <div className='about'>
         <div className='content'>
            <div className='imgs'>
               <img className='img1' src={photo1} alt='' />
               <img className='img2' src={photo2} alt='' />
               <img className='img3' src={photo3} alt='' />
            </div>
            <div className='dropbox'>
               {props.config.map((elem, x) => {
                  return (
                     <div
                        className='drop-box-section'
                        onClick={(e) => {}}
                        key={x}
                     >
                        <div
                           className='boxHead'
                           onClick={(e) => {
                              e.stopPropagation();
                              document
                                 .querySelectorAll('.open')
                                 .forEach((div) => {
                                    div.classList.remove('open');
                                 });
                              e.currentTarget.classList.add('open');
                              e.currentTarget.nextElementSibling.classList.add(
                                 'open'
                              );
                           }}
                        >
                           <h2>{elem.h2}</h2>
                        </div>
                        <div className='boxBody'>
                           {elem.ul.map((list, x) => {
                              return (
                                 <ul key={x}>
                                    <li>
                                       <b>{list.b}</b>
                                       <p>{list.p}</p>
                                    </li>
                                 </ul>
                              );
                           })}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Accordeon;
