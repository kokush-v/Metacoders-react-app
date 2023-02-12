import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = (props) => {
   let auth = { token: props.config.token };

   return auth.token ? <Outlet /> : <Navigate to={props.config.url} />;
};

export default PrivateRoutes;
