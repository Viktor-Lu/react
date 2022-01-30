import React from 'react';
import classes from './../Dialogs.module.css';
import {Link} from "react-router-dom";


const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <Link activeClassName={classes.activeLink} to={path}>{props.name}</Link>
        </div>
    )
}
export default DialogsItem;


