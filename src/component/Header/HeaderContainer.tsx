import React, {ReactNode} from 'react';
import {Header} from "./Header";
import {initialAuthStateType, logOut, setAuthUserData, setLogAva} from "../../state/authReducer";
import axios from "axios";
import {AppStateType} from "../../state/store-redux";
import {connect} from "react-redux";
import {log} from "util";

class HeaderContainer extends React.Component<HeaderPropsType, initialAuthStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                    return id
                }
            })
            .then(id => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                    .then(response => {
                    this.props.setLogAva(response.data.photos.small)
                })
                    .catch(err => console.log('Header, set ava of auth account', err))
            })
            .catch(err => console.log('In header', err))

    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
};

type mapStateToPropsType = {
    auth: initialAuthStateType
}
type mapDispatchToPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
    setLogAva: (avaString: string) => void
    logOut: () => void
}

export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, {setAuthUserData, setLogAva, logOut})(HeaderContainer)

