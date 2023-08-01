import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkRepeatability } from "../../FunctionsRecipe";

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
        }
    }
});

export const {
    fetchRecipe,
    cleanRecipe,
} = recipe.actions;
export default recipe.reducer;

