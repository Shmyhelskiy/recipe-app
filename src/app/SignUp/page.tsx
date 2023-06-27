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
    const [passwordHintOpen, setPasswordHintOpen] = useState(false);

    
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
                <label className="mb-2 flex items-center">
                    Password
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setPasswordHintOpen(!passwordHintOpen)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </label>
                    <input
                        type="password"
                        value={password}
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                {passwordHintOpen && (
                    <span className="text-gray-500 text-base absolute ml-10 mt-5">Password must be 8 characters long, include letters, numbers and one capital letter  </span>
                )}
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
