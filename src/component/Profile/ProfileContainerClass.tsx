import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../state/store-redux";
import {
    addPost,
    changeStatus, ProfilePageType, ProfileType, setStatus,
    setUserProfile, setUserProfileTH,
} from "../../state/reducerProfile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainerClass extends React.Component<PropsProfType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        // if (!userId) userId = '25871'
        if (!userId && this.props.authorizedId) userId = this.props.authorizedId
        this.props.setUserProfile(userId)
        this.props.setStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }

};


type mapStateToPropsType = {
    profilePage: ProfilePageType
    status: string
    isAuth: boolean
    authorizedId: string | null
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    changePost: (postText: string) => void
    setUserProfile: (uId: string) => void
    setStatus: (id: string) => void
    changeStatus: (status: string) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        authorizedId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

type ParamsType = {
    userId: string
}
type PropsProfType = RouteComponentProps<ParamsType> & ProfilePropsType

// const ProfileContainerClassConnect = connect(mapStateToProps, {
//     addPost,
//     changePost,
//     setUserProfile: setUserProfileTH
// })(ProfileContainerClass)

// export const ProfileWithAuthRedirect = WithAuthRedirect(withRouter(ProfileContainerClassConnect))


export const ProfileCompose = compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost,
        setUserProfile: setUserProfileTH,
        setStatus,
        changeStatus
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainerClass)

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         addPost: (postText: string) => {
//             const action = addPost(postText)
//             dispatch(action)
//         },
//         changePost: (postText: string) => { //changePost
//             const action = changePost(postText)
//             dispatch(action)
//         },
//         setUserProfile: (profile: ProfileType) => {
//             const action = setUserProfile(profile)
//             dispatch(action)
//         },
//
//     }
// }



