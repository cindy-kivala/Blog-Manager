import React, { useState, useEffect } from "react";
import PostList from './components/PostList';
import PostDetails from "./components/PostDetails";
import NewPostForm from "./components/NewPostForm";
import EditPostForm from "./components/EditPostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    //fetch blog posts from our API
    fetch("http://localhost:3001/posts")
    .then(resp => resp.json())
    .then(data => {
      setPosts(data);
      console.log("Fetched posts:", data);
    });
  }, []);

  //RESEARCH REACT ROUTING
}

export default App
