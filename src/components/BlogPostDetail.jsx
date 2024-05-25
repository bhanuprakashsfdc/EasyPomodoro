import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mb-4 w-full h-auto" />
      <p>{post.description}</p>
    </div>
  );
};

export default BlogPostDetail;
