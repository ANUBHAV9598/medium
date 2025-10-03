import { useState } from 'react';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Appbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
                {/* Left: Logo / Title */}
                <div className="flex items-center gap-2">
                    <h1
                        onClick={() => navigate('/blogs')}
                        className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight cursor-pointer hover:text-gray-700 transition-colors"
                    >
                        Medium
                    </h1>
                </div>

                {/* Right: Create Post + Avatar with Dropdown */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Create Post Button */}
                    <button
                        onClick={() => navigate('/publish')}
                        className={cn(
                            "px-4 py-2 bg-purple-600 text-[2.5vw] lg:text-[0.9vw] text-white font-medium rounded-full shadow-md",
                            "hover:bg-purple-700 transition-colors cursor-pointer",
                            "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
                        )}
                    >
                        New
                    </button>

                    {/* Avatar + Dropdown */}
                    <div className="relative">
                        <div onClick={() => setOpen(!open)} className="cursor-pointer">
                            <Avatar />
                        </div>
                        {open && (
                            <Dropdown onClose={() => setOpen(false)} />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Appbar;
