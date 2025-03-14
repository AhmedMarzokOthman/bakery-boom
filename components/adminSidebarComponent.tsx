"use client"

import { FiLogOut, FiSidebar } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import { GrContact } from "react-icons/gr";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function AdminSidebarComponent() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCurrentPage, setIsCurrentPage] = useState("");

    useEffect(() => {
        setIsCurrentPage(window.location.pathname);
    }, []);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Check for saved user preference in localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("isSidebarOpen");
        if (savedMode === "enabled") {
            setIsSidebarOpen(true);
        }
    }, []);

    // Update body class and localStorage on isDark change
    useEffect(() => {
        if (isSidebarOpen) {
            localStorage.setItem("isSidebarOpen", "enabled");
        } else {
            localStorage.setItem("isSidebarOpen", "disabled");
        }
    }, [isSidebarOpen]);

    const tabs = [
        {
            name: "Dashboard",
            icon: <RxDashboard />,
            href: "/dashboard"
        },
        {
            name: "Feedbacks",
            icon: <VscFeedback />,
            href: "/feedbacks"
        },
        {
            name: "Contact Us",
            icon: <GrContact />,
            href: "/contact-us"
        },
        {
            name: "Sign Out",
            icon: <FiLogOut />,
            href: "/admin/auth"
        },
    ];


    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <Loader2 className="animate-spin text-2xl" />
        </div>
    }

    return (
        <div title="Sidebar" className={`flex flex-col gap-y-5 w-[220px] h-screen bg-[#333333]
            ${isSidebarOpen ? 'w-[220px]' : 'w-[50px]'}
            text-white rounded-r-md shadow-lg transition-all duration-300 `} >
            <div className={`flex absolute bottom-0 left-0 p-2`}>
                <FiSidebar
                    className={`text-2xl cursor-pointer hover:text-gray-100 hover:text-opacity-50 transition-colors`}
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                />
            </div>
            <div title="Logo Image">
                <a href="/">
                    <Image
                        className="invert w-full border-b border-gray-500 p-2"
                        src={`${isSidebarOpen ? '/logo.png' : '/logo-small.png'}`}
                        alt="Logo"
                        width={500}
                        priority
                        height={500}
                    />
                </a>
            </div>
            <div className="relative">
                <div className="flex flex-col gap-y-5 ">
                    {tabs.map((tab, index) => (
                        <div
                            className={`text-[20px] font-semibold hover:text-gray-300 cursor-pointer 
                                hover:bg-gray-50 hover:bg-opacity-10 ${isCurrentPage === tab.href ? 'bg-gray-50 bg-opacity-10' : ''} p-2`}
                            key={index}
                        >
                            {!isSidebarOpen ? (
                                <button
                                    onClick={() => {
                                        setIsCurrentPage(tab.href);
                                        if (tab.name === "Sign Out") {
                                            signOut({ redirect: true, callbackUrl: '/admin/auth' });
                                        } else {
                                            router.push(tab.href);
                                        }
                                    }}
                                    className="flex items-center justify-center w-full"
                                    aria-label={tab.name}
                                >
                                    {tab.icon}
                                </button>
                            ) : (
                                <button
                                    className="flex items-center gap-x-2 w-full"
                                    onClick={() => {
                                        setIsCurrentPage(tab.href);
                                        if (tab.name === "Sign Out") {
                                            signOut({ redirect: true, callbackUrl: '/admin/auth' });
                                        } else {
                                            router.push(tab.href);
                                        }
                                    }}
                                >
                                    {tab.icon}
                                    <span>{tab.name}</span>
                                </button>
                            )}
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}


