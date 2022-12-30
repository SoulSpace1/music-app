import React from "react"

import style from './playlist-elem.module.css'

export function BtnPlay(props){
    return (
        <div className={style.player__btn_play && style._btn}>
            <svg className={style.player__btn_play_svg} alt="play">
                <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
            </svg>
        </div>
    );
}