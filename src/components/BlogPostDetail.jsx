import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "Content for blog post 1..." },
    { id: 2, title: "Blog Post 2", content: "Content for blog post 2..." },
    { id: 3, title: "Blog Post 3", content: "Content for blog post 3..." },
    { id: 4, title: "Blog Post 1", content: "Content for blog post 4..." },
    { id: 5, title: "Blog Post 2", content: "Content for blog post 5..." },
    { id: 6, title: "Blog Post 3", content: "Content for blog post 6..." },
    { id: 7, title: "Blog Post 1", content: "Content for blog post 7..." },
    { id: 8, title: "Blog Post 2", content: "Content for blog post 8..." },
    { id: 9, title: "Blog Post 3", content: "Content for blog post 9..." },
    { id: 10, title: "Blog Post 1", content: "Content for blog post 10..." },
    { id: 11, title: "Blog Post 2", content: "Content for blog post 11..." },
    { id: 12, title: "Blog Post 3", content: "Content for blog post 12..." },
  // Add more blog posts here
];

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostDetail;
