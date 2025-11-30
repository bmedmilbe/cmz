import PostList from "../../components/elements/PostList";
import Breadcrumb from "../../components/layout/header/Breadcrumb";

const PostsPage = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Atividades da Câmara Distrital de Mé-Zóchi"
        breadcrumbImage="/assets/images/service.webp"
      />
      <div>
        <section className="creote-service-box">
          <div className="container">
            <PostList />
          </div>
        </section>
        <div className="pd_top_100" />
      </div>
    </>
  );
};

export default PostsPage;
