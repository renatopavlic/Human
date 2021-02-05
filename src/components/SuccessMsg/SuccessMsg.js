import React from 'react';
import "./SuccessMsg.css";

function SuccessMsg() {

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="successmsg">
      <h2 className="successmsg__title">
      Thank you for reaching out to us!
      </h2>
      <p className="successmsg__paragraph">
      We will have a look at your message and one of our colleagues will get back to you as soon as possible.
      </p>
      <p className="successmsg__link" onClick={reload}>
      send another message
      </p>
    </div>
  )
}

export default SuccessMsg;
