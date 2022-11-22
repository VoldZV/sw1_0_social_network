import React from "react";
import {
    ActionType, AppStateType,
    DialogsPageType, StateType, store,
} from "../../state/store-redux";
import {addMessageActionCreator} from "../../state/reducerDialogs";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    // textAriaMessageValue: string
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    addMessage: (textMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        addMessage: (textMessage: string) => {
            const action = addMessageActionCreator(textMessage)
            dispatch(action)
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)






