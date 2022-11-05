import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../state/store-redux";
import {Dispatch} from "redux";
import {
    addPostActionCreator,
    changePostActionCreator, ProfilePageType,
    ProfileType,
    setUserProfileActionCreator
} from "../../state/reducerProfile";
import {connect} from "react-redux";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainerClass extends React.Component<PropsProfType, ProfilePageType> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data)
        })
            .catch(err => console.log(`In Profile did mount ${userId}`, err))
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }

};


type mapStateToPropsType = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    onChangeTextAria: (postText: string) => void
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {


    return {
        addPost: (postText: string) => {
            const action = addPostActionCreator(postText)
            dispatch(action)
        },
        onChangeTextAria: (postText: string) => {
            const action = changePostActionCreator(postText)
            dispatch(action)
        },
        setUserProfile: (profile: ProfileType) => {
            const action = setUserProfileActionCreator(profile)
            dispatch(action)
        },

    }
}

type ParamsType = {
    userId: string
}
type PropsProfType = RouteComponentProps<ParamsType> & ProfilePropsType

const ProfileContainerClassConnect = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)

export const ProfileWithRouter = withRouter(ProfileContainerClassConnect)



