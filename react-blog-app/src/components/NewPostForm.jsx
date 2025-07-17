import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPostForm({ setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = { title, body };

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Post created:", data);
         setPosts(prev => [...prev, data]);
        navigate("/");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Post</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <br />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default NewPostForm