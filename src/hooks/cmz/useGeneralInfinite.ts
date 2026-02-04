import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, {
  apiCMZEndpoint,
  type ResponseA,
} from "../../services/api-client";

interface QueryParams {
  search?: string;
}

const useGeneralInfinite = <T>(
  query_params: QueryParams,
  endpoint: string,
  key: string,
) => {
  const apiClient = new ApiClient<T>(`${apiCMZEndpoint}/${endpoint}/`);
  return useInfiniteQuery<ResponseA<T>>({
    queryFn: ({ pageParam = 0 }) => {
      return apiClient.getAllSecond({
        params: {
          ...query_params,
          limit: 10,
          offset: pageParam * 10,
        },
      });
    },
    queryKey: [key],
    getNextPageParam: (lastPage, allPage) => {
      let count = 0;
      allPage.map((p) => (count = count + p.results.length));
      return count != lastPage.count ? allPage.length : undefined;
    },
  });
};

export default useGeneralInfinite;
