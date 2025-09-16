import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 z-40 w-full bg-[#f5f5dc]/95 backdrop-blur-md border-b border-gray-300 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Mobile Menu Button */}
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-700"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-gray-700 hover:text-blue-500 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-700 hover:text-blue-500 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className="text-gray-700 hover:text-blue-500 transition-colors"
                        >
                            Experience
                        </a>
                        <a
                            href="#education"
                            className="text-gray-700 hover:text-blue-500 transition-colors"
                        >
                            Education
                        </a>

                        {/* Location */}
                        <span className="ml-6 text-sm font-medium text-gray-600">
                            📍 Austin, Texas
                        </span>

                        <div className="flex items-center space-x-4 ml-6">
                            <a
                                href="https://github.com/abhishekdgoudar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/abhishekdgoudar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
