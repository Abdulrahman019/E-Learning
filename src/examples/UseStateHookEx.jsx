import {useState, React} from 'react';

export default function UseStateHookEx(){
  const [count, setCount] = useState(0);



  return(
    <div   className="mt-3">
      <h1>UseStateHockEx</h1>
      <button className="btn" onClick={(e)=>{setCount(count + 1)}}>+</button>
      <span>Your Number is {count}</span>
      <button className="btn" onClick={(e)=>{setCount(count -2)}}>-</button>

    </div>
  );
}

/*export default function UseStateHookEx(){
  const [count, setCount] = useState(0);

  let countJS = 0;

  function countInJs (e){
    if(e.target.classList.contains("+")){
      return (countJS += 1 ,console.log(countJS));
    }else{
      
      return (countJS -= 1 ,console.log(countJS));
    }
    
    
  }
  
  return(
    <div   className="mt-3">
      <h1>UseStateHockEx</h1>
      <button className="btn +" onClick={(e)=>{countInJs(e)}}>+</button>
      <span>Your Number is {count}</span>
      <button className="btn -" onClick={(e)=>{countInJs(e)}}>-</button>

    </div>
  );
}*/