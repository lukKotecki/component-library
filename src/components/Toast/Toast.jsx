import React from 'react'
import style from './Toast.module.css'

export default function Toast({children, description ='', type='information'}){

    let svgIcon = ''
    if(description=== '')
        description = type[0].toUpperCase() + type.slice(1)
    switch(type){
        case 'success':
            svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            break;
        case 'warning':
            svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            break;
        case 'error':
            svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            break;
        default:
            svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    }

    return (
        <div className={`${style['toast-main-container']}  ${style[type]}`}>
            <div className={`${style['title-section']}  ${style['title']} ${style[type+'-title']}`}>
                {svgIcon}
                {description}
            </div>
            <div className={style['content']}>
                {children}
            </div>
        </div>
    )
}