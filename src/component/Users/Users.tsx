import React from "react";
import style from './User.module.css'
import {UserType} from "../../state/reducerUsers";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    disabledUsers: Array<number>
    onPageChange: (pNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleDisableUser: (userId: number, isFollowing: boolean) => void
}


export const Users = (props: UsersPropsType) => {

    const pages = Math.ceil(props.totalCount / props.pageSize)
    const step = 10
    const start = 1 + step * (Math.ceil(props.currentPage / step) - 1)
    const end = start + step - 1
    const pageNumbers: Array<number> = []
    for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
    }

    const changePagesListUp = () => {
        const newPageNumber = pageNumbers[pageNumbers.length - 1] + 1
        if (newPageNumber <= pages) {
            props.onPageChange(newPageNumber)
        }
    }

    const changePagesListDown = () => {
        const newPageNumber = pageNumbers[0] - 1
        if (newPageNumber > 0) {
            props.onPageChange(newPageNumber)
        }
    }

    return (

        <div className={style.usersPage}>
            <div>
                <span onClick={changePagesListDown}>prev</span>
                {pageNumbers.map(p => {
                    return (
                        <button className={props.currentPage === p ? style.currentPage : ''}
                                onClick={() => props.onPageChange(p)}
                                key={p}
                        >{p}</button>
                    )
                })}
                <span onClick={changePagesListUp}>next</span>
            </div>
            <div>
                {props.users.map(u => {
                    return (
                        <div className={style.user} key={u.id}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={style.userPhoto}
                                     src={u.photos.small != null ? u.photos.small : 'https://media.istockphoto.com/vectors/beared-samurai-logo-black-and-white-vector-id1289877090?s=612x612'}
                                     alt="photo"/>
                            </NavLink>
                            {u.name} with ID: {u.id}
                            <div>
                                {u.followed ?
                                    <button disabled={props.disabledUsers.some(id => id === u.id)} onClick={() => {
                                        console.log('click')
                                        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        //     {
                                        //         withCredentials: true,
                                        //         headers: {
                                        //             'API-KEY': '9a4825e2-08d3-45d5-9581-2297f88ccdf2'
                                        //         }
                                        //     }
                                        // )
                                        props.toggleDisableUser(u.id, true)
                                        usersAPI.unfollowUser(u.id).then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleDisableUser(u.id, false)

                                        })
                                            .catch(err => console.log('Try unfollowUser', err))

                                    }}>unfollow</button>
                                    :
                                    <button disabled={props.disabledUsers.some(id => id === u.id)} onClick={() => {
                                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        //     {
                                        //         withCredentials: true,
                                        //         headers: {
                                        //             'API-KEY': '9a4825e2-08d3-45d5-9581-2297f88ccdf2'
                                        //         }
                                        //     }
                                        // )
                                        console.log('click')
                                        props.toggleDisableUser(u.id, true)

                                        usersAPI.followUser(u.id).then(data => {
                                            props.toggleDisableUser(u.id, true)
                                            if (data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleDisableUser(u.id, false)

                                        })
                                            .catch(err => console.log('Try followUser', err))
                                    }}>follow</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


// export const Users = (props: UsersPropsType) => {
//
//     const getUsers = () => {
//         if (props.usersPage.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 console.log(response.data)
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     return (
//         <div className={style.usersPage}>
//             <div>
//                 <button onClick={getUsers}>
//                     SHOW USERS
//                 </button>
//             </div>
//             <div>
//                 {props.usersPage.users.map(u => {
//                     return (
//                         <div className={style.user} key={u.id}>
//                             <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : 'https://media.istockphoto.com/vectors/beared-samurai-logo-black-and-white-vector-id1289877090?s=612x612' } alt="photo"/>
//                              {u.name} with ID: {u.id}
//                             <div>
//                                 {u.followed ? <button onClick={() => props.unfollow(u.id)}>follow</button>
//                                     : <button onClick={() => props.follow(u.id)}>unfollow</button>}
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
