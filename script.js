// Marco AI
async function askMarco() {
  const query = document.getElementById("ai-query").value;
  const responseElement = document.getElementById("ai-response");

  try {
    const response = await fetch(`https://www.googleapis.com/language/translate/v2?key=AIzaSyBR54cP7bbVfxR6qSAH_2gZMwMuEpzYDk0&q=${query}`);
    const data = await response.json();
    const answer = data.data.translations[0].translatedText;
    responseElement.textContent = `Marco says: ${answer}`;
  } catch (error) {
    responseElement.textContent = "Marco AI is currently unavailable. Please try again later.";
    console.error(error);
  }
}

// Fetch Trending Videos
async function fetchTrendingVideos() {
  const apiKey = "AIzaSyBUEj5-yDaNmK4yoXTQ-UYhiOMN9pfcLWU"; // YouTube API key
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&regionCode=US&key=${apiKey}`);
  const data = await response.json();
  const videoContainer = document.getElementById("trending-videos");

  videoContainer.innerHTML = ""; // Clear existing content

  data.items.forEach(video => {
    const videoElement = document.createElement("div");
    videoElement.innerHTML = `
      <h3>${video.snippet.title}</h3>
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      <p>${video.snippet.description}</p>
    `;
    videoContainer.appendChild(videoElement);
  });
}

// Initialize Trending Videos
fetchTrendingVideos();
