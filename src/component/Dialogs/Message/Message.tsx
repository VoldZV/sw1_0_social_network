import d from "../Dialogs.module.css";
import React from "react";

export type MessageType = {
    message: string
    id: string
}

export const  Message = (props: MessageType) => {

    return (
        <div className={d.dialogs_messages_message}>
            {props.message}
        </div>

    )
}