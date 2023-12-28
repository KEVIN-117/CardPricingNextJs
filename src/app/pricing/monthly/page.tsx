import Pricing from "@/components/Pricing";

export default function Page(){
    return(
        <div className='grid grid-cols-3 gap-6'>
            <Pricing title='Hobby' price={{amount: 12, type: 'month'}} description='All the basics for starting a new business!' />
            <Pricing title='Freelancer' price={{amount: 24, type: 'month'}} description='All the basics for starting a new business' />
            <Pricing title='Startup' price={{amount: 32, type: 'month'}} description='All the basics for starting a new business!' />
            <Pricing title='Enterprise' price={{amount: 48, type: 'month'}} description='All the basics for starting a new business' />
        </div>
    )
}