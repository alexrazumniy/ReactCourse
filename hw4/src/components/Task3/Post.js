export const Post = ({ post }) => {
  const { title, completed } = post;
  return (
    <li>
      <div>{`Title: ${title} - completed: ${completed}`}</div>
    </li>
  );
};
