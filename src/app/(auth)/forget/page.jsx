'use client'
import React, { useState } from 'react'; // (1) useState import kiya
import { ChevronLeft } from 'lucide-react';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateTenant() { // (Aapke function ka naam)
    const router = useRouter();
    
    // (2) Naya State (Form ke liye)
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null); // Success message ke liye
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    // (3) Updated function jo backend ko call karega
    const handleForget = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // SAHI WALA CODE
            const response = await fetch(`${API_URL}/api/v1/auth/forgot-password`,  {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send link.');
            }

            // Success!
            setSuccess(data.message); // (e.g., "If your email is registered...")
            setEmail(""); // Email input ko clear karo

        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // (UI 100% SAME HAI)
    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 m-4  sm:m-4 bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden shadow-xl">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("/pattern.png")`,
                        backgroundBlendMode: "overlay",
                        filter: "brightness(4) saturate(1.2)",
                    }}
                ></div>
                <div className="absolute top-10 left-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-6 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                    <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-10 sm:mb-16 text-center md:text-left">
                        Outreach
                    </h1>
                    <div className="relative flex justify-center mb-14 sm:mb-20">
                        <div className="bg-white rounded-2xl sm:rounded-3xl h-48 sm:h-64 w-64 sm:w-80 shadow-2xl"></div>
                        <div className="absolute left-0 sm:left-1 -bottom-10 sm:-bottom-12 bg-white rounded-2xl shadow-2xl p-4 sm:p-5 w-40 sm:w-44">
                            <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                </svg>
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                                Lead<br />Discovered
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-purple-600 my-1 sm:my-2">245</div>
                            <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                                High-Intent Lead<br />Identified
                            </div>
                        </div>
                        <div className="absolute top-10 sm:top-14 right-0 bg-white rounded-2xl shadow-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 w-48 sm:w-56">
                            <div className="bg-purple-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs font-medium text-gray-600">
                                    AI Enrichment Active
                                </div>
                                <div className="text-sm sm:text-lg font-bold text-purple-600">
                                    45 New Leads
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-center md:text-left mt-6">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                            Smarter, Faster, Automated
                        </h2>
                        <p className="text-purple-100 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-md mx-auto md:mx-0">
                            Start discovering, enriching, and engaging high-intent leads — while
                            uncovering untapped SaaS opportunities, competitor insights, and
                            market trends — all powered by AI automation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-lg">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-base leading-none">Back</span>
                    </button>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Forgot Password?
                    </h2>
                    <p className="text-gray-600 text-base mb-8">
                        Enter your registered email to reset your password.
                    </p>
                    {/* (4) Form ab onSubmit ka istemal karega */}
                    <form className="space-y-6" onSubmit={handleForget}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email ID
                            </label>
                            <input
                                type="email"
                                value={email} // <-- State se link
                                onChange={(e) => setEmail(e.target.value)} // <-- State update
                                placeholder="Enter email address"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* (5) Naye Error/Success messages */}
                        {error && (
                            <p className="text-sm text-red-600 text-center">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p className="text-sm text-green-600 text-center">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !!success} // Success ke baad disable
                            // onClick={handleForget} <-- (6) Isse hata diya
                            className="w-full bg-purple-600 text-white font-semibold py-3.5 rounded-lg hover:bg-purple-700 transition-colors text-base disabled:bg-purple-400"
                        >
                            {isLoading ? 'Sending Link...' : 'Send Reset Link'}
                        </button>
                        <p className="text-center text-base text-gray-600">
                            Remembered your password?{" "}
                            {/* (7) Yeh link ab /login par wapas jaayega (na ki /reset) */}
                            <Link href="/login" className="text-purple-600 font-semibold hover:underline">
                                Login here.
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
}