import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBf75cI-pTKc7aLS4qKOpj2-dr9krQGg-s",
  },
});

export default request;
