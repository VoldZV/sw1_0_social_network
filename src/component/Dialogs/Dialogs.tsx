import React, {ChangeEvent, RefObject} from "react";
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogDataType,
    dialogsPageType,
    MessageType,
} from "../../state";
import CrPost from "../Profile/Posts/CreatePost/CreatePost.module.css";


type DialogsPropsType = {
    dialogsPage: dialogsPageType
    addMessage: (messageText: string) => void
    setTextMessageValue: (messageText: string) => void
    textAriaMessageValue: string
}


export const Dialogs = (props: DialogsPropsType) => {

    const addRefMessage: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessageHandler = () => {
        props.addMessage(props.textAriaMessageValue)
    }

    const onChangeTextAriaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setTextMessageValue(e.currentTarget.value)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {props.dialogsPage.dialogsData.map((dialog, i) => {
                    return <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
                })}
            </div>
            <div className={d.dialogs_messages}>
                {props.dialogsPage.messagesData.map((message, i) => {
                    return <Message key={i} id={message.id} message={message.message}/>
                })}
                <div>
                    <textarea onChange={onChangeTextAriaHandler} value={props.textAriaMessageValue} ref={addRefMessage}/>
                    <div>
                        <button onClick={addMessageHandler} className={CrPost.buttons}>send</button>
                        <button className={CrPost.buttons}>clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}








