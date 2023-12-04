import {auth} from "../auth/firebase"
import React, { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify"
import { useNavigate } from "react-router-dom"


export const AuthContext=createContext()

const AuthContextProvider=({children})=>{
    const navigate=useNavigate()
    const [currentUser, setCurrentUser]=useState()
    useEffect(()=>{
        userFollow()
    },[])
    
    const createUser=async(email,password,displayName)=>{
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toastSuccessNotify("Registered Successfully")
            navigate("/");
            await updateProfile(auth.currentUser, {
                displayName:displayName
            })
        } catch (error) {
            toastErrorNotify(error.message)
        }
        
    }

    const signIn=async(email,password)=>{
       try {
        await signInWithEmailAndPassword(auth, email, password)
        toastSuccessNotify("Logged in successfully")
        navigate("/")
       } catch (error) {
        toastErrorNotify(error.message)
       }
    }

    const signUpGoogle=()=>{
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result)=>{
            toastSuccessNotify("Logged in successfully")
            navigate("/")
        }).catch((error)=>{
            toastErrorNotify(error.message)
        })
    }

    const userFollow=()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const{email,displayName,photoURL}=user
                setCurrentUser({email,displayName,photoURL})
            }else{
                setCurrentUser(false)
            }
        })

    }

    const logOut=()=>{
        signOut(auth)
        toastSuccessNotify("Logged out successfully")
    }
    
    const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };

    const values={createUser,signIn,signUpGoogle,currentUser,logOut,forgotPassword}
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
        )
}
export default AuthContextProvider