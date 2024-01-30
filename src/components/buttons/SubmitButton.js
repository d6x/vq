import { Children } from "react";
import { useFormStatus } from "react-dom";


export default function SubmitButton({children}) {

    const {pending} = useFormStatus();
    return(
        <button type="submit" 
        disabled={pending}
        className="bg-blue-500 disabled:bg-blue-200 text-white disabled:text-gray-200 py-2 px-4 block mx-auto w-full rounded-lg" >
             {children}
        </button>
    );
}