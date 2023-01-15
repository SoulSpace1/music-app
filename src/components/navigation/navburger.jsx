import React from "react";

import style from './nav-burger.module.css'

export function NavBurger(props) {
    return (
        <div className={style.nav__burger}>
            <span className={style.burger__line}></span>
            <span className={style.burger__line}></span>
            <span className={style.burger__line}></span>
        </div>
    );
}