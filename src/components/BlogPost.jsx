import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
