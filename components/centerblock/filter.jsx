import React from "react";
import { Menu } from "../menu/menu";
import { MenuItem } from "../menu/menu-item";

import style from './filter.module.css'

export function Filter(props){
   

    return (
        <div className={style.centerblock__filter}>
            <div className={style.filter__title}>Искать по:</div>
            <Menu title={'исполнителю'}>
                      <MenuItem title={'cnj-nj'}/>
                      <MenuItem title={'cnj-nj'}/>  
                      <MenuItem title={'cnj-nj'}/>              
                    </Menu>
            <Menu title={'году выпуска'}>
                      <MenuItem />
                      <MenuItem />  
                      <MenuItem />              
                    </Menu>
            <Menu title={'жанру'}>
                      <MenuItem />
                      <MenuItem />  
                      <MenuItem />              
                    </Menu>
        </div>
    );
}