const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your API key
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

async function fetchVideos(categoryId) {
  const response = await fetch(`${BASE_URL}videos?part=snippet&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=5&key=${API_KEY}`);
  const data = await response.json();
  return data.items; // Array of trending videos
}

function displayVideos(videos, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear existing content
  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.className = 'video-item';
    videoElement.innerHTML = `
      <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
        <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      </a>
      <h3>${video.snippet.title}</h3>
    `;
    container.appendChild(videoElement);
  });
}

// Fetch videos for each section
fetchVideos(10).then(videos => displayVideos(videos, 'music-videos')); // Music category
fetchVideos(19).then(videos => displayVideos(videos, 'travel-videos')); // Travel category
fetchVideos(20).then(videos => displayVideos(videos, 'gaming-videos')); // Gaming category
fetchVideos(28).then(videos => displayVideos(videos, 'tech-videos')); // Technology category
