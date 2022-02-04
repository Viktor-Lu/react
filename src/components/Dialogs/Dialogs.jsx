import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsDateElement = props.state.dialogsDate.map(d => <DialogsItem name={d.name} id={d.id} ava={d.ava}/>);

    let messageDateElement = props.state.messagesDate.map(m => <Message message={m.message} />);

let newPostElement=React.createRef();
let addPostText=()=>{
    let text=newPostElement.current.value;
    alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsDateElement}

            </div>
            <div className={classes.message}>
                {messageDateElement}
                <textarea ref={newPostElement}></textarea>
                <br/>
                <button onClick={addPostText}>ADD</button>
            </div>
        </div>
    )
}

export default Dialogs;
