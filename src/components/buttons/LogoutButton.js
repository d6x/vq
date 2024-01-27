'use client'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signOut} from "next-auth/react";

export default function LogoutButton() {
    return (
        <button 
        className=""
        onClick={() => signOut()}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
    );
}