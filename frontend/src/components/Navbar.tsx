import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const Navbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => 
        localStorage.getItem('theme') === 'dark'
    );

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <div className={`fixed top-0 left-0 right-0 p-1 flex items-center justify-between shadow-md z-50 ${isDarkMode ? 'bg-gradient-to-r from-purple-700 via-blue-800 to-black' : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'}`}>
            <div className='ml-8 w-40 h-full'>
                <img src="/images/logo.png" alt="Logo" className="rounded-full" />
            </div>

            <div className="flex items-center w-1/2 mx-3">
                <input
                    type="text"
                    placeholder="Search..."
                    className={`flex-grow p-2 rounded-l-md border-none focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                />
                <button className={`bg-gray-800 text-white p-2 rounded-r-md ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                    <FaSearch />
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <select className={`bg-gray-200 p-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
                    <option>EN</option>
                    <option>ES</option>
                    <option>FR</option>
                    <option>DE</option>
                </select>
                <button className={`border-2 ${isDarkMode ? 'border-gray-400 text-gray-400' : 'border-white text-white'} py-2 px-4 rounded-md hover:${isDarkMode ? 'bg-gray-400 text-gray-800' : 'bg-white text-gray-800'} transition duration-300`} onClick={toggleTheme}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button className={`border-2 ${isDarkMode ? 'border-gray-400 text-gray-400' : 'border-white text-white'} py-2 px-4 rounded-md hover:${isDarkMode ? 'bg-gray-400 text-gray-800' : 'bg-white text-gray-800'} transition duration-300`}>
                    Login
                </button>
                <button className={`border-2 ${isDarkMode ? 'border-gray-400 text-gray-400' : 'border-white text-white'} py-2 px-4 rounded-md hover:${isDarkMode ? 'bg-gray-400 text-gray-800' : 'bg-white text-gray-800'} transition duration-300`}>
                    Signup
                </button>
                <FaShoppingCart className={`text-2xl cursor-pointer ${isDarkMode ? 'text-gray-400' : 'text-white'}`} />
            </div>
        </div>
    );
};

export default Navbar;
