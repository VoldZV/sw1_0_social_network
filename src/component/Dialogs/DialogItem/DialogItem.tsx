import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogDataType} from "../../../old-state/state";



export const  DialogItem = (props: DialogDataType) => {

    return (
        <div className={d.dialogs_items_item}>
            <img src={props.avatar} alt="ava"/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={d.active}>{props.name} </NavLink>
        </div>
    )
}