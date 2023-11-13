//CSS
import './App.css';
//Icons
import {IoIosSend} from 'react-icons/io';
import {AiFillHtml5, AiFillPlayCircle, AiFillFileExcel, AiFillUnlock} from 'react-icons/ai';
import {DiCss3Full, DiReact, DiPython} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaRProject, FaJava, FaDatabase , FaMapMarkedAlt , FaFileDownload} from 'react-icons/fa';
import {FaPeopleGroup} from 'react-icons/fa6';
import { BsArrowUpCircleFill } from 'react-icons/bs';

//Components
import Title from './components/Title.jsx';
import Header from './components/Header.jsx';
import headerImg from './img/header-img-1.png';
import Button from './components/Button.jsx';
import OffersCard from './components/page-components/OffersCard.jsx';
// import Card from './components/Card.jsx'
import CategoriesCard from './components/page-components/CategoriesCard.jsx';
import Modal from './components/Modal.jsx'
// import TestimonialCard from './components/page-components/TestimonialCard.jsx';
//Data
import TestimonialsList from './components/lists/TestimonialsList.jsx';
//Hooks
import {useState, useRef, useEffect} from 'react';
//Forms
import LoginForm from './components/page-components/LoginForm.jsx';
import RegistrationForm from './components/page-components/RegistrationForm.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
//Example
// import UseEffectHook from './examples/UseEffectHook.jsx';
// import MyListEx from './examples/MyListEx.jsx';
// import UseStateHookEx from './examples/UseStateHookEx.jsx'
// import UseRef from './examples/UseRef.jsx';

function App() {
  // STATE
  // Modal State
  const [showCourseModal, setShowCourseModal]= useState(false);
  // Offer State
    const [showOffers, setShowOffers] = useState(false);
  // Reference State
  const offersRef = useRef();
  const topRef = useRef();
  // Scroll State
  const [goToTopArrow, setGoToTopArrow] = useState(false);
  //form state
  const [forms, setForms] = useState({
    LoginForm:false,
    registrationForm:false,
  });
 
  const [Login, setLogin] = useState(false);
  //Effects
  useEffect(()=>{
    window.onscroll = ()=>{ScrollFunction()};
  },[])
  // HANDLERS
  // Modal Handlers
  function handleStartLearningEvent(){
    setShowCourseModal(true); 
  }
  function handleModalCancelEvent(){
    setShowCourseModal(false); 
  }
  // Offer Handler
const handleShowOffers= ()=>{
  showOffers===false?setShowOffers(true):setShowOffers(false);
   if(showOffers){
    setShowOffers(false);
   }else{
    setShowOffers(true);
   }

  }
  const handleScrollToOffers = ()=>{
    offersRef.current.scrollIntoView({behavior:"smooth"});
  };
  //scroll handler
  function ScrollFunction (){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      setGoToTopArrow(true);
    }
    else{
      setGoToTopArrow(false);
    }
  }
  //SCROLL UP Handler
  function handleGoToTOP(){
    topRef.current.scrollIntoView({behavior:"smooth"})
  }
  //form Handlers
  // login form handler
  const   handleShowLoginForm = ()=>{
    setForms({LoginForm:true , registrationForm:false})
  }
  const handleCancelLoginForm = ()=>{
    setForms({...forms, LoginForm:false})
  }
  const handleCancelRegistrationForm =()=>{
    setForms({...forms, registrationForm:false})
  }
  function HandleLoginFormValidation(){
    setForms({...forms, LoginForm:false})
    setLogin(true);
    setShowCourseModal(false); 
  }
  // register form
  function HandleShowRegistrationForm(){
    setForms({ LoginForm:false, registrationForm:true})
  }
  // Offers List
  const offersList = [
    { 
      icon_1:<AiFillUnlock className="i" size={"2em"} />,
      title:"Tons of content",
      text:"we have library of over 100,00 videos that will help  you learn to code",
    },
    {
      icon_1:<FaMapMarkedAlt className="i" size={"2em"} />,
      title:"Tons of content",
      text:"we have library of over 100,00 videos that will help  you learn to code",
    },
    {
      icon_1:<FaFileDownload className="i" size={"2em"} />,
      title:"Tons of content",
      text:"we have library of over 100,00 videos that will help  you learn to code",
    },
  ]
  const moreOffersList = [
    {
      icon_1:<AiFillUnlock className="i" size={"2em"} />,
      title:"Tons of content",
      text:"we have library of over 100,00 videos that will help  you learn to code",
    },
    {
      icon_1:<FaMapMarkedAlt className="i" size={"2em"} />,
      title:"Tons of content",
      text:"we have library of over 100,00 videos that will help  you learn to code",
    },
    {
      icon_1:<FaFileDownload className="i" size={"2em"} />,
      title:"Tons of content",
      text:"we have library of over 100,00 videos that will help  you learn to code",
    },
  ]
  return (
    <>
    <div ref={topRef} className="container container-lg d-flex" style={{flexDirection:"column",justifyContent:"space-between", alignItems:"center"}}>
      <Navbar />
      {/* Header */}
      <Header className="d-flex"  style={{ alignItems:"center"}}>
        <div className="header-content mb-4 d-flex" style={{flexDirection:"column",justifyContent:"space-between", alignItems:"center"}}>
        <Title titleText="My First SPA"  classes={"header-titl text-center fs-xxl mb-3"}/>  
        <p className="header-text text-center mb-3">
          Esse est dolore ullamco dolore ipsum voluptate occaecat culpa ipsum minim. Elit excepteur adipisicing consequat fugiat Lorem eu esse adipisicing exercitation non non. Pariatur magna magna consequat dolor consectetur. 
        </p>
        <div className='d-flex' style={{justifyContent:"center"}}>
          <Button type="button" onClick={ !Login?handleStartLearningEvent: ()=>window.alert("you are logged") } classes={"btn btn-primary text-light"} icon={<IoIosSend size="25" style={{paddingRight:"10px"}} />}  text={"Try if free for 30 days"} />
          <Button type="button" classes={"btn btn-secondary "} onClick={handleScrollToOffers} text={"Learn more..."} />
        </div>
        </div>
        <img src={headerImg} alt="header-img"  className="header-img"/>
      </Header>
      {/* Main */}
      <main>
        {/* Categories */}
        <section  className="categories mb-4">
          <Title text="Top Categories" classes={"subtitle text-center"} />
          <div className="categories-container d-flex">
            <CategoriesCard title={"Web Development"} 
            icon_1={<AiFillHtml5 size={"4em"} className="icon html5" />}
            icon_2={<DiCss3Full size={"4em"} className="icon css3" />}
            icon_3={<SiJavascript size={"4em"} className="icon js" />}
            btnIcon={<AiFillPlayCircle size={"2em"}  style={{paddingRight:"0.5em"}} />}
            startLearningEvent={handleStartLearningEvent}
            >
              <span className="fs-lg">Learn how to build web apps</span>
              <ul className="mt-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </CategoriesCard>
            <CategoriesCard title={"Mobile Development"} 
            icon_1={<DiReact size={"4em"} className="icon react" />}
            icon_2={<SiJavascript size={"4em"} className="icon js" />}
            btnIcon={<AiFillPlayCircle size={"2em"}  style={{paddingRight:"0.5em"}} />}
            startLearningEvent={handleStartLearningEvent}
            >
              <span className="fs-lg">Learn how to build mobile apps with</span>
              <ul className="mt-1">
                <li>React</li>
                <li>JavaScript</li>
              </ul>
            </CategoriesCard>
            <CategoriesCard title={"Data Science"} 
            icon_1={<DiPython size={"4em"} className="icon python" />}
            icon_2={<FaRProject size={"4em"} className="icon r-project" />}
            icon_3={<FaJava size={"4em"} className="icon java" />}
            btnIcon={<AiFillPlayCircle size={"2em"}  style={{paddingRight:"0.5em"}} />}
            startLearningEvent={handleStartLearningEvent}
            >
              <span className="fs-lg">Learn how to analyse data with</span>
              <ul className="mt-1">
                <li>Python</li>
                <li>R</li>
                <li>Java</li>
              </ul>
            </CategoriesCard>
            <CategoriesCard title={"Business"} 
            icon_1={<AiFillFileExcel size={"4em"} className="icon file-excel" />}
            icon_2={<FaPeopleGroup size={"4em"} className="icon people-group " />}
            icon_3={<FaDatabase size={"4em"} className="icon database" />}
            btnIcon={<AiFillPlayCircle size={"2em"}  style={{paddingRight:"0.5em"}} />}
            startLearningEvent={handleStartLearningEvent}
            >
              <span className="fs-lg">Learn how to analyse data with</span>
              <ul className="mt-1">
                <li>Excel File</li>
                <li>People Group</li>
                <li>Database</li>
              </ul>
            </CategoriesCard>
          </div>
        </section>
        {/* Offer */}
        <section ref={offersRef} className="offers  container container-md d-flex p-2" style={{flexDirection:"column" , justifyContent:"center", alignItems:"center"}}>
          <Title classes={"subtitle text-cener mb--4"} text={"Here's what you get"} />
          <div className="offers-container bg-light d-flex " style={{justifyContent:"center", alignItems:"center"}}>
            {/* <OffersCard icon_1={<AiFillUnlock className="i" size={"2em"} />}
            title={"Tons of content"}
            text={"we have library of over 100,00 videos that will help  you learn to code "}>
            </OffersCard> */}

            { offersList.map((offer,index)=>
              <OffersCard key={index} icon_1={offer.icon_1} title={offer.title} text={offer.text}></OffersCard>
            )}
          </div>
          {showOffers && 
          <div className="offers-container d-flex " style={{justifyContent:"center", alignItems:"center"}}>

          { moreOffersList.map((offer,index)=>
            <OffersCard key={index} icon_1={offer.icon_1} title={offer.title} text={offer.text}></OffersCard>
          )}
        </div>

          }
          <a href="#" onClick={handleShowOffers} style={{cursor:"pointer",userSelect:"none",textDecoration:"underline"}} >
            <h4 className="text-center text-primary mt-2">
              {
                showOffers? "Less":"More..."
              }
            </h4>
          </a>
        </section>
        {/* Testimonials */}
        <section className='testimonials my-4'>
            <Title classes={"subtitle text-center mb-4"} text={"What our users say"} />
            <div className="testimonials-container center " style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <TestimonialsList />
              {/* <TestimonialCard /> */}
            </div>
        </section>
      </main>
      <Footer />

    </div>
    
    {/* Utilities somethings shows up (not permanent) */}
    {/* Modal */}
    {showCourseModal && <Modal title="Access Denied" logInEvent={handleShowLoginForm}  text={"Please login in order to access the content"} cancelEvent={handleModalCancelEvent}/>}
    {/* Go to Top Arrow */}
    {
      goToTopArrow && <BsArrowUpCircleFill className='goToTopArrow' onClick={handleGoToTOP} />
    }
    {/* forms */}
    {/* Login Form */}
      {
       forms.LoginForm && (<div className='modal'><LoginForm showRegister={HandleShowRegistrationForm} LoggedIn={HandleLoginFormValidation} handleCancel={handleCancelLoginForm} /></div>)
      }
    {/* Register Form */}
      {
        forms.registrationForm && <div className="modal"><RegistrationForm  handleCancel={handleCancelRegistrationForm} showLogin={handleShowLoginForm} /></div>
      }
    {/* Example */}
      {/* <UseStateHookEx /> */}
      {/* <UseEffectHook /> */}
      {/* <MyListEx /> */}
      {/* <UseRef /> */}
    </>
  );
}

export default App;
