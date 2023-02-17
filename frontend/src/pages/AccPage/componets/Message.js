const Message = (props) => {
   return (
      <div className='msg-wrapper' id='container'>
         <div className={props.config.myOrNot}>
            <div className='date'>{props.config.date}</div>
            <div className='name'>{props.config.name}</div>
            <div className='message'>{props.config.message}</div>
         </div>
      </div>
   );
};

export default Message;
