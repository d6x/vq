'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChartLine} from "@fortawesome/free-solid-svg-icons";
import SideLogoutButton from "@/components/buttons/SideLogoutButton";
import {usePathname } from "next/navigation";

export default function AppSidebar() {

    const path = usePathname();
    return(
        <nav className="inline-flex flex-col text-center mt-8 gap-6 text-gray-700">
        <Link href={'/account'} 
            className={"flex gap-4 " + (path === '/account' ? 'text-blue-500' : '')}>
            <FontAwesomeIcon fixedWidth={true} icon={faStar} className="w-6 h-6" />
            <span className="">My Page</span>
            </Link>
        <Link href={'/analytics'}
            className={"flex gap-4 " + (path === '/analytics' ? 'text-blue-500' : '')}>
        <FontAwesomeIcon fixedWidth={true} icon={faChartLine} className="w-6 h-6" />
            <span className="">Analytics</span>
            </Link>
        <SideLogoutButton />
    </nav>
    );
}