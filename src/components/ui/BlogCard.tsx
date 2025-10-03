import Avatar from './Avatar'
import av from '../../assets/avatar.png'
import { formatDistanceToNow, isValid } from 'date-fns'
import { cn } from '../../lib/utils'
import { Link } from 'react-router-dom'

type BlogCardProps = {
    authorName: string
    title: string
    content: string
    publishedDate: string
    id: string
}

const BlogCard = ({ authorName, title, content, publishedDate, id }: BlogCardProps) => {
    // Safely format the published date into "x time ago"
    let timeAgo = 'Unknown date'

    if (publishedDate) {
        const dateObj = new Date(publishedDate)
        if (isValid(dateObj)) {
            timeAgo = formatDistanceToNow(dateObj, { addSuffix: true })
        }
    }

    return (
        <Link
            to={`/blog/${id}`}
            className={cn(
                "w-full max-w-4xl text-black flex flex-col md:flex-row justify-between items-start md:items-center",
                "p-4 md:p-6 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] gap-4 bg-white cursor-pointer"
            )}
        >
            {/* Left */}
            <div className="flex-1 flex flex-col gap-3">
                {/* Avatar, Name & Date */}
                <div className="flex items-center gap-2 flex-wrap">
                    <Avatar />
                    <h5 className="font-medium text-sm md:text-base">{authorName}</h5>
                    <h6 className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
                        <span className="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
                        {timeAgo}
                    </h6>
                </div>

                {/* Title & Content */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg md:text-xl font-bold leading-snug">{title}</h1>
                    <p className="text-sm md:text-base text-gray-700">{content}</p>
                </div>

                {/* Bottom */}
                <div>
                    <p className="text-xs md:text-sm text-gray-500">{timeAgo}</p>
                </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-40 h-40 md:h-48 flex-shrink-0">
                <img
                    className="w-full h-full object-cover rounded-md"
                    src={av}
                    alt="Blog illustration"
                />
            </div>
        </Link>
    )
}

export default BlogCard
