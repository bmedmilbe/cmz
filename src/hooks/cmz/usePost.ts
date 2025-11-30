import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCMZEndpoint } from "../../services/api-client";

const usePost = <PostHome>(slug: string) => {
  const apiClient = new ApiClient<PostHome>(`${apiCMZEndpoint}/posts/${slug}`);
  return useQuery<PostHome>({
    queryFn: () => {
      return apiClient.getAllSimple({});
    },
    queryKey: ["posts", slug],
  });
};

export default usePost;
