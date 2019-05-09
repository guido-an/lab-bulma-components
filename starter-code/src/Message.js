import React, { Component } from "react";

const Message = props => {
  return (
    <article className="message is-info">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete" />
      </div>
      <div className="message-body">
        {props.desc}
      </div>
    </article>
  );
};

export default Message;
