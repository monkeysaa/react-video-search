import React from 'react';

const videoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <section>
      <div className='ui embed'>
        <iframe title={video.snippet.title} src={videoSrc} />
      </div>
      <article className='ui segment'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </article>
    </section>
  );
}

export default videoDetail;
