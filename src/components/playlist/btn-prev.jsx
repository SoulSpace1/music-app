import React from "react"

import style from './playlist-elem.module.css'

export function BtnPrev(props){
    return (
        <div className={style.player__btn_prev}>
        <svg className={style.player__btn_prev_svg} alt="prev">
            <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
        </svg>
    </div>
    );
}