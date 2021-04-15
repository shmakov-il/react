import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const state = props.store.getState();

    const onAddNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (event) => {
        const text = event.target.value;
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <Dialogs onMessageChange={onMessageChange}
                 onAddNewMessage={onAddNewMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
        />
    )
}

export default DialogsContainer;