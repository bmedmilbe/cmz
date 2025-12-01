import useGeneralInfinite from "./useGeneralInfinite";

interface QueryParams {
  search?: string;
}
export interface PostHome {
  id: number;
  image: string;
  picture: string;
  info: string;
  title: string;
  beginnig: string;
  slug: string;
  text: string;
  posted_at: string;
  date: string;
  prev: string;
  next: string;
}

const usePostsInfinite = (query_params: QueryParams) =>
  useGeneralInfinite<PostHome>(query_params, "posts", "posts");

export default usePostsInfinite;
