import React, { FC } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '../../../redux/hooks';
import { addUserFavorite } from '../../../redux/Slices/authSlice';

type recipeType = {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    image: string,
    
}

type RecipeDataProps = {
    data: recipeType,
};

const RecipeData:FC<RecipeDataProps> = ({data}) => {
    const dispatch = useAppDispatch();
    const { title, description, ingredients, image } = data;

    const takeFavorite = (isAuth:string) =>{
        const dataProps = {
            data: data,
            isAuth: isAuth,
        }
        isAuth ?  dispatch(addUserFavorite(dataProps)) : null
    }

    return (
        <div className='w-[35%] h-full flex flex-col justify-center items-start bg-sky-50 p-3'>
            <h2 className='font-bold text-xl mb-2'>{title}</h2>
            <Image
                src={image}
                alt={title}
                width={600}
                height={50}
            />
            <h3 className='font-bold'>Ingredients:</h3>
            <ul className="list-disc pl-8" >
                {ingredients.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <h3 className='font-bold'>Description:</h3>
            <p>{description}</p>
            <span className='flex w-full justify-end pr-5 text-black/70' >
                <button onClick={() => {}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </button>
            </span>
        </div>
    );
};

export default RecipeData;