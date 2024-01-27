import GoogleLogin from "@/components/buttons/GoogleLogin";

export default function LoginPage() {
    return (
        <div>
            <div className="bg-white p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">Login</h1>
                <p className="text-center mb-6 text-slate-700">
                    Sign into your account using one of the providers below.
                </p>
                <GoogleLogin />
            </div>
        </div>
    );
}