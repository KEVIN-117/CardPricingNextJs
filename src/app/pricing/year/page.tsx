import Pricing from "@/components/Pricing";

export default function Page(){
    return (
        <div className='grid grid-cols-3 gap-6'>
            <Pricing title='Hobby' price={{amount: 100, type: 'year'}} description='All the basics for starting a new business!' />
            <Pricing title='Freelancer' price={{amount: 200, type: 'year'}} description='All the basics for starting a new business' />
            <Pricing title='Startup' price={{amount: 300, type: 'year'}} description='All the basics for starting a new business!' />
            <Pricing title='Enterprise' price={{amount: 400, type: 'year'}} description='All the basics for starting a new business' />
        </div>
    )
}