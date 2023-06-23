"use client"

import Link from 'next/link';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {signUp} from "../../../redux/Slices/authSlice"
import { regName, regEmail, regPassword } from "../../RegExp";
import { useRouter } from 'next/navigation';

const SignUp:FC = () => {
    const Users = useAppSelector((state) => state.authorizationReducer);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value.toString());

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.toString());

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.toString());

const checkData = (name:string, email:string, password:string) => {
    
    const isRegistr = Users.find((item: UserType)  => item.email === email)
    
    if (isRegistr) 
    return alert('This email already register')

    if (name.match(regName) && email.match(regEmail) && password.match(regPassword) ) 
    return true
    
    if (!name.match(regName) || !email.match(regEmail) || !password.match(regPassword)) 
    return alert('Some data is wrong')
}

const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkData(name, email, password)
    if ( checkData(name, email, password)) {
        dispatch(signUp({name, email, password}));
        router.push('/SignIn')
        setName('')
        setEmail('');
        setPassword('');
    }  
};

return (
    <div className="flex justify-center items-center h-full mt-[15%]">
        <form onSubmit={handleSignUp} className="p-6 bg-gray-100 rounded shadow-md">
            <h2 className="text-xl mb-4">Sign Up</h2>
            <div className="mb-4">
            <label className="block mb-2">
                Name
            </label>
            <input
                type="text"
                value={name}
                placeholder='Your Name'
                onChange={handleNameChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <div className="mb-4">
            <label className="block mb-2">
                Email
            </label>
            <input
                type="email"
                placeholder='Email'
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
                placeholder='Password'
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
            Sign Up
            </button>
            <p>
                Already have an account?
                <Link href="/SignIn" className='text-blue-400 hover:text-blue-500 ml-2'> 
                SingIn
                </Link>
            </p>
        </form>
    </div>
    );
};

export default SignUp;
