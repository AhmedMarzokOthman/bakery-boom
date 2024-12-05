"use client"

import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
} from "@/components/ui/carousel"
import React, { useState, useCallback, useEffect } from "react";

export default function SwippingImages() {
    const images = [
        "/bakery_sample3.png",
        "https://wallup.net/wp-content/uploads/2018/03/19/586318-bakery-bread-photography.jpg",
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768 && window.innerWidth >= 500 || window.innerWidth <= 500);
            setIsDesktop(window.innerWidth >= 1024);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });


    const [api, setApi] = React.useState<CarouselApi>();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    React.useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrentImageIndex(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = useCallback(
        (index: number) => {
            api?.scrollTo(index);
            setCurrentImageIndex(index);
        },
        [api]
    );

    if (isDesktop) {
        return (
            <article>
                <Carousel
                    plugins={[plugin.current]}
                    setApi={setApi}
                    className="relative pl-4 pr-4 md:pl-6 md:pr-6 lg:pl-6 lg:pr-6 pt-4 md:pt-1 md:pb-3 lg:pb-3 rounded-xl overflow-hidden"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative overflow-hidden h-[70vh] flex justify-center rounded-xl">
                                    <Image
                                        src={image}
                                        alt="Background"
                                        // fill
                                        width={2000}
                                        height={2000}
                                        sizes="100vw"
                                        priority={index === 0}
                                        unoptimized
                                        className="rounded-xl object-cover"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                                    <div className="absolute top-0 bottom-0 flex flex-col items-center justify-center">
                                        <p className="font-alexandria font-light text-white text-xl">EVERY DAY WE MAKE</p>
                                        <p className="w-3/4 text-center font-baskerville font-bold text-white text-8xl">Freshly Baked Bread</p>
                                        <button className="bg-transparent border border-solid border-white mt-20 px-5 py-2 text-sm text-white">VIEW MORE</button>
                                    </div>
                                    <div className="fixed flex gap-2 items-center bottom-0 pb-10">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-5 h-2 rounded-full opacity-70 hover:opacity-80 cursor-pointer ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                                                onClick={() => scrollTo(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </article>
        )
    }

    if (isTablet) {
        return (
            <article>
                <Carousel
                    plugins={[plugin.current]}
                    setApi={setApi}
                    className="relative pl-4 pr-4 md:pl-5 md:pr-5 lg:pl-5 lg:pr-5 pt-4 md:pt-1 pb-3 rounded-xl overflow-hidden"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative overflow-hidden h-[60vh] flex justify-center rounded-xl">
                                    <Image
                                        src={image}
                                        alt="Background"
                                        fill
                                        sizes="100vw"
                                        priority={index === 0}
                                        unoptimized
                                        className="rounded-xl object-cover"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                                    <div className="absolute top-0 bottom-0 flex flex-col items-center justify-center">
                                        <p className="font-alexandria font-light text-white text-xl">EVERY DAY WE MAKE</p>
                                        <p className="w-3/4 text-center font-baskerville font-bold text-white text-8xl">Freshly Baked Bread</p>
                                        <button className="bg-transparent border border-solid border-white mt-20 px-5 py-2 text-sm text-white">VIEW MORE</button>
                                    </div>
                                    <div className="fixed flex gap-2 items-center bottom-0 pb-10">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-5 h-2 rounded-full opacity-70 hover:opacity-80 cursor-pointer ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                                                onClick={() => scrollTo(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </article>
        )
    }

    if (isMobile) {
        return (
            <article>
                <Carousel
                    plugins={[plugin.current]}
                    setApi={setApi}
                    className="relative pl-1 pr-1 rounded-xl overflow-hidden"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative rounded-xl overflow-hidden h-[30vh] flex justify-center">
                                    <Image
                                        src={image}
                                        alt="Background"
                                        fill
                                        sizes="100vw"
                                        priority={index === 0}
                                        unoptimized
                                        className="rounded-xl object-cover"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                                    <div className="absolute top-0 bottom-0 flex flex-col items-center justify-center">
                                        <p className="font-alexandria font-light text-white text-md">EVERY DAY WE MAKE</p>
                                        <p className="w-3/4 text-center font-baskerville font-bold text-white text-4xl">Freshly Baked Bread</p>
                                        <button className="bg-transparent border border-solid border-white mt-5 px-3 py-2 text-sm text-white">VIEW MORE</button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </article>
        )
    }
}