"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function NavBar(){
    // <div className=''>
    const pathname = usePathname()
    return(
        <ul>

            <li className={`py-2 px-4 ${pathname === '/pricing/monthly'? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-xl':''}`}>
                <Link className='bg-[#18181b] p-5 rounded-xl' href='/pricing/monthly'>Monthly billing</Link>
            </li>
            <li className={`py-2 px-4 ${pathname === '/pricing/year'? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-xl':''}`}>
                <Link className='bg-[#18181b] p-5 rounded-xl' href='/pricing/year'>Year billing</Link>
            </li>
        </ul>
    )
}