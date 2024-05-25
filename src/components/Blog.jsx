import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

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
          <p>{post.content}</p>
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
