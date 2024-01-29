import React from 'react'
import style from './Tooltip.module.css'

export default function Tooltip( { title, description, children, color='dark', type='dark'  } ){
    const [visible, setVisible] = React.useState(false)
    
    let svgColor = '#fff'
    let colorClass = color
    if(type==='light')
        colorClass = 'light-'+color
    switch(colorClass){
        case 'light':
            svgColor = '#111827'
            break;
        case 'light-blue':
            svgColor= '#1E40AF'
            break
        case 'light-purple':
            svgColor= '#A9229B'
            break  
        case 'light-green':
            svgColor= '#3C8C4E'
            break

        default:
            svgColor = '#fff'
    }
    
    return (
        <div className={style['tooltip-main-container']}>
            {visible && <div className={`${style['popup']} ${style[colorClass]}`}>
                <div className={style['title']}>
                    <svg className={style[colorClass]} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V13M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V13M20 13H17.4142C17.149 13 16.8946 13.1054 16.7071 13.2929L14.2929 15.7071C14.1054 15.8946 13.851 16 13.5858 16H10.4142C10.149 16 9.89464 15.8946 9.70711 15.7071L7.29289 13.2929C7.10536 13.1054 6.851 13 6.58579 13H4" stroke={svgColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className={style['tooltip-text']}>
                        {title}
                    </div>
                    <svg onClick={()=> setVisible(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill={svgColor}/>
                    </svg>
                </div>
                <div className={style['description']}>
                    {description}
                </div>
            </div>}
            <div onClick={()=> setVisible(prev => !prev)} className={style['children']}>
                {children}
            </div>
        </div>
    )
}

