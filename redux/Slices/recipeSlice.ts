import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkRepeatability, fetchRecipesbyId } from "../../FunctionsRecipe";
import { findAuthUser, takeData } from "@/Functions";


const initialState: recipeType[] = [];
export const fetchRecipeDataById = createAsyncThunk(
    "recipe/fetchRecipeById",
    async (recipeId: number) => {  
        const data = await fetchRecipesbyId(recipeId);  
        return data
    }
);

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipeDataById.fulfilled, (state, action) => {
            const { analyzedInstructions, cheap, dairyFree, readyInMinutes, servings, glutenFree, id, healthScore, extendedIngredients, title, image} = action.payload
            const recipeToUpdate = state.find((recipe) => recipe.id === id);            
                if (recipeToUpdate) {  
                    recipeToUpdate.cheap = cheap;
                    recipeToUpdate.dairyFree = dairyFree;
                    recipeToUpdate.analyzedInstructions = analyzedInstructions;
                    recipeToUpdate.readyInMinutes = readyInMinutes;
                    recipeToUpdate.servings = servings;
                    recipeToUpdate.glutenFree = glutenFree;
                    recipeToUpdate.healthScore = healthScore;
                    recipeToUpdate.extendedIngredients = extendedIngredients;
                    recipeToUpdate.title = title;
                    recipeToUpdate.image = image;
                } else {
                    const newRecipe = {
                        analyzedInstructions,
                        cheap, 
                        dairyFree, 
                        readyInMinutes, 
                        servings, 
                        glutenFree, 
                        id, 
                        healthScore, 
                        extendedIngredients, 
                        title, 
                        image,
                    }
                state.push(newRecipe)
                }

                
        })
    }
});

export const {
    fetchRecipe,
    cleanRecipe,
} = recipe.actions;
export default recipe.reducer;



