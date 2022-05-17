import React from 'react';
import VideoItem from './VideoItem';

// Destructuring is so we can say "videos" rather than "props.videos"
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list" >{renderedList}</div>
};

export default VideoList;
