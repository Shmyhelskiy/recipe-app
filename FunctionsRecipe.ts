import axios from 'axios';

const apiKey = `428804c942b34640a44ebd1f62d97e77`;

export async function fetchRecipes(query: string): Promise<any> {
    try {
        const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
    );
    return response.data;
        } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}


export const checkRepeatability = (arr1: recipeType[], arr2: recipeType[]) => {
    const combinedArray = [...arr1, ...arr2];
    const uniqueArray = combinedArray.reduce((accumulator: { [key: number]: recipeType }, currentObject) => {
        if (!accumulator[currentObject.id]) {
            accumulator[currentObject.id] = currentObject;
        }
        return accumulator;
        }, {});
    return Object.values(uniqueArray);
};

export const fetchRecipesbyId = async (id: number) =>{
    try {
        const response = await axios.get(
            ` https://api.spoonacular.com/recipes/${id}/information`,
            {
                params: {
                    apiKey: apiKey,
                },
            }
            )
            const { title,image, analyzedInstructions, cheap, dairyFree, readyInMinutes, servings, glutenFree, imageType, extendedIngredients, healthScore} = response.data
            const data = { id, title,image, imageType, analyzedInstructions, cheap, dairyFree, readyInMinutes, servings, glutenFree, extendedIngredients, healthScore}   
    return data
    }
    catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}

