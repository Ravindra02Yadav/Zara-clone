import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import * as types from "../Redux/Auth/actionTypes";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const firebaseConfig = {
        apiKey: "AIzaSyDCHvdgABXgjtj6C3-55D2colSpVF05NTI",
        authDomain: "zara-project-adec4.firebaseapp.com",
        projectId: "zara-project-adec4",
        storageBucket: "zara-project-adec4.appspot.com",
        messagingSenderId: "1083442232261",
        appId: "1:1083442232261:web:24d99e9bc4f6e92e49e9ac",
        measurementId: "G-JLT9HVM9BX"
    };
    const app = initializeApp(firebaseConfig);
    const handleSignout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch({ type: types.GET_SIGNOUT_SUCCESS })
            navigate('/');
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <p onClick={handleSignout}>LOGOUT</p>
    )
}

export default Signout