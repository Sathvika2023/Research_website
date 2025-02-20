import react from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mt-0">
        <div className="container mx-auto px-8">
            <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">DSCE Research</div>
                <div className="flex space-x-6">
                    <a
                        href="https://www.facebook.com"
                        className="text-white text-2xl hover:text-yellow-400 transition duration-200"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        className="text-white text-2xl hover:text-yellow-400 transition duration-200"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="text-white text-2xl hover:text-yellow-400 transition duration-200"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        className="text-white text-2xl hover:text-yellow-400 transition duration-200"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-lg">© 2025 DSCE Research. All rights reserved.</p>
                <p className="mt-4 text-sm">Designed by DSCE Team</p>
            </div>
        </div>
    </footer>
);

export default Footer;