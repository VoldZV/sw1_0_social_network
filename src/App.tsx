import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from './component/Dialogs/Dialogs'
import {Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Setting";
import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {ProfileContainer} from "./component/Profile/ProfileContainer";
import {store} from "./state/store-redux";
import {Users} from "./component/Users/Users";
import {UsersContainer} from "./component/Users/UsersContainer";
import ConnectUsers from "./component/Users/UsersContainer";
import {
    ProfileWithRouter
} from "./component/Profile/ProfileContainerClass";





export const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={store.getState().sideBar}/>
            <div className="app-wrapper-appContent">
                <Route path='/profile/:userId?'
                       render={() => <ProfileWithRouter/>}
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
