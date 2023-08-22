'use client'
import Link from "next/link";
import { useAppSelector } from "../../../redux/hooks";
import { findAuthUser } from "@/Functions";
import RecipeData from "../components/RecipeData";
import Unauthorized from "../components/Unauthorized";


const Favorite = () => {
    const Users = useAppSelector(state => state.authorizationReducer)
    const isAuthUser = findAuthUser(Users);
    
    return (
        <main>
            {!isAuthUser ? 
            <Unauthorized />
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