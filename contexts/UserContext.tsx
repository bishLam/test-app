import { StyleSheet, Text, View } from 'react-native'
import React, { ContextType, createContext, useContext, useEffect, useState } from 'react'
import { account } from '../lib/appwrite';
import { ID, Models } from 'react-native-appwrite';
import {toast} from '../lib/toast'


const UserContext = createContext<any>(null);

export function useUser() {
    return useContext(UserContext)
}

export const UserProvider: any = (props: any) => {
    const [user, setUser] = useState(null);

    const login = async (email: string, password: string) => {
        const loggedIn:any = await account.createEmailPasswordSession(email, password);
        setUser(loggedIn)
        console.log("Logged in" + loggedIn)
        toast('Successfully logged in')
        
    }

    const logout = async () => {
        await account.deleteSession("current")
        setUser(null)
        console.log("Logged out successfully")
        toast('Logged out successfully')
    }

    const register = async (email: string, password: string) => {
        const userAccount = await account.create(ID.unique(), email, password)
        await login(email, password)
        console.log("User registered" + userAccount)
        toast('User Registered Successfully')
    }

    //this will return the details about the current user
    const init = async () => {
        try {
            const loggedIn:any = await account.get();
            setUser(loggedIn)
        }
        catch (error) {
            setUser(null);
            console.log("No user found")
        }
    }
    
    useEffect(()=> {
        init()
    }, [])


    return (
        <UserContext.Provider value={{ current: user, login, logout, register }}>
            {props.children}
        </UserContext.Provider>
    )
}
