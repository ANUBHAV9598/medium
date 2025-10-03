import { cn } from "../../lib/utils"
import { formatDistanceToNow, isValid } from "date-fns"

interface SingleBlogProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const SingleBlog = ({ authorName, title, content, publishedDate }: SingleBlogProps) => {
    // Format published date into "x time ago"
    let timeAgo = "Unknown date";
    if (publishedDate) {
        const dateObj = new Date(publishedDate);
        if (isValid(dateObj)) {
            timeAgo = formatDistanceToNow(dateObj, { addSuffix: true });
        }
    }

    return (
        <div className={cn("w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 md:px-8")}>
            {/* Blog Container */}
            <article className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 md:p-10">
                
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                    {title}
                </h1>
                
                {/* Author + Date */}
                <div className="flex items-center gap-3 mb-6 text-sm md:text-base text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                            {authorName?.charAt(0) || "A"}
                        </div>
                        <span className="font-medium text-gray-800">{authorName}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <span>{timeAgo}</span>
                </div>

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                    <p>{content}</p>
                </div>
            </article>
        </div>
    )
}

export default SingleBlog
