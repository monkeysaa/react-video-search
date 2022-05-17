import React from 'react';
import VideoItem from './VideoItem';

// Destructuring is so we can say "videos" rather than "props.videos"
const VideoList = ({ videos }) => {
  const renderedList = videos.map(({ id }) => {
    console.log(id.videoId);
    return <VideoItem key={id.videoId} id={id.videoId} />
  });

  return <div>{renderedList}</div>
};

export default VideoList;
