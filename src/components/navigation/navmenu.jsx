import React from "react";
import { NavLink } from "react-router-dom";

import style from './nav-menu.module.css'

export function NavMenu({ user, onAuthButtonClick }){
    return (
        <div className={style.nav__menu}>
            <ul className={style.menu__list}>

                <NavLink  to="/"
              className={({ isActive }) => {
                  [activeClassName]: isActive,
                })
            }>Главное</NavLink>
                <li className={style.menu__item}><a href="http://" className={style.menu__link}>Главное</a></li>
                <li className={style.menu__item}><a href="http://" className={style.menu__link}>Мой плейлист</a></li>
                <li className={style.menu__item}><a href="http://" className={style.menu__link}>Войти</a></li>
            </ul>

                <button onClick={onAuthButtonClick}>
                       {user ? "Sign out" : "Sign in"}
                </button>
        </div>
    );
}
