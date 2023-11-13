import {useState, React} from 'react';
import Button from './Button';

export default function Modal({title, text="Modal content goes here!", logInEvent, cancelEvent}){
  return(
    <div className="modal">
      <div className="modal-content fadeIn-2ms">
        <h1 className="mb-1">{title}</h1>
        <p className="mb-1">{text}</p>
        <div className="d-flex space-between">
          <Button classes={"btn-primary"} text={"Login"} onClick={logInEvent} />
          <Button classes={"btn-dark"} text={"Close"} onClick={cancelEvent} />
        </div>
      </div>
    </div>);
}