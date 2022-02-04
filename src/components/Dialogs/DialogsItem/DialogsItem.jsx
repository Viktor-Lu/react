import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let pathAva=props.ava;
    console.log(pathAva);
    let path = '/dialogs';
    return (<div>
            <div >
                <NavLink to={path}
                      className={link => link.isActive ? classes.active : classes.dialog}>{props.name} </NavLink>
            </div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg' alt='error'></img>

        </div>
    )
}
export default DialogsItem;


