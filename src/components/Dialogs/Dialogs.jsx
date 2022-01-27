import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/'+ props.id;
return (
    <div>
        <NavLink activeClassName={classes.activeLink}  to={path}>{props.name}</NavLink>
    </div>
)
}

const Message =(props)=> {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogsItem name='Andrew' id='1'/>
                <DialogsItem name='Dmitry' id='2'/>
                <DialogsItem name='Sasha' id='3'/>
                <DialogsItem name='Sveta' id='4'/>
                <DialogsItem name='Valera' id='5'/>
                <DialogsItem name='Viktor' id='6'/>

            </div>


            <div className={classes.message}>
                <Message message='Hi'/>
                <Message message='Yo'/>
                <Message message='My name Viktor'/>

            </div>


        </div>

    )
}

export default Dialogs;
