import NavBar from "@/components/Pricing/NavBar";

export default function PricingLayout({ children }: { children?: React.ReactNode }) {
    const event = (key: string) =>{

    }
  return (
    <div className='grid gap-6 mt-6'>
        <NavBar event={event("")} route='' />
        {children}
    </div>
  )
}