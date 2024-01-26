import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import classes from './Testimonials.module.css'

export default function Testimonials({ image, name,testimonial,title, children }){

    return (
        <div className={`${classes.testimonialsMainContainer}`}>
        
            <div className={classes.imageContainer}>
                <img className={classes.image} src={image} />
            </div>
              {children}
              <div className={classes.testimonialContent}>
                <span><RiDoubleQuotesL /></span>
                <p className={classes.testimonial}>{testimonial}</p>
                <p className={classes.name}>{name}</p>
                <p className={classes.title}>{title}</p>
              </div>
        </div>
    )
}