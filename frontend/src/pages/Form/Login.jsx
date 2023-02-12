import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Token } from '../../context/Context';
import './Form.scss';

const Login = () => {
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const [error, setError] = useState('');

   const { gtoken, setToken } = useContext(Token);

   async function signinUser() {
      const userdata = {
         email: emailRef.current.value,
         password: passwordRef.current.value,
      };

      await fetch('http://localhost:5000/login', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userdata),
      })
         .then((resp) => resp.json())
         .then((token) => {
            if (token.status > 200) {
               setError('Wrong password or email');
               document.querySelector('.error').classList.add('active');
            } else {
               // console.log(token);
               sessionStorage.setItem('token', JSON.stringify(token));
               const tokenString = sessionStorage.getItem('token');
               if (tokenString || gtoken) setToken(true);
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
                  signinUser();
               }}
            >
               <h1 className='form-title'>Sing in</h1>
               <h4 className='error'>{error}</h4>
               <div className='form-fields'>
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
                  <input type={'submit'} className='button' value={'Login'} />

                  <div className='divider'>or</div>
                  <Link to='/signup' className='button button-google'>
                     Create Account
                  </Link>
               </div>
            </form>
         </div>
      </main>
   );
};

export default Login;
