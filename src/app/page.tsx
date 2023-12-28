import Image from 'next/image'
import Pricing from "@/components/Pricing";
import Link from "next/link";
import PricingPage from "@/app/pricing/page";
import PricingLayout from "@/app/pricing/layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <PricingPage/>
        <PricingLayout/>
    </main>
  )
}
