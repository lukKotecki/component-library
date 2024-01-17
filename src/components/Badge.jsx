import React  from 'react'
import classNames from 'classnames'

export default function Badge({children, border='square', color='gray', ...rest}){
    
    const myClasses = classNames('badge', color, border)
    

    return (
        <div className={myClasses} {...rest}>
            {children}
        </div>
    )
}