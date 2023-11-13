import React,{useEffect, useState} from 'react';
//Data
import testimonialData from '../../db/testimonials-list.json';
//Component
import TestimonialCard from '../page-components/TestimonialCard';

export default function TestimonialsList() {
  // const [testimonials, setTestimonials] = useState(testimonialData);
  const [testimonials, setTestimonials] = useState(()=>{
    return JSON.parse(localStorage.getItem("testimonialData"));
  });
  useEffect(()=>{
    setTestimonials(testimonialData);
    localStorage.setItem("testimonialData", JSON.stringify(testimonialData))

  },[testimonials]);
  return (
    <>
      {testimonials &&
        testimonials.map((testimonial)=>
          (<TestimonialCard key={testimonial.id} img={testimonial.img} fullName={testimonial.fullName} jobTitle={testimonial.jobTitle} twitterHandler={testimonial.twitterHandler} text={testimonial.text}   />)
        )
      }
    </>
  )
}
