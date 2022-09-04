import React from "react";
import {
    ActionType,
    DialogsPageType,
} from "../../state/store-redux";
import {addMessageActionCreator, changeMessageActionCreator} from "../../state/reducerDialogs";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}


export const DialogsContainer = (props: DialogsPropsType) => {

    const addMessageHandler = function () {
        const action = addMessageActionCreator(props.dialogsPage.textAriaMessageValue)
        props.dispatch(action)
    }

    const onChangeTextAriaHandler = function (message: string) {
        const action = changeMessageActionCreator(message)
        props.dispatch(action)
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage}
                 addMessage={addMessageHandler}
                 onChangeTextAria={onChangeTextAriaHandler}
                 textAriaMessageValue={props.dialogsPage.textAriaMessageValue}
        />
    )
}








