import React from "react"

import style from './menu.module.css'

export const MenuItem = ({title}) => {


    return <a className={style.link_list} href="#">{title}</a>
}

