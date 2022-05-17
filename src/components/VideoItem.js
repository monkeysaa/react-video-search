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
        <p className="header">{video.snippet.title}</p>
      </section>
    </div>
  );
};

export default VideoItem;
