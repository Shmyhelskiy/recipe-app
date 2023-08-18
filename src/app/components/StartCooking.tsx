import Link from "next/link";
import { FC, useState } from "react";

type StepsType = {
    number: number;
    equipment: any[];
    ingredients: any[];
    step: string; 
} 
type StartCookingType = {
    steps: StepsType[];
}


const StartCooking:FC<StartCookingType> = ({steps}) => {
    const initialCheckboxes = Array(steps.length).fill(false);
    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
    const [percentage, setPercentage] = useState(0);

    const handleCheckboxChange = (index: number) =>{
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);

    const checkedCount = updatedCheckboxes.filter((isChecked) => isChecked).length;
    setPercentage((checkedCount / steps.length) * 100);
    }
    return (
        <article className='flex justify-center items-start flex-col  md:ml-20 pl-5 md:mr-20 mb-5'>
            <ul>
                {steps.map((item, index) =>{
                    return <li className="p-2">
                        <input type="checkbox" onChange={() => handleCheckboxChange(index)} className="mr-2"/>
                        {item.step}
                        </li>
                })}
            </ul>
            <div className="flex w-full justify-center">
                {percentage === 100 
                ?
                    <Link href='/' className='bg-orange-500 text-center p-2 font-bold rounded-xl  hover:bg-orange-600 hover:text-slate-300 hover:scale-105'>
                        DONE
                    </Link> 
                : null}
            </div>
            
        </article>
    );
};

export default StartCooking;
