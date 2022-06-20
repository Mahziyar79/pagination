import Spinner from "./Spinner";

const Posts = ({ posts, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <a href={`post/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
