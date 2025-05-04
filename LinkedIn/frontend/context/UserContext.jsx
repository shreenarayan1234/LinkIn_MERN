import React, { createContext, useContext, useEffect, useState } from 'react'
import {authDataContext} from './AuthContext';
import axios from 'axios';

export const userDataContext = createContext();

const UserContext = ({children}) => {
    let [userData, setUserData] = useState(null);
    let {serverUrl} = useContext(authDataContext);
    let [edit, setEdit] = useState(false);

    const getCurrentUser = async () =>{
        try {
            let result = await axios.get(serverUrl+"/api/user/currentuser",{withCredentials:true});
            setUserData(result.data.user)
            
        } catch (error) {
            console.log(error);
            setUserData(null);
        }
    }
    useEffect(()=>{
        getCurrentUser();
    },[]); 

    const value  = {
        userData, setUserData, edit, setEdit
    }
  return (
        <userDataContext.Provider value={value}>
        {children}
        </userDataContext.Provider>
  )
}

export default UserContext