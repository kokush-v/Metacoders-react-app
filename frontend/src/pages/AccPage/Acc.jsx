import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Token } from '../../context/Context';

import './Acc.scss';

const AccPage = () => {
   const { gtoken, setToken } = useContext(Token);

   const [name, setName] = useState('user');

   useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem('token'));
      if (user) {
         console.log(user.user);
         if (user) setName(user.user.name);
      }
   }, []);

   return (
      <main className='chat'>
         <h1>Hello, {name} </h1>
         <form className='messanger' action='' id='form'>
            <div className='info'>
               <div className='modals'></div>
               <div className='online'>
                  <h3>User online</h3>
               </div>
            </div>
            <div className='messages-wrapper'>
               <div className='messages'>
                  <div className='msg-wrapper' id='container'></div>
               </div>
               <div className='sender'>
                  <input className='msg-text' type='text' id='text' />
                  <input id='project' type='submit' value='Send' />
               </div>
            </div>
            <input type='hidden' id='hid_inp' name='lastId' value='' />
         </form>
         <Link
            to={'/'}
            className='logout'
            onClick={(e) => {
               setToken(false);
               sessionStorage.removeItem('token');
            }}
         >
            Log out
         </Link>
      </main>
   );
};

export default AccPage;
