import React from "react";
import {
    ActionType, AppStateType,
    DialogsPageType, StateType, store,
} from "../../state/store-redux";
import {addMessageActionCreator, changeMessageActionCreator} from "../../state/reducerDialogs";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";





// export const DialogsContainer = (props: DialogsPropsType) => {
//
//     const addMessageHandler = function () {
//         const action = addMessageActionCreator(props.dialogsPage.textAriaMessageValue)
//         props.dispatch(action)
//     }
//
//     const onChangeTextAriaHandler = function (message: string) {
//         const action = changeMessageActionCreator(message)
//         props.dispatch(action)
//     }
//
//     return (
//         <Dialogs dialogsPage={props.dialogsPage}
//                  addMessage={addMessageHandler}
//                  onChangeTextAria={onChangeTextAriaHandler}
//                  textAriaMessageValue={props.dialogsPage.textAriaMessageValue}
//         />
//     )
// }

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    textAriaMessageValue: string
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: (textMessage: string) => void
    onChangeTextAria: (message: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        textAriaMessageValue: state.dialogsPage.textAriaMessageValue,
        // isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        addMessage: (textMessage: string) => {
            const action = addMessageActionCreator(textMessage)
            dispatch(action)
        },
        onChangeTextAria: (message: string) => {
            const action = changeMessageActionCreator(message)
            dispatch(action)
        }
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)






