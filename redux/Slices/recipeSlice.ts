import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type recipeType = {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    image: string,
}

const initialState: recipeType[] = [
    {   
        id: 0,
        title: `Classic scrambled eggs`,
        description: `Heat the pan over high heat for half a minute. Reduce the heat to a minimum and thoroughly grease the pan with oil. Carefully break the eggs into the pan so that the yolk remains intact. Fry the eggs over low heat until the protein reaches the desired consistency. The finished scrambled eggs should slide easily onto the plate. Salt the eggs, sprinkle with red pepper or any other seasoning as desired.`,
        ingredients: [`eggs -2 pcs`,`oil -1 tsp`,`salt - to taste`],
        image: `/Classic scrambled eggs.jpeg`,
    }, 
    {   
        id: 1,
        title: `Pork chops with bourbon`,
        description: `Pork chops are loved for their excellent taste and speed of cooking. The trick is to smother pork chops in bourbon with onions and mushrooms. Bourbon gives the sauce a sweet and smoky flavor, while onions and mushrooms add juiciness and richness.`,
        ingredients: [
            `4 pork chops (about 1 kg)`,
            `salt and black pepper to taste`,
            `2 tablespoons (30 ml) of vegetable oil`,
            `1 large onion, cut into thin half rings`,
            `250 g of mushrooms, cut into slices`,
            `2 tablespoons (30 g) of flour`,
            `1 cup (240 ml) of bourbon`,
            `1 cup (240 ml) chicken broth`,
            `2 tablespoons (30 ml) of soy sauce`,
            `2 tablespoons (30 g) of brown sugar`,
            `2 teaspoons (10 ml) of vinegar`,
            `2 tablespoons (30 g) of butter`,
        ],
        image: `/Pork chops with bourbon.jpg`,
    }
];

export const recipe = createSlice({
    name: "recipe",
    initialState,
    reducers: {

    },
});

export const {
    
} = recipe.actions;
export default recipe.reducer;


