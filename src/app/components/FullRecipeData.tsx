import { FC, useState } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '../../../redux/hooks';
import { addUserFavorite } from '../../../redux/Slices/authSlice';
import { findFavoriteRecipe } from '@/Functions';
import Ingredient from './Ingredient';
import StartCooking from './StartCooking';

type FullRecipeDataProps = {
    data: recipeType,
    isAuthUser: UserType | undefined
};

const FullRecipeData:FC<FullRecipeDataProps> = ({data, isAuthUser}) => {
    const dispatch = useAppDispatch();
    const { title, image, cheap, dairyFree, readyInMinutes, servings, glutenFree, extendedIngredients, analyzedInstructions } = data;
    const checkSsHaveInFavorite = findFavoriteRecipe(data, isAuthUser)
    const takeFavorite = () =>{
        isAuthUser ?  dispatch(addUserFavorite(data)) : null
    }
    const [startCooking, setStartCooking] = useState(true);

    
    return (
        <section className='bg-sky-50'>
            <article className='flex justify-center items-start flex-col sm:flex-row p-3 gap-4'>
                <div className='flex flex-col justify-center items-start'>
                    <h2 className='font-bold sm:text-base mb-2 w-full text-center text-base'>{title}</h2>
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={200}
                        className='h-[250px] w-[100%] md:w-[400px]'
                    />
                    <span className='flex w-full justify-end pr-5 text-black/70 mt-2' >
                        Add favorite
                        <button onClick={() => takeFavorite()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${checkSsHaveInFavorite ? 'fill-yellow-400' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </button>
                    </span>
                </div>
                <div className='flex flex-col gap-2'>
                        <h2 className='text-center font-bold '>Options</h2>
                        <p>Is it cheap: <span className='font-bold pl-2'>{cheap ? `Yes` : `No`}</span></p>
                        <p>Dairy free: <span className='font-bold pl-2'>{dairyFree ? `Yes` : `No`}</span></p>
                        <p>Minutes to ready: <span className='font-bold pl-2'>{readyInMinutes}</span></p>
                        <p>How many servings: <span className='font-bold pl-2'>{servings}</span></p>
                        <p>Is it gluten-free: <span className='font-bold pl-2'>{glutenFree ? `Yes` : `No`}</span></p>
                    <button onClick={() =>{setStartCooking(true)}} className='bg-orange-500 text-center p-1 rounded-xl text-slate-200 hover:bg-orange-600 hover:text-slate-300 hover:scale-105'>Start cooking</button>
                </div>
                <ol className='list-decimal pl-5'>
                    <h2 className='text-center font-bold '>Ingredients</h2>
                    {extendedIngredients &&
                        extendedIngredients.map((ingredient) => (
                            <Ingredient key={ingredient.id} data={ingredient} />
                        ))}
                </ol>
            </article>
            {
                startCooking
                ? 
                analyzedInstructions && <StartCooking  steps={analyzedInstructions[0].steps}/>
                : 
                null
            }

        </section>
    );
};

export default FullRecipeData;