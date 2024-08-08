import React from 'react';
import { LiaGripfire } from "react-icons/lia";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = React.memo(() => {
    // Utility function to conditionally apply CSS classes
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <footer className={classNames(
            'bg-[#FAFDFF]', // Background color set to #FAFDFF
            'text-gray-800' // Text color for light mode
        )}>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    {/* Company Info */}
                    <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/3">
                        <div className="flex items-center space-x-4 mb-4">
                            <LiaGripfire className="h-8 w-auto text-gray-800 transition-colors duration-300" />
                            <span className="text-gray-800 text-xl font-semibold">Thay Technologies</span>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                <FaFacebook className="h-6 w-6" aria-label="Facebook" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                <FaInstagram className="h-6 w-6" aria-label="Instagram" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                <FaTwitter className="h-6 w-6" aria-label="Twitter" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                <FaGithub className="h-6 w-6" aria-label="GitHub" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                <FaYoutube className="h-6 w-6" aria-label="YouTube" />
                            </a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col lg:flex-row lg:w-2/3 lg:justify-end">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-gray-800 font-semibold mb-4">Solutions</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Marketing</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Analytics</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Commerce</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Insights</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-semibold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Pricing</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Documentation</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Guides</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">API Status</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Blog</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Jobs</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Press</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Partners</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-gray-800 font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Claim</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Privacy</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600">
                    <p>© 2024 Thay Technologies, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
