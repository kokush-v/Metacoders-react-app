import React, { useState, useEffect, useContext, useRef } from 'react';
import { Token } from '../../context/Context';
import { Navigate } from 'react-router-dom';
import './Acc.scss';
import Message from './componets/Message';
import UserOnline from './componets/UserOnline';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const AccPage = () => {
   const { gToken, setToken } = useContext(Token);
   const [userTable, setUserTable] = useState([]);
   const [online, setOnline] = useState([]);
   const [messages, setMessages] = useState([]);
   const [User, setUser] = useState(
      JSON.parse(sessionStorage.getItem('token'))
   );

   const messageText = useRef(null);
   const bottomRef = useRef(null);
   useEffect(() => {
      socket.emit('join', User.user);

      socket.on('conn_user', async (data) => {
         await fetchGetusers()
            .then((resp) => resp.json())
            .then((resp) => setUserTable(resp));

         setOnline(data.online);
         setMessages(data.messages);
         // console.log(online);
      });

      socket.on('log_out', (data) => {
         setOnline(data.online);
         document.getElementById(data.user.id).style.backgroundColor = '#f00';
      });

      return () => socket.on('disconnect');
   }, [socket]);

   useEffect(() => {
      socket.on('load_message', async (data) => {
         var result = {
            text: data.data.message,
            uid: data.data.user.id,
            uname: data.data.user.name,
            date: data.date,
         };

         setMessages([...messages, result]);
      });

      bottomRef.current?.scrollTo({
         top: 9999,
         behavior: 'smooth',
      });

      online.map((e) => {
         document.getElementById(e).style.backgroundColor = '#48ff00';
      });
   }, [online, messages]);

   async function fetchGetusers() {
      return await fetch('http://localhost:5000/getusers');
   }

   function SendMessage(message) {
      socket.emit('send_message', { message, user: User.user });
   }

   if (!gToken) {
      return <Navigate to='/login' />;
   }
   return (
      <main className='chat'>
         <h1>Hello, {User.user.name} </h1>
         <form className='messanger' autoComplete='off' id='form'>
            <div className='info'>
               <div className='online'>
                  <h3>User online</h3>
                  {userTable.map((usr, i) => {
                     return <UserOnline key={i} config={usr} />;
                  })}
               </div>
            </div>
            <div className='messages-wrapper'>
               <div ref={bottomRef} className='messages'>
                  <div className='msg-wrapper' id='container'>
                     {messages.map((msg, k) => {
                        return (
                           <Message
                              key={k}
                              config={{
                                 myOrNot:
                                    msg.uid === User.user.id
                                       ? 'msg-item'
                                       : 'msg-item partner',
                                 date: msg.date,
                                 name: msg.uname,
                                 message: msg.text,
                              }}
                           />
                        );
                     })}
                  </div>
               </div>
               <div className='sender'>
                  <input
                     ref={messageText}
                     className='msg-text'
                     type='text'
                     id='text'
                  />
                  <input
                     id='project'
                     type='submit'
                     value='Send'
                     onClick={(e) => {
                        e.preventDefault();
                        if (messageText.current.value.trim() !== '')
                           SendMessage(messageText.current.value.trim());
                        messageText.current.value = '';
                     }}
                  />
               </div>
            </div>
         </form>
         <a
            href='/'
            className='logout'
            onClick={(e) => {
               setToken(false);
               sessionStorage.removeItem('token');
            }}
         >
            Log out
         </a>
      </main>
   );
};

export default AccPage;
