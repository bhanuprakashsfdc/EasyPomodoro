import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mb-4 w-full h-auto" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostDetail;
