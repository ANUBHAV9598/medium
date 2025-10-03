import { useEffect, useState } from 'react'
import axios from '../axios/axios'

interface Blog {
    id: string;
    author?: {
        name?: string;
    };
    name?: string;
    title: string;
    content: string;
    publishedDate: string;
}

interface Blogs {
    id: string;
    author?: {
        name?: string;
    };
    name?: string;
    title: string;
    content: string;
    publishedDate: string;
}

const useBlog = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`/blog/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            setBlog(res.data);
        })
        .catch((err) => {
            console.error("Error fetching blog:", err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);
    
    return { loading, blog };
}

const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);

    useEffect(() => {
        axios.get('/blog/bulk', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            setBlogs(res.data);
        })
        .catch((err) => {
            console.error("Error fetching blogs:", err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);
    
    return { loading, blogs };
}

export { useBlog, useBlogs }
