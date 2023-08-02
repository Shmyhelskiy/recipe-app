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
    analyzedInstructions?: {
        name: string;
        steps: { number: number; step: string }[];
    }[];
    cheap?: boolean;
    dairyFree?: boolean;
    readyInMinutes?: number;
    servings?: number;
    glutenFree?: boolean;
};
