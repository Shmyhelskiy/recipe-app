import Link from "next/link";
import { FC } from "react";


const Unauthorized:FC = () => {
    return (
        <div className="h-full flex justify-center items-center text-base sm:text-3xl">
            <h1 className="font-bold  text-black/75 mt-[20%]">Sorry, you are not authorized  
            <Link 
            href='/SignIn'
            className="text-sky-500/50 hover:text-sky-500"> sign in...</Link>
            </h1>
        </div>   
    );
};

export default Unauthorized;