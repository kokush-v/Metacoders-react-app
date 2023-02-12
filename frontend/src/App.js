import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ErrorPage from './components/Error/ErrorPage';
import Main from './pages/MainPage/Main';
import AccPage from './pages/AccPage/Acc';
import Reg from './pages/Form/Reg';
import Login from './pages/Form/Login';
import PrivateRoutes from './PrivateRoute';
import { Token } from './context/Context';

const App = () => {
   const [gToken, setToken] = useState(false);

   useEffect(() => {
      if (sessionStorage.getItem('token')) setToken(true);
   }, []);

   return (
      <BrowserRouter>
         <Header />{' '}
         <Token.Provider value={{ gToken, setToken }}>
            <Routes>
               <Route path='/' element={<Main />} />
               <Route
                  element={
                     <PrivateRoutes config={{ token: gToken, url: '/login' }} />
                  }
               >
                  <Route path='/acc' element={<AccPage />} />
               </Route>
               <Route
                  element={
                     <PrivateRoutes config={{ token: !gToken, url: '/acc' }} />
                  }
               >
                  <Route path='/signup' element={<Reg />} />
               </Route>
               <Route
                  element={
                     <PrivateRoutes config={{ token: !gToken, url: '/acc' }} />
                  }
               >
                  <Route path='/login' element={<Login />} />
               </Route>

               <Route path='*' element={<ErrorPage />} />
            </Routes>
         </Token.Provider>
         <Footer />
      </BrowserRouter>
   );
};

export default App;
