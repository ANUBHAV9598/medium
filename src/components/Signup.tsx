import Quote from './ui/Quote';
import AuthForm from './ui/AuthForm';
import { motion } from 'framer-motion';

const Signup = () => {
    return (
        <div className="h-screen w-full grid lg:grid-cols-2 grid-cols-1 overflow-hidden bg-gray-50 relative">
        
        {/* Left Side: Quote + Gradient + Blobs */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-[#f99c10] via-[#f9b233] to-[#f9d16b] overflow-hidden p-8">
            {/* Animated blobs */}
            <motion.div
            className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#f99c10]/30 rounded-full filter blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
            className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#f9b233]/30 rounded-full filter blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Quote */}
            <div className="relative z-10 text-white text-center max-w-sm">
            <Quote />
            </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="flex items-center justify-center p-6">
            <motion.div
                className="w-full max-w-md p-10 bg-white rounded-3xl shadow-2xl backdrop-blur-md border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">
                Create Account
            </h2>
            <AuthForm type="signup" />
            </motion.div>
        </div>
        </div>
    );
};

export default Signup;
