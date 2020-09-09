import axios from "axios";

const KEY = "AIzaSyDO8J835AtErej6ruxClL7ouIwdlFbBBwA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
