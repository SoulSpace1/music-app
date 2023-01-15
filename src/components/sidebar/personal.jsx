import React from "react"

import style from './personal.module.css'

export function Personal(props){
    return (
    <div className={style.sidebar__personal}>
        <p className={style.sidebar__personal_name}>Sergey.Ivanov</p>
        <div className={style.sidebar__avatar}>         
        </div>
    </div>
    );
}