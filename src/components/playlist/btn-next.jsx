import React from "react"

import style from './playlist-elem.module.css'

export function BtnNext(props){
    return (
        <div className={style.player__btn_next}>
            <svg className={style.player__btn_next_svg} alt="next">
                <use xlinkHref="..//img/icon/sprite.svg#icon-next"></use>
            </svg>
        </div>
    );
}