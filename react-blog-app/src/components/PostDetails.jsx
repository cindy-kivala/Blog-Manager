function PostDetails({ post }) {
  if (!post) return <p>Select a post to view details.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails