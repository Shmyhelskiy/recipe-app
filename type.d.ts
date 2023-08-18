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
        steps: { number: number; step: string, ingredients: any[], equipment: any[] }[];
    }[];
    cheap?: boolean;
    dairyFree?: boolean;
    readyInMinutes?: number;
    servings?: number;
    glutenFree?: boolean;
    healthScore?: number;
    extendedIngredients?: {
        aisle: string;
        amount: number;
        consistency: string;
        id: number;
        image: string;
        measures: any;
        meta: string[];
        name: string;
        nameClean: string;
        original: string;
        originalName: string;
        unit: string;
    }[];
};

