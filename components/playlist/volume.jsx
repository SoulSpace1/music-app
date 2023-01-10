import React from "react"

import style from './playlist-elem.module.css'

export function Volume(props){
    return (
        <div className={`${style.bar__volume_block} ${style.volume}`}>
            <div className={style.volume__content}>
                <div className={style.volume__image}>
                    <svg className={style.volume__svg} alt="volume">
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                </div>
                <div className={`${style.volume__progress} ${style._btn}`}>
                    <input className={`${style.volume__progress_line} ${style._btn}`} type="range" name="range"/>
                </div>                   
            </div>
        </div>
    );
}