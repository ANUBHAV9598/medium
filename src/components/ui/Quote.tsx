import { motion } from "framer-motion";

const Quote = () => {
    return (
        <div className="h-full w-full flex items-center justify-center px-6 py-12 lg:py-0">
        <motion.div
            className="max-w-lg text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Quote Text */}
            <motion.h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-snug lg:leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            >
            "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
            </motion.h1>

            {/* Author */}
            <motion.h2
            className="mt-4 text-md sm:text-lg md:text-xl font-semibold text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ x: 3 }}
            >
            Jules Winnfield
            </motion.h2>

            {/* Title / Company */}
            <motion.p
            className="mt-1 text-sm sm:text-base md:text-md text-white/70 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            whileHover={{ x: 2 }}
            >
            CEO, Acme Inc
            </motion.p>
        </motion.div>
        </div>
    );
};

export default Quote;
