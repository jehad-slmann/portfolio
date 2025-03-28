"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navigating from "./Navigating";

const Navbar = () => {

    const [isRouting, setIsRouting] = useState(false)
    const [prevPath, setPrevPath] = useState("/")
    const path = usePathname()

    useEffect(() =>{
        if(prevPath != path){
            // setIsRouting(true)

            // setPrevPath(path)
            const timeout = setTimeout(() => {
                setPrevPath(path)
            }, 2000)

            return () => clearTimeout(timeout)
        }
    }, [path, prevPath])

    useEffect(() => {
        if(isRouting){
            setPrevPath(path)
            const timeout = setTimeout(() => {
                setIsRouting(false)
            }, 2000)

            return () => clearTimeout(timeout)
        }
    }, [isRouting])
    
    return(
        <>
        {path != prevPath && <Navigating/>}
        <nav className="w-[80%] md:w-[60%] lg:w-[30%] max-w-[500px]  fixed bottom-[-70px] left-[10%] border-2 border-solid border-white rounded-full pt-8 pb-20 z-10">
            <ul className="w-full flex justify-around items-center">
                <li className="text-white font-semibold text-md">
                    <Link href="/" className="w-full h-full block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-[35px] h-[35px] hover:text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </Link>
                </li>

                <li className="text-white font-semibold text-md">
                    <Link href="skills" className="w-full h-full block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-[35px] h-[35px] hover:text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </Link>
                </li>

                <li className="text-white font-semibold text-md">
                    <Link href="projects" className="w-full h-full block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-[35px] h-[35px] hover:text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </Link>
                </li>

                <li className="text-white font-semibold text-md">
                    <Link href="contact-me" className="w-full h-full block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-[35px] h-[35px] hover:text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar


