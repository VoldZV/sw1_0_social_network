import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, DialogDataType, MessageType, PostType, state} from "./state/state";
import {BrowserRouter} from "react-router-dom";
import {rerenderEntireTree} from "./state/render";



rerenderEntireTree(state)

// ReactDOM.render(
//     <BrowserRouter>
//         <App addPost={addPost}
//              addMessage={addMessage}
//              state={state}/>
//     </BrowserRouter>
//     ,
//   document.getElementById('root')
// );






//Dialogs - component
/*let dialogsData: Array<DialogItemType> = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Ilya'},
    {id: '3', name: 'Pasha'},
    {id: '4', name: 'Danil'},
    {id: '5', name: 'Mum'},
    {id: '6', name: 'Dad'},
]

let messagesData: Array<MessageType> = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'I`m good'},
    {id: '3', message: 'Hi man'},
    {id: '4', message: 'How are you'},
    {id: '6', message: 'That`s good'},
    {id: '5', message: 'Very well!'},
]

// Profile (posts) - component

let postsData: Array<PostType> = [
    {id: '1', message: "Hello, I\'m here", likesCount: 103},
    {id: '2', message: 'Oh, very glad to see you', likesCount: 2},
    {id: '3', message: 'Hi, my name is Frank',likesCount: 11},
]*/