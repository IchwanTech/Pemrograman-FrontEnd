import { useState } from "react";
import postsData from "../posts.json";
import Search from "./Search";

const Article = () => {
  const [posts, setPosts] = useState(postsData);
  const [totalPost, setTotalPosts] = useState(postsData.length);

  const onChangeSearch = (keyword) => {
    console.log(keyword);
    const filteredData = postsData.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setPosts(filteredData);
    setTotalPosts(filteredData.length);
  };

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
