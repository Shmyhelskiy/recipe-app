'use client'
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";


const Favorite = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.authorizationReducer.email)
    const state = useAppSelector(state => state.authorizationReducer)
    console.log(state);
    
    return (
        <main>
            {!isAuth ? 
            <div className="h-screen flex justify-center items-center">
                <h1 className="font-bold text-3xl text-black/75">Sorry, you are not registered 
                <Link 
                href='/SignIn'
                className="text-sky-500/50 hover:text-sky-500 hover:underline-offset-1 "> sign in...</Link>
                </h1>
            </div>   
        : <h1>Hell0</h1>
        }
        </main>
    );
};

export default Favorite;