"use client"

import { findAuthUser, findRecipeById } from "@/Functions";
import { useAppSelector } from "../../../redux/hooks";
import FullRecipeData from "../components/FullRecipeData";


const page = ({ params }: { params: { slug: string } }) => {
    
    const id = +params.slug;
    const recipes = useAppSelector(state => state.recipeReducer);
    const recipe = findRecipeById(recipes, id);
    const Users = useAppSelector(state => state.authorizationReducer);
    const isAuthUser = findAuthUser(Users);

    return (
        <main className="  flex justify-center items-center">
            {recipe &&
                <FullRecipeData key={recipe.id} data={recipe} isAuthUser={isAuthUser}/>
            }
        </main>
    );
};

export default page;



