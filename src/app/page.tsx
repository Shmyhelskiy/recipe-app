"use client"

import { findAuthUser } from "@/Functions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import RecipeData from './components/RecipeData';

export default function Home() {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(state => state.recipeReducer)
  const Users = useAppSelector(state => state.authorizationReducer)
  const isAuthUser = findAuthUser(Users);
  
  
  return (
    <main className="h-full">
        <h1 className="font-bold text-center mt-5 text-3xl">Welcome to recipe library </h1>
        <div className="flex w-full p-5 gap-2">
          {recipes.map((item) =>{
            return <RecipeData key={item.id} data={item} isAuthUser={isAuthUser}/>
          })}
        </div>
    </main>
  )
}
