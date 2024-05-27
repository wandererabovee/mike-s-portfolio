// src/components/Posts.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = ({ title, posts, showViewAll = false }) => {
  return (
    <div className="posts">
      <div className="Title">
        <h2>{title}</h2>
        {showViewAll && <Link to="/blog" className="view-all">View all</Link>}
      </div>
      <div className="post">
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link to={post.link} className="post-link">
                <span className="title">{post.title}</span>
                <span className="date">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
