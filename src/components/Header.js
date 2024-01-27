import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "@/components/buttons/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
    const session = await getServerSession(authOptions);
    return (
        <header className="bg-white-200 border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex gap-6">
                <Link href="/" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLink} />
                    <span>VQ</span>
                </Link>
                <nav className="flex items-center gap-4 text-slate-700 text-sm">
                    <Link href="/about">About</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm text-slate-700">
                    {!!session && (
                        <>
                        <Link href="/dashboard">Dashboard</Link>
                        <LogoutButton />
                        </>
                    )}
                    {!session && (
                        <>
                            <Link href="/login">Login</Link>
                            <Link href="/signup">Sign Up</Link>
                        </>
                    )}
                </nav>                
            </div>
        </header>
    );
}