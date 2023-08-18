'use client'
import Link from "next/link";
import { useAppSelector } from "../../../redux/hooks";
import { findAuthUser } from "@/Functions";
import RecipeData from "../components/RecipeData";


const Favorite = () => {
    const Users = useAppSelector(state => state.authorizationReducer)
    const isAuthUser = findAuthUser(Users);
    
    return (
        <main>
            {!isAuthUser ? 
            <div className="h-full flex justify-center items-center text-base sm:text-3xl">
                <h1 className="font-bold  text-black/75 mt-[20%]">Sorry, you are not authorized  
                <Link 
                href='/SignIn'
                className="text-sky-500/50 hover:text-sky-500"> sign in...</Link>
                </h1>
            </div>   
        : 
        <div className="flex w-full p-5 gap-2 flex-col sm:flex-row">
            {
                isAuthUser?.favorite?.length === 0 ? 
                <Link href='/'  className="font-bold text-2xl text-center w-full text-black/70 hover:text-black">If you don't have a favorite recipe, add one...</Link>
                : null
            }
            {isAuthUser?.favorite && isAuthUser.favorite.map((item) =>{
                return <RecipeData key={item.id} data={item} isAuthUser={isAuthUser}/>
            })}
        </div>
        }
        </main>
    );
};

export default Favorite;