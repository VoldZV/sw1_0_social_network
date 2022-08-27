import d from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../state/state";

export const  Message = (props: MessageType) => {
    return (
        <div className={d.dialogs_messages_message}>
            {props.message}
        </div>

    )
}