import React,{useState, useEffect} from 'react';

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);
  const [fadeIn , setFadeIn] = useState("");
  useEffect(()=>{
    setText(text + 3);
    text>3 && fadeIn === "" && setFadeIn("fadeIn")
  },[count])
  return (
    <div style={{height:"100vh"}} className="center " >
      <h1 className="title"></h1>
      <h2 className="subtitle">You clicked {text} times </h2>
      <p className={`card  card-warning bg-danger  text-light p-1 ${fadeIn}`}>
        Tour Clicked {count}
      <button className="btn btn-dark " style={{padding:"1em"}} onClick={()=>{setCount(count + 1);
      setFadeIn("");
      }}>Add</button>
      </p>
    </div>
  )
}
