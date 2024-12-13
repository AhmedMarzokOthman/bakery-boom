"use client";

import { useResponsive } from "../hooks/useResponsive";
import Image from "next/image";

export default function FeedbackComponent() {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    if (isDesktop) {
        return (
            <article
                id="feedback"
                className="relative overflow-hidden h-[60vh] flex justify-center mb-16 mr-16 ml-16"
            >
                <Image
                    src="https://img.freepik.com/premium-photo/black-white-photo-wheat_814249-734.jpg"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className=" object-cover"
                    unoptimized
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/85" />

                <div className="absolute inset-0 flex items-center px-10">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row items-center gap-4">
                            <div>
                                <hr className="w-16 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full rotate-90" />
                            </div>
                            <div className="flex flex-col text-white">
                                <h1 className="text-5xl font-brush">Feedback form</h1>
                                <h3 className="text-2xl font-medium">Find out first</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 ml-16 text-white">
                            <h5 className="text-md font-normal w-2/3">If you want to be aware of all the new products, promotions or just leave a message or review about our products.</h5>
                            <h5 className="text-md font-normal w-2/3">Then you here : )</h5>

                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-end px-10">
                    <form className="w-1/3 flex flex-col gap-4 bg-white/1 p-8 rounded-lg">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full mt-10 h-10 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300
                                     outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300 resize-none
                                     placeholder:absolute placeholder:bottom-2
                                     vertical-align: bottom flex items-end
                                     overflow-hidden"
                        />
                        <div className="flex justify-end items-end pr-2">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#d8ae7e] text-white rounded-full
                                     hover:bg-[#d8ae7e]/80 transition-colors duration-300
                                     font-medium"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </article>
        )
    }

    if (isTablet) {
        return (
            <article
                id="feedback"
                className="relative overflow-hidden h-[60vh] flex justify-center mb-16 mr-9 ml-9"
            >
                <Image
                    src="https://img.freepik.com/premium-photo/black-white-photo-wheat_814249-734.jpg"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className=" object-cover"
                    unoptimized
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/85" />

                <div className="absolute inset-0 flex items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row items-center gap-4">
                            <div>
                                <hr className="w-16 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full rotate-90" />
                            </div>
                            <div className="flex flex-col text-white">
                                <h1 className="text-5xl font-brush">Feedback form</h1>
                                <h3 className="text-2xl font-medium">Find out first</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 ml-16 text-white">
                            <h5 className="text-md font-normal w-1/2">If you want to be aware of all the new products, promotions or just leave a message or review about our products.</h5>
                            <h5 className="text-md font-normal w-2/3">Then you here : )</h5>

                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-end px-10">
                    <form className="w-1/2 flex flex-col gap-4 bg-white/1 p-8 rounded-lg">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full mt-10 h-10 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300
                                     outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300 resize-none
                                     placeholder:absolute placeholder:bottom-2
                                     vertical-align: bottom flex items-end
                                     overflow-hidden"
                        />
                        <div className="flex justify-end items-end pr-2">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#d8ae7e] text-white rounded-full
                                     hover:bg-[#d8ae7e]/80 transition-colors duration-300
                                     font-medium text-sm"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </article>
        )
    }

    if (isMobile) {
        return (
            <article id="feedback" className="relative overflow-hidden h-[75vh] flex justify-center mb-16 mr-4 ml-4">
                <Image
                    src="https://img.freepik.com/premium-photo/black-white-photo-wheat_814249-734.jpg"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    unoptimized
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/85" />

                <div className="absolute inset-0 flex flex-col items-start pt-10">
                    <div className="flex flex-row items-center gap-4">
                        <div>
                            <hr className="w-16 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full rotate-90" />
                        </div>
                        <div className="flex flex-col text-white">
                            <h1 className="text-4xl font-brush">Feedback form</h1>
                            <h3 className="text-xl font-medium">Find out first</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-white mt-4 ml-8 w-[80%]">
                        <h5 className="text-sm font-normal">If you want to be aware of all the new products, promotions or just leave a message or review about our products.</h5>
                        <h5 className="text-sm font-normal">Then you here : )</h5>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <form className="w-[85%] flex flex-col gap-4 bg-white/1 p-6 rounded-lg mt-8">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-2 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300 outline-none placeholder:absolute placeholder:left-0
                                     focus:outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full mt-10 h-10 bg-transparent rounded-md 
                                     border border-b-white/50 border-r-transparent border-t-transparent border-l-transparent
                                     text-white placeholder-gray-300
                                     outline-none focus:border-b-white/50 backdrop-blur-[1px]
                                     transition-all duration-300 resize-none
                                     placeholder:absolute placeholder:bottom-2
                                     vertical-align: bottom flex items-end
                                     overflow-hidden"
                            />
                            <div className="flex justify-end items-end pr-2">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#d8ae7e] text-white rounded-full
                                     hover:bg-[#d8ae7e]/80 transition-colors duration-300
                                     font-medium text-sm"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        )
    }
}