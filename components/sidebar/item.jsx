import React from "react"

import style from './item.module.css'

export function Item(props){
    return (
        <div className={style.sidebar__item}>
            <a className={style.sidebar__link} href="#">
                <img className={style.sidebar__img} src="img/playlist02.png" alt="day's playlist"/>
            </a>
        </div>                
    );
}