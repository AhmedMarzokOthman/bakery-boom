"use client"

import Image from "next/image";

import { useResponsive } from "../hooks/useResponsive";
import { useState } from "react";

export default function Products() {

    const { isDesktop, isTablet, isMobile } = useResponsive();

    const products = [
        {
            name: "Soft Bread",
            image: "https://wallpapercave.com/wp/wp3072642.jpg",
            price: 3 + "$"
        },
        {
            name: "Butter Cakes",
            image: "https://wallpapercave.com/wp/wp3072549.jpg",
            price: 4 + "$"
        },
        {
            name: "Rye Bread",
            image: "https://pngimg.com/uploads/bread/bread_PNG2280.png",
            price: 3 + "$"
        },
        {
            name: "Blueberry Muffins",
            image: "https://pngimg.com/uploads/muffin/muffin_PNG65.png",
            price: 2 + "$"
        },
        {
            name: "Focaccia",
            image: "https://pngimg.com/uploads/bread/bread_PNG2289.png",
            price: 4 + "$"
        },
        {
            name: "Bagels",
            image: "https://pngimg.com/uploads/bagel/bagel_PNG42.png",
            price: 2 + "$"
        },
        {
            name: "Danish Pastry",
            image: "https://pngimg.com/uploads/croissant/croissant_PNG46.png",
            price: 2.5 + "$"
        },
        {
            name: "Wheat Bread",
            image: "https://pngimg.com/uploads/bread/bread_PNG2287.png",
            price: 3.5 + "$"
        },
        {
            name: "Donuts",
            image: "https://pngimg.com/uploads/donut/donut_PNG47.png",
            price: 3 + "$"
        },
    ];
    const [isShowAll, setIsShowAll] = useState(false);

    const displayedProducts = isShowAll ? products : products.slice(0, 6);

    if (isDesktop) {
        return (
            <article id="products" className="flex flex-col items-center justify-center mt-16 p-10">
                <h1 className="text-5xl font-brush dark:text-white text-[#3f3f3f]">Product Catalog</h1>
                <hr className="w-56 mt-3 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full" />
                <div className="flex flex-col items-center justify-center mt-5 text-center">
                    <p className="text-md font-normal text-[#666666] dark:text-white">Check out the wide selection Of our range, there is not only bread.</p>
                    <p className="text-md font-normal text-[#666666] dark:text-white">We are sure you will like it</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-[1400px] mx-auto">
                    {displayedProducts.map((product, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center 
                                     bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden
                                     transition-all duration-300 ease-in-out
                                     hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                     hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square overflow-hidden bg-gray-50/5 
                                          flex items-center justify-center">
                                <div className="relative w-3/4 h-3/4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain
                                                 transition-transform duration-300 ease-in-out
                                                 group-hover:scale-110"
                                        unoptimized
                                        priority={index < 6}
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col items-center justify-center w-full p-4 
                                          bg-gradient-to-t from-gray-50/10 to-transparent">
                                <h1 className="text-2xl font-light text-[#3f3f3f] dark:text-white
                                             transition-colors duration-300
                                             group-hover:text-yellow-500">
                                    {product.name}
                                </h1>
                                <p className="text-lg font-medium text-[#666666] dark:text-gray-300 mt-1">
                                    {product.price}
                                </p>


                                {/* Hover Overlay Button */}
                                {/* <div className="absolute flex-row inset-0 flex items-start pt-5 justify-center 
                                              opacity-0 transition-opacity duration-300
                                              group-hover:opacity-100">
                                    <button className="px-6 py-2 dark:text-white text-[#3f3f3f] font-medium
                                                     text-2xl flex items-center justify-center gap-4
                                                     transform -translate-y-4 opacity-0
                                                     transition-all duration-300 ease-in-out
                                                     group-hover:translate-y-0 group-hover:opacity-100">
                                        <hr className="flex-grow w-20 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full" />
                                        <span className="mx-2 whitespace-nowrap">{product.name}</span>
                                        <hr className="flex-grow w-20 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full" />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="mt-5 px-16 py-2 flex items-center w-full justify-center gap-16"
                    onClick={() => { setIsShowAll(!isShowAll) }}
                >
                    <hr className="text-yellow-500 w-[80%] h-0.5 bg-current border-1 border-yellow-500 rounded-full" />
                    <p className="text-center text-lg min-w-[100px] font-normal text-[#666666] dark:text-white ">{isShowAll ? "Show Less" : "Show All"}</p>
                    <hr className="text-yellow-500 w-[80%] h-0.5 bg-current border-1 border-yellow-500 rounded-full" />

                </button>
            </article>
        )
    }

    if (isTablet) {
        return (
            <article id="products" className="flex flex-col items-center justify-center mt-16 p-10">
                <h1 className="text-5xl font-brush dark:text-white text-[#3f3f3f]">Product Catalog</h1>
                <hr className="w-56 mt-3 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full" />
                <div className="flex flex-col items-center justify-center mt-5 text-center">
                    <p className="text-md font-normal text-[#666666] dark:text-white">Check out the wide selection Of our range, there is not only bread.</p>
                    <p className="text-md font-normal text-[#666666] dark:text-white">We are sure you will like it</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-[1400px] mx-auto">
                    {displayedProducts.map((product, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center 
                                     bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden
                                     transition-all duration-300 ease-in-out
                                    "
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square overflow-hidden bg-gray-50/5 
                                          flex items-center justify-center">
                                <div className="relative w-3/4 h-3/4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain
                                                 transition-transform duration-300 ease-in-out
                                                 "
                                        unoptimized
                                        priority={index < 6}
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col items-center justify-center w-full p-4 
                                          bg-gradient-to-t from-gray-50/10 to-transparent">
                                <h1 className="text-2xl font-light text-[#3f3f3f] dark:text-white
                                             transition-colors duration-300">
                                    {product.name}
                                </h1>
                                <p className="text-lg font-medium text-[#666666] dark:text-gray-300 mt-1">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="mt-5 px-4 py-2 flex items-center w-full justify-center gap-10"
                    onClick={() => { setIsShowAll(!isShowAll) }}
                >
                    <hr className="text-yellow-500 w-[80%] h-0.5 bg-current border-1 border-yellow-500 rounded-full" />
                    <p className="text-center text-lg min-w-[100px] font-normal text-[#666666] dark:text-white ">{isShowAll ? "Show Less" : "Show All"}</p>
                    <hr className="text-yellow-500 w-[80%] h-0.5 bg-current border-1 border-yellow-500 rounded-full" />

                </button>
            </article>
        )
    }

    if (isMobile) {
        return (
            <article id="products" className="flex flex-col items-center justify-center mt-16 p-10">
                <h1 className="text-4xl font-brush dark:text-white text-[#3f3f3f]">Product Catalog</h1>
                <hr className="w-44 mt-3 h-0.5 bg-current border-1 border-yellow-500 text-yellow-500 rounded-full" />
                <div className="flex flex-col items-center justify-center mt-5 text-center">
                    <p className="text-md font-normal text-[#666666] dark:text-white">Check out the wide selection Of our range, there is not only bread.</p>
                    <p className="text-md font-normal text-[#666666] dark:text-white">We are sure you will like it</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-[1400px] mx-auto">
                    {displayedProducts.map((product, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center 
                                     bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden
                                     transition-all duration-300 ease-in-out
                                    "
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square overflow-hidden bg-gray-50/5 
                                          flex items-center justify-center">
                                <div className="relative w-3/4 h-3/4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain
                                                 transition-transform duration-300 ease-in-out
                                                 "
                                        unoptimized
                                        priority={index < 6}
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col items-center justify-center w-full p-4 
                                          bg-gradient-to-t from-gray-50/10 to-transparent">
                                <h1 className="text-2xl font-light text-[#3f3f3f] dark:text-white
                                             transition-colors duration-300">
                                    {product.name}
                                </h1>
                                <p className="text-lg font-medium text-[#666666] dark:text-gray-300 mt-1">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="mt-5 flex items-center w-full justify-center"
                    onClick={() => { setIsShowAll(!isShowAll) }}
                >
                    <hr className="text-yellow-500 w-[90%] h-0.5 bg-current border-1 border-yellow-500 rounded-full" />
                    <p className="text-center text-lg min-w-[100px] font-normal text-[#666666] dark:text-white ">{isShowAll ? "Show Less" : "Show All"}</p>
                    <hr className="text-yellow-500 w-[90%] h-0.5 bg-current border-1 border-yellow-500 rounded-full" />

                </button>
            </article>
        )
    }
}
