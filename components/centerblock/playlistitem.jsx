import React from 'react';

import style from './playlist-item.module.css'

export function PlaylistItem(props){
    return (
        <div className={style.playlist__item}>
            <div className={style.playlist__track}>
                <div className={style.track__title}>
                    <div className={style.track__title_image}>
                        <svg className={style.track__title_svg} alt="music">
                            <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                        <div className={style.track__title_text}>
                            <a className={style.track__title_link} href="http://">Guilt <span className={style.track__title_span}></span></a>
                        </div>
                </div>
                <div className={style.track__author}>
                    <a className={style.track__author_link} href="http://">Nero</a>
                </div>
                <div className={style.track__album}>
                    <a className={style.track__album_link} href="http://">Welcome Reality</a>
                </div>
                <div className={style.track__time}>
                    <svg className={style.track__time_svg} alt="time">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className={style.track__time_text}>4:44</span>
                </div>
            </div>
        </div>
    );
}