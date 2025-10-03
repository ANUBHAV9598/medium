import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface DropdownProps {
    onClose: () => void; // Parent controls dropdown open/close
}

const Dropdown = ({ onClose }: DropdownProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        onClose();
        navigate("/signin");
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "w-52 bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden absolute right-0 mt-2"
            )}
        >
            <ul className="py-1">
                <li
                    onClick={handleLogoutClick}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 active:bg-red-100 cursor-pointer transition-colors font-medium"
                >
                    <FiLogOut className="text-lg" />
                    Logout
                </li>
            </ul>
        </motion.div>
    );
};

export default Dropdown;
