import AuthForm from './ui/AuthForm';
import { motion } from 'framer-motion';

const Signin = () => {
    return (
        <div className="w-full min-h-screen relative overflow-hidden bg-gray-50 flex items-center justify-center">
            {/* Blob SVGs */}
            <motion.div
                className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#f99c10]/40 rounded-full filter blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                style={{ clipPath: 'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)' }}
            />

            <motion.div
                className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#f9b233]/30 rounded-full filter blur-3xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                style={{ clipPath: 'polygon(50% 0%, 85% 25%, 70% 80%, 40% 100%, 20% 70%, 0% 40%, 25% 10%)' }}
            />

            <motion.div
                className="absolute top-1/4 right-[-150px] w-[400px] h-[400px] bg-[#f9d16b]/30 rounded-full filter blur-3xl"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                style={{ clipPath: 'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)' }}
            />

            {/* Centered Auth Card */}
            <motion.div
                className="relative w-full max-w-lg p-10 bg-white rounded-3xl shadow-2xl backdrop-blur-md z-10 border border-gray-200 transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center">
                    Welcome Back
                </h2>

                {/* Auth Form */}
                <AuthForm type="signin" />
            </motion.div>
        </div>
    );
};

export default Signin;
