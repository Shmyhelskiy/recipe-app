'use client'
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { findAuthUser } from "@/Functions";
import { useState } from "react";
import Link from "next/link";
import { fetchRecipeDataById } from "../../../redux/Slices/recipeSlice";

const page = () => {
    const dispatch = useAppDispatch();
    const Users = useAppSelector(state => state.authorizationReducer)
    const isAuth = findAuthUser(Users);

    const [isOpenFavorite, setIsOpenFavorite] = useState(false);
    return (
        <main className="h-[80vh] flex justify-center items-center">
            <section className="w-1/3 md:h-1/2 shadow-lg flex flex-col md:flex-row text-xs h-full pl-5">
                <div className="flex w-1/2 flex-col items-center">
                    <Image 
                    src='/User.png'
                    width={200}
                    height={200}
                    alt="User"
                    />
                    <h2>
                        User name:  <span className="font-bold"> {isAuth?.name}</span>
                    </h2>
                </div>
                <div className="w-1/2 pt-5">
                    <p onClick={()=> {setIsOpenFavorite(!isOpenFavorite)}} className="font-bold cursor-pointer hover:text-sky-500">{`Faivorite (${isAuth?.favorite?.length}):`}</p>
                    {isOpenFavorite && 
                    <ol className="list-decimal">
                        {isAuth?.favorite?.map(item => <li>
                            <Link href={`${item.id}`} className="hover:text-sky-500/70" onClick={()=>{dispatch(fetchRecipeDataById(item.id))}}> {item.title}</Link>
                        </li>)}
                    </ol>
                    }
                </div>
            </section>
        </main>
    );
};

export default page;