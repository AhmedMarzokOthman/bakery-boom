"use client"

import { FiSidebar } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { GrContact } from "react-icons/gr";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function AdminSidebarComponent() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCurrentPage, setIsCurrentPage] = useState("/admin/dashboard");

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
            href: "/admin/dashboard"
        },
        {
            name: "Feedbacks",
            icon: <VscFeedback />,
            href: "/admin/feedbacks"
        },
        {
            name: "Contact Us",
            icon: <GrContact />,
            href: "/admin/contact-us"
        },
    ]

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
                <Image
                    className="invert w-full border-b border-gray-500 p-2"
                    src={`${isSidebarOpen ? '/logo.png' : '/logo-small.png'}`}
                    alt="Logo"
                    width={500}
                    priority
                    height={500}
                />
            </div>
            <div className="relative">
                <div className="flex flex-col gap-y-5 ">
                    {tabs.map((tab, index) => (
                        <h1
                            className={`text-[20px] font-semibold hover:text-gray-300 cursor-pointer 
                                hover:bg-gray-50 hover:bg-opacity-10 ${isCurrentPage === tab.href ? 'bg-gray-50 bg-opacity-10' : ''} p-2`}
                            key={index}
                        >
                            {!isSidebarOpen ?
                                tab.icon :
                                <a
                                    href={tab.href}
                                    className="flex items-center gap-x-2"
                                    onClick={() => setIsCurrentPage(tab.href)}
                                >
                                    {tab.icon} {tab.name}
                                </a>
                            }
                        </h1>

                    ))}
                </div>
            </div>
        </div>
    );
}