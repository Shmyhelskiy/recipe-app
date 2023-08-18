export const takeData = (name:string) => {
    const storedUsers = localStorage.getItem(name);
    
    if (storedUsers !== null) {
        return JSON.parse(storedUsers)
    } 
        else return null
}
export const findUserByEmail = (state: authDataState, email: string) => {
    return state.findIndex(item => item.email === email)
}

export const findAuthUser = ( state: authDataState) => {
    return state.find(item => item.isAuth === true)
}

export const checkFavoriteRecipe = (state: authDataState, id: number) => {
    const User = findAuthUser(state);
    return findRecipe(User?.favorite || [], id)
    
}

const findRecipe = (recipes: recipeType[], id: number) =>{
    const recipe = recipes.findIndex(item => item.id === id)
    if ( recipe === -1) {
        return null
    } else return recipes.splice(recipe, 1)
}

export const findRecipeById = (recipes: recipeType[], id: number) =>{
    return recipes.find((item) => item.id === id)
}

export const findFavoriteRecipe = (recipe: recipeType, user: UserType | undefined) => {
const  { id } = recipe;
if ( user?.favorite?.find(item => item.id === id) )return true
return false
}

export const makeFirstLetterBig = (word: string) =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
}