"use client"

import { findAuthUser } from "@/Functions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import RecipeData from './components/RecipeData';
import { fetchRecipes } from "../../FunctionsRecipe";
import { fetchRecipe, cleanRecipe } from "../../redux/Slices/recipeSlice";
import { useState } from "react";


export default function Home() {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(state => state.recipeReducer)
  const Users = useAppSelector(state => state.authorizationReducer)
  const isAuthUser = findAuthUser(Users);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchRecipes(query);      
      dispatch(fetchRecipe(data.results))
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleClean = () =>{
    dispatch(cleanRecipe())
  }

  return (
    <main className="h-full">
        <h1 className="font-bold text-center mt-5 text-2xl md:text-3xl">Welcome to recipe library </h1>
        <div className="w-full flex justify-center items-center flex-col md:flex-row">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Write the ingredient" className="p-1 w-46 text-center md:text-start"/>
          <button onClick={handleSearch} className="m-2 w-32 border-2 rounded-lg p-1 hover:bg-blue-500">Search</button>
          <button onClick={handleClean}className="m-2 w-32 border-2 rounded-lg p-1 hover:bg-blue-500">Clear request </button>
        </div>
        <div className="flex w-full p-5 gap-5 flex-wrap justify-center font-bold text-lg">
          {
            recipes.length === 0 ? 
            <i className="m-1 text-center w-full">Find your favorite recipes</i> 
            :
            recipes.map((item) =>{
              return <RecipeData key={item.id} data={item} isAuthUser={isAuthUser}/>
            })
          }
        </div>
    </main>
  )
}
