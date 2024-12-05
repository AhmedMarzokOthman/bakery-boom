"use client"

import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useResponsive } from "./hooks/useResponsive";



export default function HowItHappensComponent() {
    const { isMobile, isDesktop, isTablet } = useResponsive();

    if (isDesktop) {
        return (
            <article
                id="how-it-happens"
                className="relative overflow-hidden h-[90vh] flex justify-center rounded-lg mb-16 mr-16 ml-16"
            >
                <Image
                    src="/breadDough2.png"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className="rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <IoPlayCircleOutline
                    size={250}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
                    onClick={() => {
                        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                    }}
                />
                <div className="flex justify-center items-center gap-5 absolute top-0 right-0 mt-16 mr-1 transform -translate-x-0 -translate-y-1/2">
                    <p className="text-5xl font-bold font-brush text-[#d0d0d0]">How It Happens</p>
                    <hr className="w-10 h-0.5 bg-current text-yellow-500 rounded-full" />
                </div>
            </article>
        );
    }

    if (isTablet) {
        return (
            <article
                id="how-it-happens"
                className="relative overflow-hidden h-[60vh] flex justify-center rounded-lg mb-20 mt-5 mr-5 ml-5"
            >
                <Image
                    src="/breadDough2.png"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className="rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <IoPlayCircleOutline
                    size={200}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
                    onClick={() => {
                        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                    }}
                />
                <div className="flex justify-center items-center gap-5 absolute top-0 right-0 mt-16 mr-1 transform -translate-x-0 -translate-y-1/2">
                    <p className="text-5xl font-bold font-brush text-[#d0d0d0]">How It Happens</p>
                    <hr className="w-10 h-0.5 bg-current text-yellow-500 rounded-full" />
                </div>
            </article>
        );
    }

    if (isMobile) {
        return (
            <article
                id="how-it-happens"
                className="relative overflow-hidden h-[40vh] flex justify-center rounded-lg mb-20 mt-5 mr-5 ml-5"
            >
                <Image
                    src="/breadDough2.png"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className="rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <IoPlayCircleOutline
                    size={150}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
                    onClick={() => {
                        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                    }}
                />
                <div className="flex justify-center items-center gap-2 absolute top-0 right-0 mt-7 mr-1 transform -translate-x-0 -translate-y-1/2">
                    <p className="text-3xl font-bold font-brush text-[#d0d0d0]">How It Happens</p>
                    <hr className="w-10 h-0.5 bg-current text-yellow-500 rounded-full" />
                </div>
            </article>
        );
    }
}