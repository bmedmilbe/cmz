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
  beginning: string;
  slug: string;
  text: string;
  posted_at: string;
  date: string;
  prev: string;
  next: string;
}

const usePostsInfinite = (query_params: QueryParams) =>
  useGeneralInfinite<PostHome>(
    query_params,
    "posts?active=true&featured=&is_a_service=false&is_social_service=false&is_to_front=false",
    "posts?active=true&featured=&is_a_service=false&is_social_service=false&is_to_front=false",
  );

export default usePostsInfinite;
