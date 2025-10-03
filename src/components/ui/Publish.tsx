import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "../../axios/axios";
import Appbar from "./Appbar";

const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePublish = async () => {
        if (!title.trim() || !content.trim()) {
            alert("Please fill in both title and content before publishing.");
            return;
        }

        try {
            setLoading(true);
            await axios.post("/blog", { title, content });
            setTitle("");
            setContent("");
            navigate("/blogs");
        } catch (error) {
            console.error("Error publishing blog:", error);
            alert("Something went wrong while publishing. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
            {/* Sticky Appbar */}
            <Appbar />

            {/* Main Content */}
            <motion.main 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-1 justify-center items-center px-6 py-12"
            >
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
                >
                    {/* Header */}
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
                    >
                        Publish Blog
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-gray-600 mb-8"
                    >
                        Share your thoughts with the world by publishing a new blog post.
                    </motion.p>

                    {/* Blog Form */}
                    <div className="flex flex-col gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Title</label>
                            <motion.input
                                whileFocus={{ scale: 1.01, borderColor: "#7C3AED" }}
                                type="text"
                                placeholder="Enter blog title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Content</label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01, borderColor: "#7C3AED" }}
                                placeholder="Write your blog content here..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={6}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                            />
                        </div>

                        {/* Publish Button */}
                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePublish}
                                disabled={loading}
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Publishing..." : "Publish 🚀"}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default Publish;
