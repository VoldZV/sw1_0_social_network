import React from "react";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleDisableUser, toggleIsFetching, unfollow,
    UsersPageType,
    UserType
} from "../../state/reducerUsers";
import {AppStateType} from "../../state/store-redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../api/api";


export class UsersContainer extends React.Component<UsersContainerPropsType, UsersPageType> {
    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
            .catch(err => console.log('In Users DID MOUNT', err))
    }

    onPageChange = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        usersAPI.getUsers(p, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
            .catch(err => console.log('In Users change page', err))

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
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
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
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleDisableUser: (userId: number, isFollowing: boolean) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleDisableUser
})(UsersContainer)

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


