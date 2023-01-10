import React from "react"

import style from './shadow-skeleton.module.css'

export function Collection(){
    return (
        <div className={style.shadow_collection}>
        <div className={style.collection}></div>
        <div className={style.collection}></div>
        <div className={style.collection}></div>
    </div>
    );
}