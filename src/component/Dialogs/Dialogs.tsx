import React from "react";
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}



export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Ilya' id='2'/>
                <DialogItem name='Pasha' id='3'/>
                <DialogItem name='Danil' id='4'/>
                <DialogItem name='Mum' id='5'/>
                <DialogItem name='Dad' id='6'/>
            </div>
            <div className={d.dialogs_messages}>
                <Message message='Hello'/>
                <Message message='I`m good'/>
                <Message message='Hi man'/>
                <Message message='How are you?'/>
                <Message message='That`s good'/>
                <Message message='Very well!'/>

            </div>
        </div>
    )
}

const  DialogItem = (props: DialogItemType) => {

    return (
        <div className={d.dialogs_items_item + ' ' + d.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


type MessageType = {
    message: string
}

const  Message = (props: MessageType) => {

    return (
        <div className={d.dialogs_messages_message}>
            {props.message}
        </div>

    )
}