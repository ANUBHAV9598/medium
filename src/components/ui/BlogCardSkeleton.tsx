import { cn } from "../../lib/utils";

const BlogCardSkeleton = () => {
    return (
        <div
        className={cn(
            "w-full max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center",
            "p-4 md:p-6 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] gap-4 bg-white overflow-hidden relative"
        )}
        >
            {/* Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-50 animate-shimmer" />
            {/* Left */}
            <div className="flex-1 flex flex-col gap-3 relative z-10">
                {/* Avatar, Name & Date */}
                <div className="flex items-center gap-2 flex-wrap">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <div className="w-24 h-4 bg-gray-300 rounded" />
                <div className="w-16 h-3 bg-gray-300 rounded" />
                </div>

                {/* Title & Content */}
                <div className="flex flex-col gap-2">
                <div className="w-3/4 h-5 bg-gray-300 rounded" />
                <div className="w-full h-4 bg-gray-300 rounded" />
                <div className="w-5/6 h-4 bg-gray-300 rounded" />
                </div>

                {/* Bottom */}
                <div className="w-20 h-3 bg-gray-300 rounded" />
            </div>

            {/* Right (Image placeholder) */}
            <div className="w-full md:w-40 h-40 md:h-48 flex-shrink-0 relative z-10">
                <div className="w-full h-full bg-gray-300 rounded-md" />
            </div>
        </div>
    );
};

export default BlogCardSkeleton;
