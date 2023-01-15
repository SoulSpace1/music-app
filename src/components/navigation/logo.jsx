import React from 'react';

import style from './logo.module.css'

export function NavLogo(props) {
    return (
        <div className={style.nav__logo}>
            <img className={style.logo__image} src="/logo.png" alt="logo"></img>
        </div>
    );
}