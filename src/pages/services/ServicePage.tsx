import { useNavigate, useParams } from "react-router-dom";
import type { PostHome } from "../../hooks/cmz/usePostsInfinite";
import usePost from "../../hooks/cmz/usePost";

import Spinner from "../../components/Spinner";
import PostDisplay from "../../components/PostDisplay";
import ServiceList from "../../components/elements/ServiceList";

const ServicePage = () => {
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
        <ServiceList />
      </PostDisplay>
    </>
  );
};

export default ServicePage;
