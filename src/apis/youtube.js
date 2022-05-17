import axios from 'axios';

const KEY = 'AIzaSyCzOd-nupG6CHg32JeTv8EryNSJ4dP2Whg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
