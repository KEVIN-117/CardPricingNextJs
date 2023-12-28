import NavBar from "@/components/Pricing/NavBar";

export default function PricingLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}