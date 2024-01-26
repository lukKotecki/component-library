import React  from 'react'
import classNames from 'classnames'
import style from './Badge.module.css'

export default function Badge({children, border='square', color='gray', ...rest}){

    const myClasses = classNames(style.badge, style[color], eval('style.'+border)) 
    
    

    return (
        <div className={myClasses} {...rest}>
            {children}
        </div>
    )
}