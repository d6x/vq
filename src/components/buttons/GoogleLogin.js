'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

export default function GoogleLogin() {
    return (
        <button 
            onClick={() => signIn('google')}
            className="bg-blue-500 text-white text-center w-full py-4 flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} className="h-5"/>
            <span>Sign in with Google</span>
        </button>
    );
}