import React from "react";
import {
    follow, followUser, getUsers, setCurrentPage, toggleDisableUser, unfollow, unfollowUser,
    UsersPageType,
} from "../../state/reducerUsers";
import {AppStateType} from "../../state/store-redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";


export class UsersContainer extends React.Component<UsersContainerPropsType, UsersPageType> {
    constructor(props: UsersContainerPropsType) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize)
    }
    onPageChange = (p: number) => {
        this.props.getUsers(p,this.props.usersPage.pageSize)
    }

    render = () => {
        return (
            <>
                {this.props.usersPage.isFetching
                    ?
                    <Preloader/>
                    :
                    <Users users={this.props.usersPage.users}
                           totalCount={this.props.usersPage.totalCount}
                           pageSize={this.props.usersPage.pageSize}
                           currentPage={this.props.usersPage.currentPage}
                           disabledUsers={this.props.usersPage.disabledUsers}
                           follow={this.props.followUser}
                           unfollow={this.props.unfollowUser}
                           toggleDisableUser={this.props.toggleDisableUser}
                           onPageChange={this.onPageChange}
                    />
                }
            </>
        )
    }

}


type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    setCurrentPage: (newCurrentPage: number) => void
    toggleDisableUser: (userId: number, isFollowing: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollowUser: (userId: number) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleDisableUser,
    getUsers,
    unfollowUser,
    followUser
})(UsersContainer)


// mapDispatchToProps полный синтаксис (кол-во ф-ций может отличаться от текущего)
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (newCurrentPage: number) => {
//             dispatch(setCurrentPageAC(newCurrentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleFethingAC(isFetching))
//         },
//     }
// }


