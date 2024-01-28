import React from 'react'
import style from './Tooltip.module.css'

export default function Tooltip( { title, children, color='black', type='dark'  } ){
    const [visible, setVisible] = React.useState(false)


    console.clear()


    let colorClass = 'dark'
    switch(color){
        case 'blue':
            colorClass = type === 'dark' ? 'blue' : 'light-blue'
            break;
        case 'purple':
            colorClass = type === 'dark' ? 'purple' : 'light-purple'
            break;
        default:
            colorClass = type === 'dark' ? 'dark' : 'light'
    }

    console.log(colorClass)
    return (
        <div className={style['tooltip-main-container']}>
            {visible && <div className={`${style['popup']} ${style[colorClass]}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V13M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V13M20 13H17.4142C17.149 13 16.8946 13.1054 16.7071 13.2929L14.2929 15.7071C14.1054 15.8946 13.851 16 13.5858 16H10.4142C10.149 16 9.89464 15.8946 9.70711 15.7071L7.29289 13.2929C7.10536 13.1054 6.851 13 6.58579 13H4" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className={style['tooltip-text']}>
                    {title}
                </div>
                <svg onClick={()=> setVisible(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#C7C7C7"/>
                </svg>
            </div>}
            <div onClick={()=> setVisible(prev => !prev)} className={style['children']}>
                {children}
            </div>
        </div>
    )
}

