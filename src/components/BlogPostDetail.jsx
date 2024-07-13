import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogPosts';
import Timer from '../components/Timer'

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content="Your Page Title Here" />
        <meta property="og:type" content="website" />
        <meta property="og:URL" content="https://www.rankmath.com" />
        <meta property="og:image" content="https://www.rankmath.com/wp-content/uploads/2022/07/rankmath-og.png" />
        <meta property="og:description" content="Write your page description here." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Timer />
      <img src={post.image} alt={post.title} className="mb-4 w-full h-auto" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostDetail;
