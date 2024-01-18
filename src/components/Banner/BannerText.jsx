import React from "react";
import { ThemeContext } from './Banner'

export default function BannerText({children}){

    const value= React.useContext(ThemeContext)

    return <div className={'banner-text banner-text-'+value}>
        {children}
    </div>
}