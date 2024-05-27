// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './common/HeroSection';
import HomeImage from '../assets/home-image.png';
import Posts from './posts/Posts';
import Card from './cards/Cards'
import postsData from './data/postsData';

const Home = () => {
  const latestPosts = postsData.filter(post => post.type === 'post').slice(0, 3);
  const latestProjects = postsData.filter(post => post.type === 'project').slice(0, 3);

  return (
    <div>
      <HeroSection
        title="Hey, I'm Mike"
        description="a Dallas-based aspiring Frontend Developer on a mission to bring creativity to the digital world."
        imageSrc={HomeImage}
      />
      <Posts title="Latest Posts" posts={latestPosts} showViewAll={true} />
      <div className="latest-projects">
        <div className="Title">
          <h2>Latest Projects</h2>
          <Link to="/projects" className="view-all">View all</Link>
        </div>
        <div className="project-cards">
          {latestProjects.map((project, index) => (
            <Card
              key={index}
              year={project.date}
              title={project.title}
              description={project.description}
              actions={[
                { label: "Article", url: `/blog/${project.id}` },
                { label: "Demo", url: project.demoUrl }
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

