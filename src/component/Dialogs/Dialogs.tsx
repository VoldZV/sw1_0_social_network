import React from "react";
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsPropsType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
}



export const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {props.dialogsData.map((dialog,i) => {
                    return <DialogItem key={i} name={dialog.name} id={dialog.id}/>
                })}
            </div>
            <div className={d.dialogs_messages}>
                {props.messagesData.map((message, i) => {
                    return <Message key={i} id={message.id} message={message.message} />
                })}
            </div>
        </div>
    )
}








