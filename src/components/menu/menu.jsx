
import React, {useState,useEffect, useRef, Children} from "react"

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
        <div className="filter__button _btn-text" ref={menuRef} onClick={onOpen}>{title}</div>
        
        {open &&<div class="menu-container" style={{position:'absolute'}}>
            <div class="menu-list">
            {children}
            </div>
        </div>}
    </div>
}