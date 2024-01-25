import React from 'react'
import './Testimonials.css'
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonials({ image, name,testimonial,title, children }){

    return (
        <div className='testimonials-main-container'>
        
            <div className='image-container'>
                <img className='image' src={image} />
            </div>
              {children}
              <div className='testimonial-content'>
                <span><RiDoubleQuotesL /></span>
                <p className='testimolial'>{testimonial}</p>
                <p className='name'>{name}</p>
                <p className='title'>{title}</p>
              </div>
        </div>
    )
}