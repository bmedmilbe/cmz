import { useNavigate, useParams } from "react-router-dom";
import PostDisplay from "../components/PostDisplay";
import Spinner from "../components/Spinner";
import useExtra from "../hooks/cmz/useExtra";
import type { Extra } from "../hooks/cmz/useExtras";
import PostList from "../components/elements/PostList";

const ExtraPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/");
    return null;
  }

  // Use the parsed ID directly
  const { data: extra, isLoading } = useExtra<Extra>(slug);

  if (!isLoading && !extra) {
    navigate("/");
    return null;
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <PostDisplay post={extra} isLoading={isLoading}>
        <PostList />
      </PostDisplay>
    </>
  );
};

export default ExtraPage;
