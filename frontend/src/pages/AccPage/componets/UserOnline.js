const anon = require('./anon.png');

const UserOnline = (props) => {
   const { id, name } = props.config;

   return (
      <div className='online-user'>
         <img src={anon} alt='' />
         <p>{name}</p>
         <div id={id} className='status'></div>
      </div>
   );
};

export default UserOnline;
