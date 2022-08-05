import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType = {
    name: string
    id: string
}

export const  DialogItem = (props: DialogItemType) => {

    return (
        <div className={d.dialogs_items_item + ' ' + d.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}