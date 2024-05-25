import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      {currentPosts.map((post) => (
        <div key={post.id} className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            <Link to={`/blog/${post.id}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
            <img src={post.image} alt={post.title} className="mb-2 w-full h-auto" />
            <p>{post.description}</p>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Blog;
