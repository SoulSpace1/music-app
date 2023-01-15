import React from 'react';

import style from './content-title.module.css'

export function ContentTitle(props) {
    return (
        <div className={style.content__title}>
            <div className={`${style.playlist_title__col} ${style.col01}`}>Трек</div>
            <div className={`${style.playlist_title__col} ${ style.col02}`}>ИСПОЛНИТЕЛЬ</div>
            <div className={`${style.playlist_title__col} ${style.col03}`}>АЛЬБОМ</div>
            <div className={`${style.playlist_title__col} ${style.col04}`}>
                <svg className={style.playlist_title__svg} alt="time">
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    );
}