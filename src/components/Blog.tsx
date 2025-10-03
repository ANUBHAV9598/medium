import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { cn } from "../lib/utils";
import Loading from "./ui/Loading";
import Appbar from "./ui/Appbar";

const Blog = () => {
    const { id } = useParams() as { id: string };
    const { loading, blog } = useBlog(id);

    if (!id) {
        return (
            <div className="flex h-screen w-full items-center justify-center text-red-500 text-lg font-semibold">
                Invalid blog id
            </div>
        );
    }

    return (
        <div
            className={cn(
                "w-full min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 text-gray-900"
            )}
        >
            {loading ? (
                <div className="flex h-screen items-center justify-center">
                    <Loading />
                </div>
            ) : blog ? (
                <>
                    <Appbar />
                    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-center">
                            {blog.title}
                        </h1>

                        {/* Author & Meta */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-gray-600 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{blog.author?.name || "Unknown Author"}</span>
                                <span className="hidden md:inline">·</span>
                                <span>{new Date(blog.publishedDate).toLocaleDateString()}</span>
                            </div>
                            <span className="italic">Estimated read: ~5 mins</span>
                        </div>

                        {/* Divider */}
                        <div className="border-b border-gray-200" />

                        {/* Blog Content */}
                        <article
                            className="prose prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-img:rounded-xl prose-a:text-blue-600"
                        >
                            {blog.content}
                        </article>
                    </div>
                </>
            ) : (
                <div className="flex h-screen items-center justify-center text-gray-500 text-lg">
                    Blog not found
                </div>
            )}
        </div>
    );
};

export default Blog;
