import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsDateElement = props.dialogsDate.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messageDateElement = props.messagesDate.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsDateElement}
            </div>

            <div className={classes.message}>
                {messageDateElement}
            </div>


        </div>

    )
}

export default Dialogs;
