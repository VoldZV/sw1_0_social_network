import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './User.module.css'
import axios from "axios";
import {UsersPageType} from "../../state/reducerUsers";

export class Users extends React.Component<UsersPropsType, UsersPageType> {
    constructor (props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response.data)
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        return (
            <div className={style.usersPage}>
                <div>
                    <button onClick={()=>{}}>
                        SHOW USERS
                    </button>
                </div>
                <div>
                    {this.props.usersPage.users.map(u => {
                        return (
                            <div className={style.user} key={u.id}>
                                <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : 'https://media.istockphoto.com/vectors/beared-samurai-logo-black-and-white-vector-id1289877090?s=612x612' } alt="photo"/>
                                {u.name} with ID: {u.id}
                                <div>
                                    {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>follow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>unfollow</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

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
