import React, { useState } from 'react';
import HeroSection from './common/HeroSection';
import BlogImage from '../assets/blog-image.png';
import Posts from './posts/Posts';
import Topic from './topic/topic';
import postsData from '../data/postsData';

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredPosts = selectedTopic === 'All'
    ? postsData.filter(post => post.type === "post")
    : postsData.filter(post => post.type === "post" && post.topics.includes(selectedTopic));

  return (
    <div>
      <HeroSection
        title="My Blog"
        description="a Dallas-based aspiring Developer on a mission to bring creativity to the digital world."
        imageSrc={BlogImage}
      />
      <Topic onSelectTopic={handleSelectTopic} />
      <Posts title="Blog Posts" posts={filteredPosts} showViewAll={true} />
    </div>
  );
};

export default Blog;
