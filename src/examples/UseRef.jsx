import React,{useRef , useEffect} from 'react'


export default function UseRef() {
  const inputRef  = useRef(null);
  const focus = ()=>{
    inputRef.current.focus();
  }
  return (
    <div style={{height:"100vh"}}>
      <h1 className="title">UseRef</h1>
      <div className="form-group">
        <input type="text" ref={inputRef} />
      </div>
        <button className='btn' onClick={focus}> Login </button>
    </div>
  )
}
