import React, {ChangeEvent, RefObject} from "react";
import d from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsPageType
} from "../../state/store-redux";
import CrPost from "../Profile/Posts/CreatePost/CreatePost.module.css";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";





export const Dialogs = (props: DialogsPropsType) => {

    // if(!props.isAuth) return <Redirect to={'/login'}/>

    const addRefMessage: RefObject<HTMLTextAreaElement> = React.createRef()

    const onChangeTextAriaHandler = function (e: ChangeEvent<HTMLTextAreaElement>) {
        props.onChangeTextAria(e.currentTarget.value)
    }

    const addMessageHandler = () => {
        if (props.textAriaMessageValue.trim()) props.addMessage(props.textAriaMessageValue)
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
                    <textarea onChange={onChangeTextAriaHandler} value={props.textAriaMessageValue}
                              ref={addRefMessage}/>
                    <div>
                        <button onClick={addMessageHandler} className={CrPost.buttons}>send</button>
                        <button className={CrPost.buttons}>clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}








