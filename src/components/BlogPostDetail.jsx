import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogPosts';
import { WEBSITE_NAME, WEBSITE_URL } from '../constants/constants';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  const postTitle = `${post.title} - ${WEBSITE_NAME}`;
  const fullOgUrl = post.ogUrl ? `${WEBSITE_URL}${post.ogUrl}` : null;
  const fullOgImage = post.ogImage ? `${WEBSITE_URL}${post.ogImage}` : null;
  const fullCanonicalUrl = post.canonicalUrl ? `${WEBSITE_URL}${post.canonicalUrl}` : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{postTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        {post.ogTitle && <meta property="og:title" content={post.ogTitle} />}
        {post.ogDescription && <meta property="og:description" content={post.ogDescription} />}
        {fullOgUrl && <meta property="og:url" content={fullOgUrl} />}
        {fullOgImage && <meta property="og:image" content={fullOgImage} />}
        {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mb-4 w-full h-auto" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostDetail;
