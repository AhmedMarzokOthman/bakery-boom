"use client";

import { PiWhatsappLogoThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { useResponsive } from "../../hooks/useResponsive";

export default function Footer() {
    const { isDesktop, isMobile, isTablet } = useResponsive();

    if (isDesktop) {
        return (
            <footer id="footer" className="bg-[#333333] w-full h-[40%] flex flex-col">
                <nav className="flex flex-row justify-center items-center gap-5 pt-10">
                    <a href="#home" className="text-white">Home</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#about" className="text-white">About us</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#how-it-happens" className="text-white">How it happens</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#products" className="text-white">Products</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#feedback" className="text-white">Feedback</a>
                </nav>

                <div className="flex flex-col justify-center items-center gap-5 pt-10">
                    <h1 className="font-brush text-[#f6c686] text-4xl">Look for our in social networks</h1>
                    <div className="flex flex-row justify-center items-center gap-5">
                        <CiTwitter
                            onClick={() => window.open("https://x.com/bakeryboomeg", "_blank")}
                            className="text-white text-5xl cursor-pointer"
                        />
                        <PiWhatsappLogoThin
                            onClick={() => window.open("https://wa.me/201153612009", "_blank")}
                            className="text-white text-5xl cursor-pointer"
                        />

                        <SlSocialLinkedin
                            onClick={() => window.open("https://www.linkedin.com/company/bakery-boomeg/", "_blank")}
                            className="text-white text-4xl cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <p className="text-white text-center pt-10">Phone: +201153612009</p>
                        <p className="text-white text-center pt-10">Email: bakeryboomeg@gmail.com</p>
                    </div>
                    <p className="text-white/50 text-center pt-10">Copyright © 2023 by Ahmed Marzok</p>
                </div>
            </footer>
        );
    }

    if (isTablet) {
        return (
            <footer id="footer" className="bg-[#333333] w-full h-[40%] flex flex-col">
                <nav className="w-full flex flex-wrap justify-center items-center gap-2 pt-10">
                    <a href="#home" className="text-white">Home</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#about" className="text-white">About us</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#how-it-happens" className="text-white">How it happens</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#products" className="text-white">Products</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#feedback" className="text-white">Feedback</a>
                </nav>

                <div className="flex flex-col justify-center items-center gap-5 pt-10">
                    <h1 className="font-brush text-[#f6c686] text-4xl">Look for our in social networks</h1>
                    <div className="flex flex-row justify-center items-center gap-5">
                        <CiTwitter
                            onClick={() => window.open("https://x.com/bakeryboomeg", "_blank")}
                            className="text-white text-5xl cursor-pointer"
                        />
                        <PiWhatsappLogoThin
                            onClick={() => window.open("https://wa.me/201098556176", "_blank")}
                            className="text-white text-5xl cursor-pointer"
                        />
                        <SlSocialLinkedin
                            onClick={() => window.open("https://www.linkedin.com/company/bakery-boomeg/", "_blank")}
                            className="text-white text-4xl cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <p className="text-white text-center pt-10">Phone: +201153612009</p>
                        <p className="text-white text-center pt-10">Email: bakeryboomeg@gmail.com</p>
                    </div>
                    <p className="text-white/50 text-center pt-10">Copyright © 2023 by Ahmed Marzok</p>
                </div>
            </footer>
        );
    }

    if (isMobile) {
        return (
            <footer id="footer" className="bg-[#333333] w-full h-[40%] flex flex-col">
                <nav className="w-full flex flex-wrap justify-center items-center gap-2 pt-10">
                    <a href="#home" className="text-white">Home</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#about" className="text-white">About us</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#how-it-happens" className="text-white">How it happens</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#products" className="text-white">Products</a>
                    <p className="text-[#f6c686]">|</p>
                    <a href="#feedback" className="text-white">Feedback</a>
                </nav>

                <div className="flex flex-col justify-center items-center gap-5 pt-10">
                    <h1 className="font-brush text-center text-[#f6c686] text-3xl">Look for our in social networks</h1>
                    <div className="flex flex-row justify-center items-center gap-5">
                        <CiTwitter
                            onClick={() => window.open("https://x.com/bakeryboomeg", "_blank")}
                            className="text-white text-4xl cursor-pointer"
                        />
                        <PiWhatsappLogoThin
                            onClick={() => window.open("https://wa.me/201098556176", "_blank")}
                            className="text-white text-4xl cursor-pointer"
                        />
                        <SlSocialLinkedin
                            onClick={() => window.open("https://www.linkedin.com/company/bakery-boomeg/", "_blank")}
                            className="text-white text-3xl cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <p className="text-white text-center pt-10">Phone: +201153612009</p>
                        <p className="text-white text-center pt-10">Email: bakeryboomeg@gmail.com</p>
                    </div>
                    <p className="text-white/50 text-center pt-10">Copyright © 2023 by Ahmed Marzok</p>
                </div>
            </footer>
        );
    }
}