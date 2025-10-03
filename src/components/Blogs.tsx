import { useBlogs } from '../hooks';
import Appbar from './ui/Appbar';
import BlogCard from './ui/BlogCard';
import BlogCardSkeleton from './ui/BlogCardSkeleton';

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Appbar />
      <div className="flex-1 w-full overflow-y-auto flex flex-col items-center gap-6 p-6">
        {loading
          ? // Show 3 skeletons while loading
            [...Array(3)].map((_, i) => <BlogCardSkeleton key={i} />)
          : blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog?.author?.name || 'Unknown'}
                title={blog.title}
                content={blog.content}
                publishedDate={blog.publishedDate}
              />
            ))}
      </div>
    </div>
  );
};

export default Blogs;
