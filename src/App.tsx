import React from 'react';
import './App.css';
import {Navbar} from "./component/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Setting";
import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {store} from "./state/store-redux";
import ConnectUsers from "./component/Users/UsersContainer";
import { ProfileCompose } from "./component/Profile/ProfileContainerClass";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login";





export const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar sidebar={store.getState().sideBar}/>
            <div className="app-wrapper-appContent">
                <Route path='/profile/:userId?'
                       render={() => <ProfileCompose/>}
                />
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/users'
                       render={() => <ConnectUsers/>}
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/login' component={Login}/>
                {/*<Dialogs />*/}
                {/*<Profile />*/}
            </div>
        </div>
    );
}


// type MessageType = {
//     message: string
// }
//
// function HelloMessage (props: MessageType) {
//     return (
//         <h2>{props.message}</h2>
//     )
// }
//
// const ByeMessage: React.FC<MessageType> = (props) => {
//     return (
//         <h2>{props.message}</h2>
//     )
// }


export default App;
