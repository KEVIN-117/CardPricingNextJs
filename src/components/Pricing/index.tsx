import {Button} from "@/components/Pricing/Button";

export default function Pricing( {title, description, price}:{title:string, description: string, price: { amount: number, type: string }} ){

    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-xl'>
            <div className='w-full grid gap-6 bg-[#18181b] p-5 rounded-xl'>
                <h1 className='text-2xl'>{title}</h1>
                <h2 className=''>{description}</h2>
                <p className='text-4xl font-extrabold'>${price.amount}<sub>/{price.type}</sub></p>
                <Button changePlain={()=>{
                    console.log("onclick event dispatch")}} />
            </div>
        </div>
    )
}