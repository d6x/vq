'use client';

import grabUsername from "@/actions/grabUsername";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect } from "next/navigation";
import { useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";

export default function UsernameForm({desiredUsername}) {

    const [taken, setTaken] = useState(false);
    async function handleSubmit(formData) {
        const result = await grabUsername(formData);
        setTaken(result === false);
        if (result) {
            redirect('/account/'+formData.get('username'));
        }
    }

    return (
        <form action={handleSubmit}>
            <h1 className="text-4xl font-bold text-center mb-2">Welcome to VQ</h1>
            <p className="text-center text-slate-700 mb-4">Please confirm your username. This username will<br />be used for your unique VQ page.</p>
            <div className="max-w-xs mx-auto">
                <div className="bg-white flex items-center border mb-4">
                    <FontAwesomeIcon icon={faAt} className="text-blue-500 px-2"/>
                    <input
                        name="username"
                        className="flex-grow p-2"
                        defaultValue={desiredUsername}
                        type="text" 
                        placeholder="username"
                    />
                        {taken && (
                            <div className="bg-red-100 border border-red-500 p-2 mb-2">Username taken.</div>
                        )}
                </div>
                <SubmitButton>
                    <span>Claim your username</span>
                </SubmitButton>
            </div>
        </form>
    );
};