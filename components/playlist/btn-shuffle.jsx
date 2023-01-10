import React from "react"

import style from './playlist-elem.module.css'

export function BtnShuffle(props){
    return (
        <div className={style.player__btn_shuffle && style._btn_icon}>
            <svg className={style.player__btn_shuffle_svg} alt="shuffle">
                <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
            </svg>
        </div>
    );
}