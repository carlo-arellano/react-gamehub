import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba8cd110267e437c90376e04d022993c",
  },
});
