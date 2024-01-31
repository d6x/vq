'use client'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function SideLogoutButton() {
    return (
        <button
            className=" hover:text-red-700 text-gray-700 flex gap-4 text-center"
            onClick={() => signOut()}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
        </button>
    );
}
