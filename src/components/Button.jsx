import React from 'react';
export default function Button({icon, text="Click",classes, type, styles={}, onClick}){
  const alertMissingHandler =()=>{
    window.alert("Add Event Handler to the button") // this for checking yourself and the button
  }
    return (
      <button type={type} className={classes} style={styles} onClick={onClick? onClick:alertMissingHandler}>
        <div className="d-flex"  >
          {icon }
          {text}
        </div>
      </button>
    );
};