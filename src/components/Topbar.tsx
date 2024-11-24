import React from 'react';
import "../styles/globals.css";

import { FiUser } from "react-icons/fi";

const Topbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 text-white bg-black z-10 flex items-center px-4 justify-between">
            <div>
                <span className="text-2xl">EncontreMe</span>
                <span className="text-primaryBlue text-xs">✦</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-2xl">Username</span>
                <div className="rounded-full bg-white p-2">
                    <FiUser className='h-7 w-7 text-black' />
                </div>
            </div>
        </nav>
    );
};

export default Topbar;