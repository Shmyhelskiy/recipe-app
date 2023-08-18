import { FC } from "react";
import { makeFirstLetterBig } from "@/Functions";

type IngredientType = {
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
};

type ExtendedIngredientsProps = {
    data: IngredientType;
};
const Ingredient:FC<ExtendedIngredientsProps> = ({data}) => {
    
    const {name} = data
    return (
        <li>
            <span>{makeFirstLetterBig(name)}</span>
        </li>
    );
};

export default Ingredient;