import { useNavigate } from "react-router-dom";
import usePostsInfinite, {
  type PostHome,
} from "../../hooks/cmz/usePostsInfinite";
import Spinner from "../Spinner";
interface Props {
  postTarget?: PostHome;
}
const PostList = ({ postTarget }: Props) => {
  const navigate = useNavigate();
  const query_param = {
    search: undefined,
  };
  const {
    data: posts,
    fetchNextPage,
    isFetching,

    hasNextPage,
  } = usePostsInfinite(query_param);
  return (
    <>
      <div className="list-posts">
        {posts?.pages.map((p, key) => (
          <div className="row" key={key}>
            {p.results
              .filter((post) => post.id != postTarget?.id)
              .map((item, index) => (
                <div
                  className="col-sm-12 col-md-6"
                  onClick={() => navigate(`/posts/${item.slug}`)}
                >
                  <div key={index} className="list-post-box d-flex">
                    <img
                      src={item.picture}
                      alt="Card title"
                      className="img-fluid list-post-img"
                      id="list-post-img"
                    />
                    <div className="p-2 flex-grow-1">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.beginnig}</p>
                      <div className="d-flex justify-content-between">
                        <a href={`/posts/${item.slug}`}>
                          &rarr; Saber mais ...
                        </a>{" "}
                        <span>{item.posted_at}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}

        <div className="text-center">
          {!isFetching && (
            <button
              disabled={!hasNextPage}
              onClick={() => fetchNextPage()}
              className="btn btn-info"
            >
              Ver mais &rarr;
            </button>
          )}
          {isFetching && <Spinner />}
        </div>
      </div>
    </>
  );
};

export default PostList;
