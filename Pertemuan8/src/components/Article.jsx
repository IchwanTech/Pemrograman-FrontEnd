import { useState } from "react";
import postsData from "../posts.json";
import Search from "./Search";
import { useEffect } from "react";
import axios from "axios";
const Article = () => {
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPosts] = useState(postsData.length);

  const onChangeSearch = (keyword) => {
    console.log(keyword);
    const filteredData = postsData.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setPosts(filteredData);
    setTotalPosts(filteredData.length);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //   .then((response) => response.json())
        //   .then((json) => setPosts(json));
        // menggunakan axios
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setTotalPosts(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* Menggunakan lifting state */}
      <Search onSearchChange={onChangeSearch} totalPost={totalPost} />
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <small>
            {post.author} - Date: {post.date} tags: {post.tags}
          </small>
        </div>
      ))}
    </div>
  );
};

export default Article;
