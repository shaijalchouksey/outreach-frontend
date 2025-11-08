'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const WorkspaceSetup = () => {
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => router.push("/intent-signals/linkedin"), 500);
                    return 100;
                }
                return prev + 5;
            });
        }, 200);
        return () => clearInterval(timer);
    }, [router]);



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f0ff] text-center px-6">
            <div className="relative w-12 h-12 mb-6">
                <div className="absolute inset-0 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Setting up your workspace.. {progress}%
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
                We’re preparing your personalized dashboard and tools — please wait a
                moment.
            </p>
        </div>
    );
};

export default WorkspaceSetup;