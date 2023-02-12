import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.scss';

const Reg = () => {
   const emailRef = useRef(null);
   const nameRef = useRef(null);
   const passwordRef = useRef(null);

   const [error, setError] = useState('');

   async function createUser() {
      const userdata = {
         email: emailRef.current.value,
         name: nameRef.current.value,
         password: passwordRef.current.value,
      };

      await fetch('http://localhost:5000/signup', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userdata),
      }).then((resp) => {
         if (resp.status > 200) {
            setError('User already exist');
            document.querySelector('.error').classList.add('active');
         } else {
            window.location.replace('http://localhost:3000/login');
         }
      });
   }

   return (
      <main className='form-main'>
         <div className='circle'></div>
         <div className='register-form-container'>
            <form
               className='form'
               onSubmit={(e) => {
                  e.preventDefault();
                  createUser();
               }}
            >
               <h1 className='form-title'>Create new account</h1>
               <h4 className='error'>{error}</h4>
               <div className='form-fields'>
                  <div className='form-field'>
                     <input
                        ref={nameRef}
                        type='text'
                        id='name'
                        placeholder='Name'
                        required
                     />
                  </div>
                  <div className='form-field'>
                     <input
                        ref={emailRef}
                        type='email'
                        id='email'
                        placeholder='Email'
                        required
                     />
                  </div>
                  <div className='form-field'>
                     <input
                        ref={passwordRef}
                        type='password'
                        id='password'
                        placeholder='Password'
                        required
                        minLength='8'
                        maxLength='128'
                     />
                  </div>
               </div>
               <div className='form-buttons'>
                  <input
                     type={'submit'}
                     className='button'
                     value={'Create Account'}
                  />

                  <div className='divider'>or</div>
                  <Link to='/login' className='button button-google'>
                     Login
                  </Link>
               </div>
            </form>
         </div>
      </main>
   );
};

export default Reg;
