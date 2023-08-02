"use client"

import { useAppDispatch } from "../../../redux/hooks";
import {addInformationById} from '../../../redux/Slices/recipeSlice'

const page = ({ params }: { params: { slug: string } }) => {
    
    const id = +params.slug;
    const dispatch = useAppDispatch();
    const takeDataById = () =>{
        dispatch(addInformationById(id))
    }
    
    return (
        <div>
            <button onClick={() => takeDataById()}>{id}</button>
        </div>
    );
};

export default page;

