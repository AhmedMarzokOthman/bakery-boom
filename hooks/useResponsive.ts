import { useState, useEffect } from "react";

export function useResponsive() {
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
    }, []);

    return { isMobile, isDesktop, isTablet };
}