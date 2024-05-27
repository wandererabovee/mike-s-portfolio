// src/components/Topic.js
import React from 'react';
import './Topic.css';

const topics = [
  'All', 'Personal', 'Hardware', 'Crypto', 
  'Economics', 'Languages', 'History', 'Linux', 'Gaming'
];

const Topic = ({ onSelectTopic }) => {
  return (
    <div className="topic">
      <h2 className="title">Topics</h2>
      <div className="topic-box">
        {topics.map((topic, index) => (
          <span 
            key={index} 
            className="topic-title"
            onClick={() => onSelectTopic(topic)}
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Topic;
