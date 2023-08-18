"use client"

import Link from "next/link";
import Image from 'next/image'
import { FC,  } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { findAuthUser } from "@/Functions";
import { signOut } from "../../../redux/Slices/authSlice";


const Nav:FC = () => {
    const dispatch = useAppDispatch();
    const Users = useAppSelector(state => state.authorizationReducer)
    const isAuth = findAuthUser(Users);

    return (
        <nav className="h-16 bg-orange-600 text-white flex items-center justify-between">
            <div className="flex items-center justify-start md:p-5 w-1/3 h-full">
                <ul className="flex items-center justify-start h-12 pl-2 md:pl-5 md:text-xl text-base">
                    <li className='md:mr-5'>
                        <Link href='/' className="mr-3 hover:text-blue-500 cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link href='/Favorite' className="mr-3 hover:text-blue-500 cursor-pointer">Favorite</Link>
                    </li>
                    <li>
                    <Link href='/Profile' className="ml-3 hover:text-blue-500 cursor-pointer">Profile</Link>
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