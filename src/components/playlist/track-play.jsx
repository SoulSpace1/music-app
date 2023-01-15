import React from "react"

import style from './playlist-elem.module.css'

export function TrackPlay(props){
    return (
        <div className={style.track_play__contain}>
            <div className={style.track_play__image}>
                <svg className={style.track_play__svg} alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className={style.track_play__author}>
                <a className={style.track_play__author_link} href="http://">Ты та...</a>
            </div>
            <div className={style.track_play__album}>
                <a className={style.track_play__album_link} href="http://">Баста</a>
            </div>
        </div>
    );
}