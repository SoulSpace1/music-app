import React from "react"

import style from './shadow-skeleton.module.css'

export function ForPlayer(){
    return (
        <div className={style.shadow_min}>
        <span className={style.cover}></span>
        <div className={style.shadow_colum}>
            <span className={style.track_shadow_min}></span>
            <span className={style.track_shadow_min}></span>
        </div>
    </div>
    );
}