import React from "react";
import { ThemeContext } from './Banner'
// import style from

export default function BannerText({children}){

    const {value, style}= React.useContext(ThemeContext)

    return <div className={`${style['banner-text']} ${style['banner-text-'+value]}`}>
        {children}
    </div>
}