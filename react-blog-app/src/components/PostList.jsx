import { Link } from "react-router-dom";

function PostList({ posts, setSelectedPost }) {
  function handleClick(post) {
    setSelectedPost(post);
    console.log("Selected post:", post);
  }

  function handleDelete(postId) {
  fetch(`http://localhost:3001/posts/${postId}`, {
    method: "DELETE"
  })
    .then(() => {
      console.log(`Post ${postId} deleted`);
      setPosts(prev => prev.filter(p => p.id !== postId));
    });
}

<button onClick={() => handleDelete(post.id)}>Delete Post</button>

return (
    <ul>
        {posts.map(post => (
            <li key={post.id}>
                <button onClick={() => handleClick(post)}>
                    {post.title}
                </button>
            </li>
        ))}
    </ul>
);
}

export default PostList
//add link right under button