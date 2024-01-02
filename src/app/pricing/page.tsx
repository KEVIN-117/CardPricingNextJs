import PricingLayout from "@/app/pricing/layout";


export default function PricingPage(){
    return(
        <div className='text-center'>
            <h1 className='text-4xl font-extrabold'>Pricing Plans</h1>
            <p>Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>

            <PricingLayout />
        </div>
    )
}