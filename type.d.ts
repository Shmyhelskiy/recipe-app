type UserType = {
    name: string,
    email: string,
    password: string,
    favorite?: recipeType[],
    isAuth?: boolean,
}
type authDataState = UserType[];    

type recipeType = {
    id: number,
    title: string,
    image: string,
    imageType?: string,
};