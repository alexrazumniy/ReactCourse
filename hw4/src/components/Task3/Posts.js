import { Post } from "./Post";

export const Posts = ({ posts }) => {
  return (
    <ol>
      {posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </ol>
  );
};
