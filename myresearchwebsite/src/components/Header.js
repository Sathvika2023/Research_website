import React from "react";

const Header = () => (
    <div className="flex flex-col bg-white font-mono">
        <header className="relative top-10 left-0 w-full px-12 py-5 flex justify-around items-center gap-10 bg-transparent z-50 shadow-md shadow-blue-200">
            <div className="flex items-center text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                DSCE Research
            </div>
            <nav>
                <ul className="flex space-x-8 list-none">
                    <li>
                        <a
                            href="#research"
                            className="text-blue-600 text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-200"
                        >
                            Research
                        </a>
                    </li>
                    <li>
                        <a
                            href="#faculty"
                            className="text-blue-600 text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-200"
                        >
                            Faculty
                        </a>
                    </li>
                    <li>
                        <a
                            href="#students"
                            className="text-blue-600 text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-200"
                        >
                            Students
                        </a>
                    </li>
                    <li>
                        <a
                            href="#researchCenters"
                            className="text-blue-600 text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-200"
                        >
                            Research Centers
                        </a>
                    </li>
                    <li className="group relative">
                        <a
                            href="#join"
                            className="text-blue-600 text-2xl font-normal hover:text-yellow-400 transition-colors duration-200"
                        >
                            More
                        </a>
                        <ul className="absolute left-0 hidden group-hover:block bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-xl backdrop-blur-lg transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out p-2">
                            <li className="block">
                                <a
                                    href=""
                                    className="block py-3 px-6 text-left text-l hover:text-yellow-400 hover:scale-105 transform transition-all duration-200"
                                >
                                    IEDC
                                </a>
                            </li>
                            <li className="block">
                                <a
                                    href=""
                                    className="block py-3 px-6 text-left text-l hover:text-yellow-400 hover:scale-105 transform transition-all duration-200"
                                >
                                    Patents
                                </a>
                            </li>
                            <li className="block">
                                <a
                                    href=""
                                    className="block py-3 px-6 text-left text-l hover:text-yellow-400 hover:scale-105 transform transition-all duration-200"
                                >
                                    Funded Projects
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
);

export default Header;
