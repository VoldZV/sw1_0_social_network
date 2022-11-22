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
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";


export const Dialogs = (props: DialogsPropsType) => {

    const addMessageHandler = (formData: DialogsFormType) => {
        if (formData.dialogsMessage.trim()) props.addMessage(formData.dialogsMessage)
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
                <ReduxDialogsForm onSubmit={addMessageHandler}/>
            </div>
        </div>
    )
}

type DialogsFormType = {
    dialogsMessage: string
}

const DialogsForm = (props: InjectedFormProps<DialogsFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'dialogsMessage'} component={'textarea'}/>
            <div>
                <button className={CrPost.buttons}>send</button>
            </div>
        </form>
    )
}

const ReduxDialogsForm = reduxForm<DialogsFormType>({form: 'reduxDialogsForm'})(DialogsForm)




