import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import UsernameForm from "@/components/forms/UsernameForm";

export default async function AccountPage({searchParams}) {

    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.username;

    if (!session) {
        redirect('/');
    }

    return(
    <div>
        <UsernameForm desiredUsername={desiredUsername}/>
    </div>
    );
}