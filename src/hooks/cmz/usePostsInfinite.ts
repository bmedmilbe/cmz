import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, {
  apiCMZEndpoint,
  type ResponseA,
} from "../../services/api-client";

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

const usePostsInfinite = (query_params: QueryParams) => {
  const apiClient = new ApiClient<PostHome>(`${apiCMZEndpoint}/posts`);
  return useInfiniteQuery<ResponseA<PostHome>>({
    queryFn: ({ pageParam = 0 }) => {
      return apiClient.getAllSecond({
        params: {
          ...query_params,
          limit: 10,
          offset: pageParam * 10,
        },
      });
    },
    queryKey: ["posts"],
    getNextPageParam: (lastPage, allPage) => {
      let count = 0;
      allPage.map((p) => (count = count + p.results.length));
      return count != lastPage.count ? allPage.length : undefined;
    },
  });
};

export default usePostsInfinite;
