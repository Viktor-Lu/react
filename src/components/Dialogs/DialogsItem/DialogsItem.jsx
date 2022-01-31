import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialogs from "../Dialogs";

const DialogsItem = (props) => {
    let path = '/dialogs';
    return (<div>
            <div >
                <NavLink to={path}
                      className={link => link.isActive ? classes.active : classes.dialog}>{props.name} </NavLink>
            </div>

        </div>
    )
}
export default DialogsItem;


