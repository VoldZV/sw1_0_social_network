import React from "react";
import {AppStateType} from "../../state/store-redux";
import {Profile} from "./Profile";
import {addPostActionCreator, changePostActionCreator, ProfilePageType} from "../../state/reducerProfile";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// export const ProfileContainer = (props: ProfileType) => {
//
//     const addPost = () => {
//         const actionPost = addPostActionCreator(props.profilePage.textAriaPostValue)
//         props.dispatch(actionPost)
//     }
//
//     const onChangeTextAria = (posttext: string) => {
//         const action = changePostActionCreator(posttext)
//         props.dispatch(action)
//     }
//
//     return (
//         <Profile
//             profilePage={props.profilePage}
//             addPost={addPost}
//             onChangeTextAria={onChangeTextAria}
//         />
//     )
// }

type mapStateToPropsType = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    onChangeTextAria: (postText: string) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        // textAriaPostValue: state.profilePage.textAriaPostValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            const action = addPostActionCreator(postText)
            dispatch(action)
        },
        onChangeTextAria: (postText: string) => {
            const action = changePostActionCreator(postText)
            dispatch(action)
        }
    }
}


export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)