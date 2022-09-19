import axios from "axios";

const API_KEY = "AIzaSyAa74PApLxo5jrK_MUSjmlmOfwhMwONcXI";

export const httpService = {
  getYouTubeResults,
};

async function getYouTubeResults(query) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}
