import { useNavigate, useParams } from "react-router-dom";
import type { PostHome } from "../../hooks/cmz/usePostsInfinite";
import usePost from "../../hooks/cmz/usePost";
import Breadcrumb from "../../components/layout/header/Breadcrumb";
import PostList from "../../components/elements/PostList";
import Spinner from "../../components/Spinner";

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
      <Breadcrumb
        breadcrumbTitle={post?.title}
        breadcrumbImage={post?.picture}
      />
      <main id="main" className="site-main" role="main">
        <section className="blog_single_details_outer">
          <div className="container">
            {!isLoading && (
              <span
                className="text"
                dangerouslySetInnerHTML={{ __html: post.text || "" }}
              ></span>
            )}
          </div>
        </section>
        <div className="row">
          <div className="col-md-6">
            <PostList postTarget={post} />
            <div className="pd_top_10" />
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </main>
    </>
  );
};

export default PostPage;
