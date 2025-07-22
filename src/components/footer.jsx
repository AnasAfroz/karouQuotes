import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#FFEAFF] to-[#E6F3FF] py-8 font-rubik text-[#4B4B4B] shadow-inner">
            <div className="container mx-auto px-4 text-center">
                
                <div className="flex justify-center items-center mb-4">
                    <p className="text-lg">
                        Made by Anas with
                    </p>
                    <FaHeart className="text-red-500 mx-2 animate-pulse" size={20} />
                </div>

                <p className="text-md mb-6 italic">
                    "Today's beautiful and pink"
                </p>

                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://github.com/HAAZIQ-ALI" target="_blank" rel="noopener noreferrer" className="text-[#4B4B4B] hover:text-[#6B46C1] transform hover:scale-110 transition-transform duration-200">
                        <FaGithub size={24} />
                    </a>
                    
                </div>

                <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Haaziq . All Rights Reserved.
                    </p>
                    <p className="text-xs mt-1">
                        - 22nd July
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;