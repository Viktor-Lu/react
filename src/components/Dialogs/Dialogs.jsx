import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsDate = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'}
    ]
    let dialogsDateElement=dialogsDate.map(d=><DialogsItem name={d.name} id={d.id}/>);
    let messagesDate = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'My name Viktor'}
    ]
    let messageDateElement=messagesDate.map (m=><Message message={m.message}/>);

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
