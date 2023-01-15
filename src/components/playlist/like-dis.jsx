import React from "react"

import style from './playlist-elem.module.css'

export function LikeDis(props){
    return (
        <div className={style.track_play__like_dis}>
            <div className={`${style.track_play__like} ${style._btn_icon}`}>
                <svg className={style.track_play__like_svg} alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </svg>
            </div>
            <div className={`${style.track_play__dislike} ${style._btn_icon}`}>
                <svg className={style.track_play__dislike_svg} alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                </svg>
            </div>
        </div>
    );
}