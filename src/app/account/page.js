import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function AccountPage({searchParams}) {

    const session = await getServerSession(authOptions);
    const username = searchParams?.username;

    if (!session) {
        redirect('/');
    }

    return(
    <div>
        <form>
            <h1 className="text-4xl font-bold text-center mb-2">Welcome to VQ</h1>
            <p className="text-center text-slate-700 mb-4">Please confirm your username. This username will<br />be used for your unique VQ page.</p>
            <div className="max-w-xs mx-auto">
                <div className="bg-white flex items-center border mb-4"> {/* Flex container for icon and input */}
                    <FontAwesomeIcon icon={faAt} className="text-blue-500 px-2"/> {/* Icon with some padding */}
                    <input
                        className="flex-grow p-2" // flex-grow to take the remaining space
                        defaultValue={username}
                        type="text" 
                        placeholder="username"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full rounded-lg" >Save</button>
            </div>
        </form>
    </div>
    );
}