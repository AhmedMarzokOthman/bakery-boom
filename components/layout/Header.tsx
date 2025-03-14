"use client"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image"
import { useResponsive } from "../../hooks/useResponsive";

export default function Header() {
    const { isMobile, isDesktop, isTablet } = useResponsive();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const links = [{
        href: "#about",
        text: "About Us"
    }, {
        href: "#feedback",
        text: "Feedback"
    }, {
        href: "#footer",
        text: "Contact Us"
    }];

    if (isDesktop) {
        return (
            <header role="banner" aria-label="Site header" className={`flex justify-between pl-4 pr-4 md:pl-16 md:pr-16 lg:pl-16 lg:pr-16 pt-4 md:pt-5 md:pb-3 lg:pb-3 `}> { /*i removed "sticky top-0 z-50"*/}
                <div className="flex gap-8 items-center">
                    <div>
                        <Image
                            title="logo image"
                            className={`w-full h-full p-1 cursor-pointer dark:invert transition-all duration-500 `}
                            src="/logo.png"
                            alt="Image"
                            width={200}
                            height={50}
                            priority={true}
                            onClick={() => window.location.href = "/"}
                        />
                    </div>
                    <div className="flex gap-8 items-center font-alexandria font-medium text-lg">
                        {links.map((link, index) => (
                            <div className="relative group" key={index}>
                                <a className="p-2 rounded-lg" href={link.href}>{link.text}</a>
                                <hr className="absolute -bottom-1 left-1/2 w-0 group-hover:w-1/2 h-0.5 bg-current transition-all duration-300 -translate-x-1/2 text-yellow-500" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end items-center gap-2 p-4 bg-[#885c4c] rounded-lg hover:bg-[#7e594b] transition-all duration-300 cursor-pointer">
                    <button
                        aria-label="Order via WhatsApp"
                        className="flex justify-center items-center gap-2"
                        onClick={() => window.open("https://wa.me/201153612009", "_blank")}
                    >
                        <FaWhatsapp className="text-white w-[35px] h-[35px]" />
                        <div className="flex flex-col items-start">
                            <span className="text-white font-medium text-sm">Order Now</span>
                            <span className="text-white font-medium text-sm">+20 1153612009</span>
                        </div>
                    </button>
                </div>
            </header >
        );
    }

    if (isTablet) {
        return (
            <header id="header" className={`flex justify-between pl-4 pr-4 md:pl-5 md:pr-10 lg:pl-10 lg:pr-10 pt-4 md:pt-5 md:pb-3 lg:pb-3 `}> { /*i removed "sticky top-0 z-50"*/}
                <div>
                    <Image className={`w-full h-full p-1 dark:invert transition-all duration-500 `} src="/logo.png" alt="Image" width={200} height={50} priority={true} />
                </div>

                <div className="flex gap-8 items-center font-alexandria font-normal text-lg">
                    {links.map((link, index) => (
                        <a onClick={() => setIsSidebarOpen(!isSidebarOpen)} key={index} href={link.href} className="p-2 rounded-lg">
                            {link.text}
                        </a>
                    ))}
                </div>
            </header>
        );
    }

    if (isMobile) {
        return (
            <header id="header" className={`flex justify-between pl-4 pr-4 md:pl-20 md:pr-20 lg:pl-20 lg:pr-20 pt-4 md:pt-10 pb-3 `}> { /*i removed "sticky top-0 z-50"*/}
                <div>
                    <Image className={`w-full h-full p-1 dark:invert transition-all duration-500 `} src="/logo.png" alt="Image" width={150} height={50} priority={true} />
                </div>

                <div className="flex gap-8 items-center font-alexandria font-medium text-xl">
                    <div className={`realative`}>
                        <button
                            className="top-4 right-4"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <Menu className="transition-all duration-75" size={24} />
                        </button>

                        <button
                            title="open side bar"
                            className={`fixed z-40 inset-0 inline-flex bg-opacity-60 transition-opacity duration-300 dark:bg-opacity-60  dark:bg-zinc-600 bg-zinc-400 ${isSidebarOpen ? 'opacity-100' : ' opacity-0 pointer-events-none'}`}
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <nav className={`absolute top-0 right-0 bottom-0 w-60 transition-transform space-y-3 pt-10 duration-300 transform dark:bg-zinc-800 bg-white ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                                <Image className={`w-full p-2 mb-2 dark:invert transition-all duration-500`} src="/logo.png" alt="close" width={100} height={100} />
                                <hr className='border-b-0 pb-4 border-zinc-700 opacity-50' />
                                <div className="flex flex-col justify-start items-start">
                                    {links.map((link, index) => (
                                        <a onClick={() => setIsSidebarOpen(!isSidebarOpen)} key={index} href={link.href} className="pt-1 pl-3 mb-6 dark:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 w-full h-full flex justify-start items-start font-alexandria font-medium text-xl">
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </button>
                    </div>
                </div>

            </header>
        );
    }
}