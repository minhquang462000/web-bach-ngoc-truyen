"use client";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export interface IButtonBackToTopPageProps { }

export default function ButtonBackToTopPage(props: IButtonBackToTopPageProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Kiểm tra vị trí cuộn trang
    const toggleVisibility = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Cuộn lên đầu trang với hiệu ứng mượt mà
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-16 right-10 z-50 transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
            <button
                onClick={scrollToTop}
                className="hover:scale-110 border rounded-full bg-[#128c7e] shadow w-10 h-10 flex items-center justify-center transition-all duration-300"
            >
                <MdOutlineKeyboardDoubleArrowUp color="white" size={20} />
            </button>
        </div>
    );
}
