"use client"

import Link from 'next/link';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {signIn} from "../../../redux/Slices/authSlice";
import { useRouter } from 'next/navigation';

const SignIn:FC = () => {
const Users = useAppSelector(state => state.authorizationReducer)
const dispatch = useAppDispatch();
const router = useRouter();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
};

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
};


const findUser = (email:string, pass:string) => {
    const User = Users.find(item => item.email === email);
    if (User?.password === pass) return true
    return false
}

const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (findUser(email, password)) {
        dispatch(signIn(email));
        router.push('/')
    } else alert(`Something worng`)
    setEmail('');
    setPassword('');
};

return (
    <div className="flex justify-center items-center h-full mt-[15%]">
        <form onSubmit={handleSignIn} className="p-6 bg-gray-100 rounded shadow-md">
            <h2 className="text-xl mb-4">Sign In</h2>
            <div className="mb-4">
            <label className="block mb-2">
                Email
            </label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <div className="mb-4">
            <label className="block mb-2">
                Password
            </label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mb-2 px-4 rounded hover:bg-blue-600"
            >
            Sign In
            </button>
            <p>
                Not registered yet?
                <Link href="/SignUp" className='text-blue-400 hover:text-blue-500 ml-2'> 
                    SingUp
                </Link>
            </p>
        </form>
        </div>
    );
};

export default SignIn;

