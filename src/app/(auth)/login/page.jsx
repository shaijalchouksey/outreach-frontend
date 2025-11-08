"use client";

import { ChevronLeft, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react"; // (1) useState import kiya

export default function Login() {
  const router = useRouter();
  
  // --- Login State ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // (2) --- Naya State (Forgot Password Modal ke liye) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState(null);
  const [modalSuccess, setModalSuccess] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  
  // --- Puraana Login Function (No Change) ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch(`${API_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed. Please check credentials.');
        }

        if (data.token) {
            localStorage.setItem('authToken', data.token);
        }
        
        router.push("/rolebase");

    } catch (err) {
        console.error('Login error:', err);
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
  };

  // (3) --- Naye Functions (Modal ke liye) ---
  
  // Modal ko kholna
  const openModal = () => {
    setIsModalOpen(true);
    setModalEmail(""); // Modal state reset karo
    setModalError(null);
    setModalSuccess(null);
    setError(null); // Main login error bhi clear karo
  };

  // Modal ko band karna
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Modal form submit (backend ko call)
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setModalLoading(true);
    setModalError(null);
    setModalSuccess(null);
  
    try {
      // SAHI WALA CODE
      const response = await fetch(`${API_URL}/api/v1/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: modalEmail }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Waise toh humara backend hamesha 200 bhejega, but just in case
        throw new Error(data.message || 'Failed to send link.');
      }
  
      // Success! Backend se message dikhao
      setModalSuccess(data.message); // (e.g., "If your email is registered...")
      setModalLoading(false);
      
      // 3 second baad modal ko band kar do
      setTimeout(() => {
        closeModal();
      }, 3000);
  
    } catch (err) {
      setModalError(err.message);
      setModalLoading(false);
    }
  };

  return (
    <> {/* (4) Fragment add kiya taaki modal ko sibling ki tarah daal sakein */}
      <div className="min-h-screen flex bg-white flex-col md:flex-row">
        {/* (Left Side - No Change) */}
        <div className="w-full md:w-1/2 m-4  sm:m-4 bg-linear-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden shadow-xl">
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
                  Lead
                  <br />
                  Discovered
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 my-1 sm:my-2">
                  245
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                  High-Intent Lead
                  <br />
                  Identified
                </div>
              </div>
              <div className="absolute top-10 sm:top-14 right-0 bg-white rounded-2xl shadow-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 w-48 sm:w-56">
                <div className="bg-purple-100 rounded-full p-2 sm:p-3 shrink-0">
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
                Start discovering, enriching, and engaging high-intent leads —
                while uncovering untapped SaaS opportunities, competitor insights,
                and market trends — all powered by AI automation.
              </p>
            </div>
          </div>
        </div>
        
        {/* (Right Side - Form Updated) */}
        <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-lg">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-base leading-none">Back</span>
            </button>

            {/* Header */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Welcome back, Team 👋
            </h2>
            <p className="text-gray-600 text-base mb-8">
              Great to see you again! Continue where your team left off.
            </p>
            
            {/* Form ab 'handleLogin' ko call karega */}
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter company email address"
                  value={email} // <-- State se link kiya
                  onChange={(e) => setEmail(e.target.value)} // <-- State update
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password} // <-- State se link kiya
                    onChange={(e) => setPassword(e.target.value)} // <-- State update
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                  />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
                </div>
              </div>

              {/* Error message dikhane ke liye */}
              {error && (
                <p className="text-sm text-red-600 text-center">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span>Remember me</span>
                </label>
                
                {/* (5) --- <Link> ko <span> se badal diya --- */}
                <span
                  onClick={openModal} // <-- Modal kholne ke liye
                  className="text-purple-600 hover:underline font-medium cursor-pointer"
                >
                  Forgot password?
                </span>
                {/* --- End of Change --- */}
                
              </div>
              
              <button
                type="submit"
                disabled={isLoading} // <-- Disable on loading
                className="w-full bg-purple-600 text-white font-semibold py-3.5 rounded-lg hover:bg-purple-700 transition-colors text-base disabled:bg-purple-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Logging in..." : "Continue"}
              </button>
              
              <div className="flex items-center gap-4 my-4">
                <div className="grow border-t border-gray-300"></div>
                <span className="text-sm text-gray-500">
                  or continue with email
                </span>
                <div className="grow border-t border-gray-300"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="font-medium text-gray-700">
                    Sign in with Google
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src="https://www.svgrepo.com/show/303145/microsoft-icon-logo.svg"
                    alt="Microsoft"
                    className="w-5 h-5"
                  />
                  <span className="font-medium text-gray-700">
                    Sign in with Microsoft
                  </span>
                </button>
              </div>
              <p className="text-center text-base text-gray-600 mt-6">
                Need help?{" "}
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Contact your IT admin.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* (6) --- Naya Modal (Hidden by default) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 transition-opacity" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full m-4">
            
            {/* Modal Content */}
            <h3 id="modal-title" className="text-2xl font-bold text-gray-900 mb-4">Forgot Password?</h3>
            <p className="text-gray-600 mb-6">
              Enter your email address below, and we'll send you a link to reset your password.
            </p>
            
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="modal-email"
                  placeholder="e.g., admin@mycompany.com"
                  value={modalEmail}
                  onChange={(e) => setModalEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Modal Error/Success Messages */}
              {modalError && <p className="text-sm text-red-600 text-center">{modalError}</p>}
              {modalSuccess && <p className="text-sm text-green-600 text-center">{modalSuccess}</p>}

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={closeModal} // Cancel button
                  disabled={modalLoading}
                  className="w-1/2 bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalLoading || !!modalSuccess} // Success ke baad disable
                  className="w-1/2 bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
                >
                  {modalLoading ? 'Sending...' : 'Send Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* --- End of Modal --- */}
    </>
  );
}
