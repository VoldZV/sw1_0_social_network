import React from 'react';
import './App.css';
import {Header} from "./component/Header";
import {Navbar} from "./component/Navbar";
import {Profile} from "./component/Profile";
// import {BrowserRouter, Route} from "react-router-dom";
// import Technologies from "./component/technologies";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
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
