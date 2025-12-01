import type { PostHome } from "../hooks/cmz/usePostsInfinite";
import Breadcrumb from "./layout/header/Breadcrumb";
import Spinner from "./Spinner";
interface Props {
  post: PostHome;
  children: React.ReactNode | "";
  isLoading: boolean;
}
const PostDisplay = ({ post, children, isLoading }: Props) => {
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
        {children}
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </main>
    </>
  );
};

export default PostDisplay;
