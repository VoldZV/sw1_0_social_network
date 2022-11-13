import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../state/store-redux";
import {
    addPost,
    changePost, ProfilePageType, ProfileType,
    setUserProfile, setUserProfileTH,
} from "../../state/reducerProfile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainerClass extends React.Component<PropsProfType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }

};


type mapStateToPropsType = {
    profilePage: ProfilePageType
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    changePost: (postText: string) => void
    setUserProfile: (uId: string) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        // isAuth: state.auth.isAuth
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
        changePost,
        setUserProfile: setUserProfileTH
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



