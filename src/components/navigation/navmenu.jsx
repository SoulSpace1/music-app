import React from "react";
import { NavLink } from "react-router-dom";

import style from './nav-menu.module.css'

export function NavMenu({ user, onAuthButtonClick }){
    return (
        <div className={style.nav__menu}>
            <ul className={style.menu__list}>
                <li className={style.menu__item}><NavLink to="/"className={style.menu__link}>Главное</NavLink></li>
                <li className={style.menu__item}><NavLink to="/my-playlist" className={style.menu__link}>Мой плейлист</NavLink></li>
                <li className={style.menu__item}><NavLink to="/login" className={style.menu__link}>Войти</NavLink></li>
            </ul>

                <button onClick={onAuthButtonClick}>
                       {user ? "Sign out" : "Sign in"}
                </button>
        </div>
    );
}
