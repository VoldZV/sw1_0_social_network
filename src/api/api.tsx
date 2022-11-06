import React from "react";
import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9a4825e2-08d3-45d5-9581-2297f88ccdf2'
    }
})


export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(data => data.data)
    },

    unfollowUser (userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(data => data.data)
    },

    followUser (userId: number) {
        return instance.post(`follow/${userId}`)
            .then(data => data.data)
    },

    setUserProfile (userId: string) { // для запроса отображения фото юзера в компоненте Profile
        return instance.get(`profile/${userId}`)
            .then(data => data.data)
    },

}

export const authAPI = {
    authUser () {
        return instance.get(`auth/me/`)
    }

}

