import { useNavigate, useParams } from "react-router-dom";
import PostList from "../../components/elements/PostList";
import PostDisplay from "../../components/PostDisplay";
import Spinner from "../../components/Spinner";
import usePost from "../../hooks/cmz/usePost";
import type { PostHome } from "../../hooks/cmz/usePostsInfinite";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/");
    return null;
  }

  // Use the parsed ID directly
  const { data: post, isLoading } = usePost<PostHome>(slug);

  if (!isLoading && !post) {
    navigate("/");
    return null;
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <PostDisplay post={post} isLoading={isLoading}>
        <PostList postTarget={post} />
      </PostDisplay>
    </>
  );
};

export default PostPage;
