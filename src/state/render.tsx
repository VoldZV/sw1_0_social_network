import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {addMessage, addPost, stateType} from "./state";
import React from "react";


export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter><App addPost = {addPost} addMessage = {addMessage} state = {state}/></BrowserRouter>,
        document.getElementById('root'));
}