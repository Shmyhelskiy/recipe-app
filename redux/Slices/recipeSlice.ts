import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkRepeatability, fetchRecipesbyId } from "../../FunctionsRecipe";

const initialState: recipeType[] = [];


export const recipe = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        fetchRecipe: (state, action: PayloadAction<recipeType[]>) => {
            const uniqueRecipes = checkRepeatability(state, action.payload)
            return uniqueRecipes
        },
        cleanRecipe: (state) =>{
            return state = initialState
        },
        addInformationById: (state, action: PayloadAction<number>) =>{
            const data = fetchRecipesbyId(action.payload)
        }
    }
});

export const {
    fetchRecipe,
    cleanRecipe,
    addInformationById,
} = recipe.actions;
export default recipe.reducer;

