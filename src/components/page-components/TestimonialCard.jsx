import React,{useState} from 'react'
//Icons
import {BsTwitter , BsStar, BsStarFill} from 'react-icons/bs'

export default function TestimonialCard({
  img,
  fullName = "Full Name",
  jobTitle = "Job Title",
  twitterHandler="Twitter Handler",
  text = "text",
  ratingStarts = Math.floor(Math.random() * 5) + 1,
  title,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader=true, 
  cardText, 
  children,
  cardBody= true,
  cardFooter= true
  }) {
    const [rating , setRating]= useState(ratingStarts);
  return (
    <div className="card testimonial in-view center "  >
      <div className="card-header">
        <div className={`card-img ${img}` }>
          
        </div>
        <div className="card-body">
          <h3 className="card-title">{fullName}</h3>
          <p className="card-text">{jobTitle}</p>
          <div>
            <BsTwitter size={"1.5rem"}  />
            {twitterHandler}
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="cart-text">
          {text}
        </p>
      </div>
      <div className="card-footer d-flex" style={{cursor:"pointer"}}>
        {/* <BsStarFill className="mr-1" /><BsStarFill className="mr-1" />{" "}
        <BsStar className="mr-1" /><BsStar className="mr-1" />{" "}
        <BsStar className="mr-1" /> */}
        {
          [...Array(5)].map((start,index)=>{
            const ratingValue = index + 1;
            return(
              <label 
              key={index}
              htmlFor='rating'
              onClick={()=>setRating(ratingValue)}
              style={{cursor:"pointer",color:"gold",fontSize:"1.5rem"}}
              >
                <input 
                type='radio'
                value={ratingValue}
                style={{display:"none"}}
                />  
                  {
                    ratingValue <= rating ? <BsStarFill className="mr-1" /> :<BsStar className="mr-1" />
                  }

              </label>
            )
          })
        }
      </div>
    </div>
  )
}
