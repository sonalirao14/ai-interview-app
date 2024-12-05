import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121826] text-white">
      <h1 className="text-2xl font-bold mb-6">Login to Continue</h1>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600"
      >
        Sign in with Google
      </button>
    </div>
  );
}
