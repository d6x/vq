'use client';

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from 'next-auth/react';
import { useEffect } from "react";
import {redirect, useRouter } from "next/navigation";

export default function HeroForm({user}) {

    const router = useRouter();

    useEffect(() => {
        if (
            'localStorage' in window
            && window.localStorage.getItem('desiredUsername')
            ) {
                const username = window.localStorage.getItem('desiredUsername');
                window.localStorage.removeItem('desiredUsername');
                redirect('/account?username=' + username);
        }
    }, []);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector('input');
        const username = input.value;
        if (username.length > 0) {
            if (user) {
                router.push('/account?desiredUsername=' + username)
            } else {
                window.localStorage.setItem('desiredUsername', username);
                await signIn('google');
            }
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="pl-4 inline-flex items-center shadow-lg shadow-black/20 bg-white">
        <FontAwesomeIcon icon={faLink} className="text-blue-500"/>
          <span className="bg-white py-4 pl-4">vq.ie/</span>
          <input
          type="text" className="py-4" placeholder="username"/>
          <button
           type="submit" className="bg-blue-500 text-white py-4 px-6">Get Started
           </button>
        </form>
    );
}