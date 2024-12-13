"use client";

import Image from "next/image";
import { useResponsive } from "../hooks/useResponsive";

export default function OnlyFreshBreadComponent() {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    if (isDesktop) {
        return (
            <article className="flex justify-between items-center w-[90%] mx-auto">
                <div className="">
                    <div className="flex flex-row items-center">
                        <div><hr className="w-16 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full rotate-90" /></div>
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-brush dark:text-white text-[#3f3f3f]">Only fresh bread</h1>
                            <h3 className="text-2xl font-medium text-[#666666] dark:text-white">How we do it!</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-1 ml-16">
                        <h5 className="text-md font-normal w-2/3 text-[#666666] dark:text-white">The best bread is from the Russian oven, in extreme cases, cooked in the oven, and necessarily - mixed by hand.</h5>
                        <h5 className="text-md font-normal w-2/3 text-[#666666] dark:text-white">It carries not only the benefit of cereals, but also our love, a part Of our soul.</h5>
                        <h5 className="text-md font-normal w-2/3 text-[#666666] dark:text-white">Always cooked with love. That's why it's so beautiful</h5>
                    </div>
                </div>

                <Image
                    src="https://img.freepik.com/premium-photo/basket-bread-buns_501761-2688.jpg"
                    alt="bread"
                    width={500}
                    height={500}
                    unoptimized
                    className="rounded-lg"
                />
            </article>
        )
    }
    if (isTablet) {
        return (
            <article className="flex justify-between items-center w-[90%] mx-auto">
                <div className="">
                    <div className="flex flex-row items-center">
                        <div><hr className="w-16 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full rotate-90" /></div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-brush dark:text-white text-[#3f3f3f]">Only fresh bread</h1>
                            <h3 className="text-xl font-medium text-[#666666] dark:text-white">How we do it!</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-1 ml-16">
                        <h5 className="text-md font-normal w-2/3 text-[#666666] dark:text-white">The best bread is from the Russian oven, in extreme cases, cooked in the oven, and necessarily - mixed by hand.</h5>
                        <h5 className="text-md font-normal w-2/3 text-[#666666] dark:text-white">It carries not only the benefit of cereals, but also our love, a part Of our soul.</h5>
                        <h5 className="text-md font-normal w-2/3 text-[#666666] dark:text-white">Always cooked with love. That's why it's so beautiful</h5>
                    </div>
                </div>

                <Image
                    src="https://img.freepik.com/premium-photo/basket-bread-buns_501761-2688.jpg"
                    alt="bread"
                    width={300}
                    height={300}
                    unoptimized
                    className="rounded-lg"
                />
            </article>
        )
    }

    if (isMobile) {
        return (
            <article className="flex flex-col mb-10">
                <div className="flex justify-center w-[90%] mx-auto rounded-t-md overflow-hidden pr-10 pl-10">
                    <Image
                        src="https://img.freepik.com/premium-photo/basket-bread-buns_501761-2688.jpg"
                        alt="bread"
                        width={500}
                        height={500}
                        unoptimized
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col pt-5 pr-3 pl-3 w-[95%] mx-auto">
                    <div className="flex flex-row items-center">
                        <div>
                            <h1 className="text-yellow-500 rotate-90">_______</h1>
                        </div>
                        <div>
                            <h1 className="text-3xl font-brush dark:text-white text-[#3f3f3f]">Only fresh bread</h1>
                            <h3 className="text-lg font-medium text-[#666666] dark:text-white">How we do it!</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-1 pr-12 pl-12">
                        <h5 className="text-sm font-normal w-full text-[#666666] dark:text-white">Hand-mixed Russian bread.</h5>
                        <h5 className="text-sm font-normal w-full text-[#666666] dark:text-white">Natural & made with love.</h5>
                        <h5 className="text-sm font-normal w-full text-[#666666] dark:text-white">Baked from the heart.</h5>
                    </div>
                </div>
            </article>
        )
    }
}