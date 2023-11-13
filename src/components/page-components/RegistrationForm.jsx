import React, { useRef , useState , useEffect } from 'react'
import Title from '../Title';
import Button from '../Button.jsx'
import FormGroup from '../FormGroup.jsx';

export default function RegistrationForm({handleCancel , showLogin , registered , handleRegistration }) {
  let fullName = useRef();
  let email = useRef();
  let password = useRef();
  let passwordConf = useRef();
  const [registration , setRegistration] = useState({
    fullName:"",
    email:"",
    password:"",
    passwordConf:"",
  });
  const handleInputChange = (e)=>{
    setRegistration({...registration, [e.target.name]:e.target.value })
  }
  function handleRegistration(e){
     e.preventDefault();
     const events = {
      fullName: registration.fullName,
      email: registration.email,
      password: registration.password,
      passwordConf: registration.passwordConf,
      id:Math.floor(Math.random() *1000),
     }
    //  console.log(events)
    const validateRegistrationForm = (obj) => {
      if(
        Object.values(obj).every((value)=> value || (typeof value === "number" && value === 0 ))){
          resetForm();
          showLogin();
          window.alert("success")
        }else{
          window.alert("complete all field")
        }
    }
    validateRegistrationForm(events);
  }

  useEffect(()=>{
    fullName.current.focus()
  }, [])
  function resetForm(){
     setRegistration({
      fullName:"",
      email:"",
      password:"",
      passwordConf:"",
     })
  }
  return (
    <div className="form fadeIn" style={{maxWidth:600}} >
      <Title text='Register' classes={"text-center mb-4"} />
      <Button classes={"btn-dark"} text={"X"} styles={{position:"absolute", top:"20px",right:"30px",padding:".2rem .6rem"}} 
      onClick={handleCancel}
      />
      <form onSubmit={handleRegistration}>
        <FormGroup label={"Name"} name={"fullName"}   placeholder={"Enter you Name"} value={registration.fullName} onChange={handleInputChange} reference={fullName} />
        <FormGroup label={"Email"} name={"email"} inputType={"email"} placeholder={"Enter your Email"} value={registration.email} onChange={handleInputChange} reference={email} />
        <FormGroup label={"Password"} name={"password"} inputType={"password"} placeholder={"Enter you Password"} value={registration.password} onChange={handleInputChange} reference={password} />
        <FormGroup label={"Confirm Password"} name={"passwordConf"} inputType={"password"} placeholder={"Confirm Password"} value={registration.passwordConf} onChange={handleInputChange} reference={passwordConf} />
        {/* <FormGroup label={} inputType={} placeholder={}  value={""} onChange={} reference={} /> */}
      <div className="d-flex space-between">
          <Button classes={"btn-primary btn-lg"}  type={"submit"} text={"Register"}   onClick={()=>{console.log("registered")}} />
          
          <Button  classes={"btn-lg"} type={"button"} text={"Login"} onClick={
            showLogin} />
        </div>
      </form>
    </div>
  )
  }
