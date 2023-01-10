
import React, {useState,useEffect, useRef, Children} from "react"

import style from './menu.module.css'

export const Menu = ({children, title}) => {
    const menuRef = useRef(null)
    const [open, setOpen] = useState(false)
    
    useEffect(()=> {
        document.addEventListener("mousedown", onClickOutSide)

        return () => {
            document.removeEventListener("mousedown", onClickOutSide)
        }
    },[])

    const onClickOutSide = (event) => {
        if(menuRef.current && !menuRef.current.contains(event.target)){
            setOpen(false)
        }
    }

    const onOpen = () => setOpen(true)

    return <div style={{marginRight: 10}}>
        <div className={style.filter__button && style._btn_text} ref={menuRef} onClick={onOpen}>{title}</div>
        
        {open &&<div className={style.menu_container} style={{position:'absolute'}}>
            <div className={style.menu_list}>
            {children}
            </div>
        </div>}
    </div>
}