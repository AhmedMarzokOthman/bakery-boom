"use client"

import Image from "next/image";
import { useResponsive } from "../../hooks/useResponsive";

export default function AboutUs() {
    const { isMobile, isDesktop, isTablet } = useResponsive();
    const tools = [
        {
            text: "We use only natural ingredients that we grow Ourselves",
            mobileText: "Natural ingredients",
            image: "/tool1.png"
        },
        {
            text: "Carefully take care that all the ingredients have passed the most careful treatment",
            mobileText: "Quality ingredients",
            image: "/tool2.png"
        },
        {
            text: "We use only stone ovens for making delicious and fresh bread",
            mobileText: "Stone oven baked",
            image: "/tool3.png"
        },
        {
            text: "We care about what the result Will be a product",
            mobileText: "Quality results",
            image: "/tool4.png"
        }

    ];

    if (isDesktop) {
        return (
            <section id="about" className="flex flex-col justify-center mt-16">
                <div className="inline-flex flex-col items-center">
                    <h1 className="text-4xl font-brush">About us</h1>
                    <hr className="w-16 h-0.5 bg-current text-yellow-500 rounded-full" />
                </div>

                <div className="flex justify-center mt-2">
                    <h2 className="text-md font-medium text-[#666666] dark:text-white">Home bakery Craft and bread.</h2>
                </div>
                <p className="text-md font-medium text-[#666666] dark:text-white text-center">It is a modern bakery that keeps up with the times.</p>
                <p className="text-md font-medium text-[#666666] dark:text-white mt-4 w-1/2 mx-auto text-center">
                    Take care of the quality of products and that customers are always satisfied. The use of natural Ingredients that have passed strict control ensures the excellent quality that we naeema will be able to take dosinst all of our customers
                </p>

                <div className="flex justify-center items-center w-3/4 mx-auto mt-32 mb-32">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center h-full w-1/4 justify-center">
                            <Image
                                src={tool.image}
                                alt={tool.text}
                                width={150}
                                height={150}
                                priority={index === 0}
                                className="w-1/3"
                            />
                            <h3 className="text-md text-center font-medium text-[#666666] dark:text-white w-1/2">{tool.text}</h3>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    if (isTablet) {
        return (
            <article id="about" className="flex flex-col justify-center mt-16 mb-16">
                <div className="inline-flex flex-col items-center">
                    <p className="text-4xl font-brush">About us</p>
                    <hr className="w-16 h-0.5 bg-current text-yellow-500 rounded-full" />
                </div>

                <div className="flex justify-center mt-2"> <p className="text-md font-medium text-[#666666] dark:text-white">Home bakery Craft and bread.</p> </div>
                <div className="flex justify-center"> <p className="text-md font-medium text-[#666666] dark:text-white">It is a modern bakery that keeps up with the times.</p> </div>
                <div className="flex justify-center mt-4 w-3/4 mx-auto text-center"> <p className="text-md font-medium text-[#666666] dark:text-white">Take care of the quality of products and that customers are always satisfied. The use of natural Ingredients that have passed strict control ensures the excellent quality that we naeema will be able to take dosinst all of our customers</p> </div>

                <div className="flex justify-center items-center mt-20">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={tool.image}
                                alt="tool"
                                width={150}
                                height={150}
                                priority={index === 0}
                                className="w-1/2"
                            />
                            <p className="text-[12px] w-1/2 text-center font-medium text-[#666666] dark:text-white">{tool.mobileText}</p>
                        </div>
                    ))}
                </div>
            </article>
        )
    }

    if (isMobile) {
        return (
            <article id="about" className="flex flex-col justify-center mt-16 mb-16">
                <div className="inline-flex flex-col items-center">
                    <p className="text-4xl font-brush">About us</p>
                    <hr className="w-16 h-0.5 bg-current text-yellow-500 rounded-full" />
                </div>

                <div className="flex justify-center mt-2"> <p className="text-sm font-medium text-center text-[#666666] dark:text-white">Home bakery Craft and bread.</p> </div>
                <div className="flex justify-center"> <p className="text-sm text-center font-medium text-[#666666] dark:text-white">It is a modern bakery that keeps up with the times.</p> </div>
                <div className="flex justify-center mt-4 w-3/4 mx-auto text-center"> <p className="text-sm font-medium text-[#666666] dark:text-white">Take care of the quality of products and that customers are always satisfied. The use of natural Ingredients that have passed strict control ensures the excellent quality that we naeema will be able to take dosinst all of our customers</p> </div>

                <div className="flex justify-around items-center mt-20">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={tool.image}
                                alt="tool"
                                width={150}
                                height={150}
                                priority={index === 0}
                                className="w-1/2"
                            />
                            <p className="text-[10px] w-1/2 text-center font-medium text-[#666666] dark:text-white">
                                {tool.mobileText}
                            </p>
                        </div>
                    ))}
                </div>
            </article>
        )
    }
}




// flex justify - center items - center mt - 20 mb - 10
// flex flex - col items - center
// text - md w - 1 / 2 text - center font - medium text - [#666666] dark: text - white