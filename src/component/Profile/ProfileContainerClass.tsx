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
    }
}

type ParamsType = {
    userId: string
}
type PropsProfType = RouteComponentProps<ParamsType> & ProfilePropsType

const ProfileContainerClassConnect = connect(mapStateToProps, {
    addPost,
    changePost,
    setUserProfile: setUserProfileTH
})(ProfileContainerClass)

export const ProfileWithRouter = withRouter(ProfileContainerClassConnect)


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



