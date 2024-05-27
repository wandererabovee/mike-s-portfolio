// src/components/Projects.js
import React from 'react';
import HeroSection from './common/HeroSection';
import ProjectImage from '../assets/project-image.png';
import Card from './cards/Cards';
import postsData from './data/postsData';

const Projects = () => {
  const projectPosts = postsData.filter(post => post.type === "project");

  return (
    <div>
      <HeroSection
        title="My Projects"
        description="a Dallas-based aspiring Developer on a mission to bring creativity to the digital world."
        imageSrc={ProjectImage}
      />
      <div className="latest-projects">
        <div className="Title">
          <h2>Projects</h2>
        </div>
        <div className="project-cards">
          {projectPosts.map((post, index) => (
            <Card
              key={index}
              year={post.date}
              title={post.title}
              description={post.description}
              actions={[
                { label: "Article", url: `/blog/${post.id}` }, 
                { label: "Demo", url: post.demoUrl } 
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
