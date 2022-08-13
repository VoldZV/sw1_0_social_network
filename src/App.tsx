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
import {stateType} from "./state/state";
// import Technologies from "./component/technologies";


type AppPropsType = {
    state: stateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
}


export const App = (props: AppPropsType) => {
    console.log('Render APP')
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.state.sideBar}/>
            <div className="app-wrapper-appContent">
                <Route path='/profile'
                       render={() => <Profile
                           addPost={props.addPost}
                           profilePage={props.state.profilePage}
                       />}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           addMessage={props.addMessage}
                           dialogsPage={props.state.dialogsPage}
                       />}/>
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
