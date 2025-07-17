import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPostForm({ setPosts }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        console.log("Editing post:", data);
         });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(updated => {
        console.log("Post updated:", updated);
          setPosts(prev =>
          prev.map(p => (p.id === updated.id ? updated : p))
        );
        navigate("/");
      });
  }

  if (!post) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Post</h3>
      <input
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <br />
      <textarea
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditPostForm
