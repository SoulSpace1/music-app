import React from "react"

import style from './shadow-skeleton.module.css'

 export function ShadowSkelet(){
    return (
        <div className={style.shadow_skeleton}>
            <div className={style.cover}></div>
            <div className={style.track_shadow_one}></div>
            <div className={style.track_shadow_two}></div>
            <div className={style.track_shadow_three}></div>
         </div>

    );
}