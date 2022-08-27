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
import {StateType, StoreType} from "./state/state";


type AppPropsType = {
    store: StoreType
    state: StateType
}


export const App = (props: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.state.sideBar}/>
            <div className="app-wrapper-appContent">
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dispatch={props.store.dispatch.bind(props.store)}
                           dialogsPage={props.state.dialogsPage}
                           textAriaMessageValue={props.state.dialogsPage.textAriaMessageValue}
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
