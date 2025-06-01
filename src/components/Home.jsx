import { useState, useCallback } from 'react';
import BlogCard from './BlogCard';
import PostForm from './PostForm';

// Initial blog posts data
const initialPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'React is a powerful JavaScript library for building user interfaces. In this post, we\'ll explore the basics of React and how to get started with your first project.',
    author: 'John Doe',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'The Power of Modern CSS',
    content: 'Modern CSS provides powerful features for building beautiful user interfaces. Learn how to use modern CSS effectively in your projects.',
    author: 'Jane Smith',
    date: '2024-03-14'
  }
];

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handlePost = useCallback((newPost) => {
    const post = {
      id: Date.now(), // Using timestamp as ID for better uniqueness
      ...newPost,
      author: 'Current User',
      date: new Date().toISOString().split('T')[0]
    };
    setPosts(prevPosts => [post, ...prevPosts]);
  }, []);

  return (
    <div className="home-container">
      <PostForm onPost={handlePost} />
      <div className="posts-container">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 