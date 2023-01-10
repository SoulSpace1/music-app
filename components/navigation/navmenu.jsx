import React from "react";

import style from './nav-menu.module.css'

export function NavMenu(props){
    return (
        <div className={style.nav__menu}>
            <ul className={style.menu__list}>
                <li className={style.menu__item}><a href="http://" className={style.menu__link}>Главное</a></li>
                <li className={style.menu__item}><a href="http://" className={style.menu__link}>Мой плейлист</a></li>
                <li className={style.menu__item}><a href="http://" className={style.menu__link}>Войти</a></li>
            </ul>
        </div>
    );
}