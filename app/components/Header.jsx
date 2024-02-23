"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Logout } from '../store/login/loginSlice';
import { decodeToken } from 'react-jwt';
import Navbar from './Navbar';
import LocaleSwitcher from './LocaleSwitcher';


export const Header = () => {

    const { token } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const [userdata, setUserData] = useState('')

    useEffect(() => {
        if (token) {
            const decodedToken = decodeToken(token)
            if (decodedToken) {
                const { email } = decodedToken
                setUserData(email)
            }
        }
    }, [])

    const logout = () => {
        dispatch(Logout())
    };


    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round"  strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <LocaleSwitcher/>
           <Navbar token={token} logout={logout}/>
            </nav>
        </header>

    )
}
