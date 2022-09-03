import React from 'react';
import {ActionType} from "./store-redux";

type SideBarType = {
    friends: []
}

const initialSideBarState: SideBarType = {friends: []}

export const reducerSideBar = (state:SideBarType= initialSideBarState, action: ActionType) : SideBarType => {
    return state
};

