import React from "react";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow,
    UsersPageType,
    UserType
} from "../../state/reducerUsers";
import {AppStateType} from "../../state/store-redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../common/Preloader";


export class UsersContainer extends React.Component<UsersContainerPropsType, UsersPageType> {
    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChange = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
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
                           onPageChange={this.onPageChange}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
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
    toggleIsFetching
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


