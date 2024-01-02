"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function NavBar({event, route} : {event: any, route: string}){
    // <div className=''>
    const pathname = usePathname()
    return(
        <ul className='flex justify-center items-center'>
            <li className={`py-2 px-4 ${pathname === '/pricing/monthly'? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-xl':''}`}>
                <button className='p-5 rounded-xl' onClick={event}>Monthly billing</button>
            </li>
            <li className={`py-2 px-4 ${pathname === '/pricing/year'? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-xl':''}`}>
                <button className='p-5 rounded-xl' onClick={event}>Year billing</button>
            </li>
        </ul>
    )
}