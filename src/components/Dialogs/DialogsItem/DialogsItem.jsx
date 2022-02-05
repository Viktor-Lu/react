import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let pathAva=props.ava;
    console.log(pathAva);
    let path = '/dialogs';
    return (<div className={classes.dialogsItems}>
            <div>
                <NavLink to={path}>{props.name} </NavLink>
            </div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg' alt='error'></img>

        </div>
    )
}
export default DialogsItem;


