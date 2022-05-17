import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        className='ui image'
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <section className='content'>
        <h1 className="header">{video.snippet.title}</h1>
        <p className='description'>{video.snippet.description}</p>
      </section>
    </div>
  );
};

export default VideoItem;
