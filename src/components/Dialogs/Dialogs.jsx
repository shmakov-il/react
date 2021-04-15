import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    const dialogElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    const messageElement = props.messages.map( m => <MessageItem message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                { dialogElement }
            </div>
            <div className={s.messages}>
                { messageElement }
                <textarea onChange={props.onMessageChange}
                          value={props.newMessageText}/>
                <div>
                    <button onClick={props.onAddNewMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;