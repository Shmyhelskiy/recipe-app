"use client"

import Link from "next/link";
import Image from 'next/image'
import { FC, useEffect, useState,  } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { findAuthUser } from "@/Functions";
import { signOut } from "../../../redux/Slices/authSlice";


const Nav:FC = () => {
    const dispatch = useAppDispatch();
    const Users = useAppSelector(state => state.authorizationReducer)
    const isAuth = findAuthUser(Users);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isOpenMenu) {
            timeoutId = setTimeout(() => {
                setIsOpenMenu(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isOpenMenu]);
    return (
        <nav className="h-16 bg-orange-600 text-white flex items-center justify-between">
            <div className="flex items-center justify-start md:p-5 w-1/3 h-full">
                <span className="ml-5 md:hidden" onClick={() => {setIsOpenMenu(!isOpenMenu)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-8 h-8  ${isOpenMenu ? `stroke-blue-500` : null}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
                <ul className={`md:flex md:items-center  md:z-auto md:static absolute bg-orange-600 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0  transition-all ease-in duration-500  ${!isOpenMenu ? `top-[-400px]`: `top-[60px] opacity-100 z-20`}`}>
                    <li className='md:mr-5'>
                        <Link href='/' className="md:mr-3 hover:text-blue-500 cursor-pointer">HOME</Link>
                    </li>
                    <li>
                        <Link href='/Favorite' className="md:mr-3 hover:text-blue-500 cursor-pointer">FAVORITE</Link>
                    </li>
                    <li>
                    <Link href='/Profile' className="md:ml-3 hover:text-blue-500 cursor-pointer">PROFILE</Link>
                    </li>
                </ul>
            </div>
            {!isAuth ?   
                <div className="flex justify-end w-1/3 pr-10">
                <Link href="/SignIn" className="mr-5 hover:text-blue-300 hover:scale-110">
                    SingIn
                </Link>
                <Link href="/SignUp" className=" hover:text-blue-300 hover:scale-110">
                    SingUp
                </Link>
            </div> 
            : 
            <div className="flex justify-end w-1/3 pr-5 md:pr-10">
                <Image  className="hover:cursor-pointer"
                src="/exit.png"
                width={35}
                height={35}
                alt="Exit"
                onClick={() =>dispatch(signOut(isAuth.email))}
            />
            </div>

            }
        </nav>
    );
};

export default Nav;