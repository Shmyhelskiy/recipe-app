type UserType = {
    name: string,
    email: string,
    password: string,
    favorite?: recipeType[],
    isAuth?: boolean,
}
type authDataState = UserType[];    