import React from 'react';
import FormGroup from '../FormGroup.jsx';
import {useState, useRef, useEffect} from 'react';
import Button from '../Button.jsx';
import Title from '../Title.jsx';



export default function LoginForm({handleCancel ,showRegister , LoggedIn}) {
  
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");

  const changeEmail = (e)=>{
    setEmail(e.target.value);
    // setEmail( emailRef.current.value);
  };
  const changePassword = (e)=>{
    setPassword(e.target.value)
  };

  let emailRef = useRef();
  let passwordRef = useRef();
 
  const HandleSubmit = (e)=>{
    e.preventDefault()
    emailRef.current.value ==="" && emailRef.current.focus();
    passwordRef.current.value ==="" && passwordRef.current.focus()
    const event = {
      email:email,
      password:password,
      id:Math.floor(Math.random()*1000),
    }
    validateLoginForm();
      
  }
  function ResetForm(){
    setEmail("");
    setPassword("");
  }
  function validateLoginForm(){
    if(email ==="" && password ===""){
      window.alert("Enter your Email and Password!")
      return;
    }else if(email ==="" || password ===""){
      window.alert("Fill the missing data!")
    
    }else{
      if(password.length < 8){
        window.alert("Password need to be more than 8 character")
        return 
      }else{

        // window.alert("Form Submission")
        LoggedIn();
        // ResetForm();
      }

    }

  }
  useEffect(()=>{
    if(email ==="" && !passwordRef.current.focus()){
      emailRef.current.focus()
    }
  }, []);

  

  return (
    <div className='form fadeIn' style={{maxWidth:"500px"}}>
      <Title text="Login" classes={"text-center mb-4"} /> 
      <h4 className="" style={{fontSize:"2rem",fontWeight:400, marginBottom:"2rem"}}>Enter your credentials</h4>
      <form onSubmit={HandleSubmit} >
        <FormGroup reference={emailRef} label={"Email"} inputType={"email"} placeholder={"Enter your Email"} value={email} onChange={changeEmail} />
        <FormGroup reference={passwordRef} label={"Password"} inputType={"password"} placeholder={"Enter your Password"} value={password} onChange={changePassword} />
      {/* <div className="form-group">
          <label >          </label>
            <input type="email" className='form-control' placeholder='Enter your Email'/>

          <label >Password          </label>
            <input type="password" className='form-control' placeholder='Enter your Password'/>
        </div> */}
        <div className="d-flex space-between">
          <Button classes={"btn-primary"}  type={"submit"} text={"Login"}  onClick={HandleSubmit} />
          <Button classes={"btn-dark"} text={"X"} styles={{position:"absolute", top:"20px",right:"30px",padding:".2rem .6rem"}} 
      onClick={handleCancel}
      />
          <Button  classes={"btn-dark"} type={"button"} text={"Register"} onClick={
            showRegister} />
        </div>
      </form>
    </div>
  )
}
