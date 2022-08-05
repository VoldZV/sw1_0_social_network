import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from './component/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Setting";
import {DialogItemType} from "./component/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./component/Dialogs/Message/Message";
import {PostType} from "./component/Profile/Posts/Posts";
// import Technologies from "./component/technologies";

type AppPropsType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
    postsData: Array<PostType>
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-appContent">
                    <Route path='/profile' component={()=> <Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs' render={()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                    {/*<Dialogs />*/}
                    {/*<Profile />*/}
                </div>

            </div>
        </BrowserRouter>
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
