import React, { FC} from 'react';
import Image from 'next/image';
import { useAppDispatch } from '../../../redux/hooks';
import { addUserFavorite } from '../../../redux/Slices/authSlice';
import { findFavoriteRecipe } from '@/Functions';
import Link from 'next/link';
import { fetchRecipeDataById } from '../../../redux/Slices/recipeSlice';

type RecipeDataProps = {
    data: recipeType,
    isAuthUser: UserType | undefined
};

const RecipeData:FC<RecipeDataProps> = ({data, isAuthUser}) => {
    const dispatch = useAppDispatch();
    const { id, title, image } = data;
    const checkSsHaveInFavorite = findFavoriteRecipe(data, isAuthUser)
    
    const takeFavorite = () =>{
        isAuthUser ?  dispatch(addUserFavorite(data)) : null
    }
    const test = () => { 
        dispatch(fetchRecipeDataById(id))
    }

    return (
        <div className='md:w-[20%] h-96 flex flex-col justify-center items-start bg-sky-50 p-3'>
            <h2 className='font-bold sm:text-base mb-2 w-full text-center text-base'>{title}</h2>
            <Image
                src={image}
                alt={title}
                width={600}
                height={200}
                className='h-[250px] w-[100%]'
            />
            <span className='flex w-full justify-end pr-5 text-black/70 mt-2' >
                Add favorite
                <button onClick={() => takeFavorite()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${checkSsHaveInFavorite ? 'fill-yellow-400' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </button>
            </span>
            <Link href={`${id}`} className='flex w-full justify-end items-center pr-5 font-bold' onClick={test} >
                Open 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 hover:fill-orange-600 hover:stroke-blue-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
        </div>
    );
};

export default RecipeData;
