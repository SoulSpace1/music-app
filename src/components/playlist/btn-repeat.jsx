import React from "react"

import style from './playlist-elem.module.css'

export function BtnRepeat(props){
    return (
        <div className={`${style.player__btn_repeat} ${style._btn_icon}`}>
            <svg className={style.player__btn_repeat_svg} alt="repeat">
                <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
            </svg>
        </div>
    );
}