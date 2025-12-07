import { useQuery } from "@tanstack/react-query";
import type { ResponseA } from "../../services/api-client";
import ApiClient, { apiCERTIFICATEEndpoint } from "../../services/api-client";
import usePersonStoreQuery from "../../stores/usePersonStoreQuery";
import type { Person } from "./usePersons";

const usePersonsInfinite = () => {
  const queryParam = usePersonStoreQuery();

  const apiClient = new ApiClient<Person>(`${apiCERTIFICATEEndpoint}/persons`);
  return useQuery<ResponseA<Person>>({
    queryFn: () => {
      return apiClient.getAllSecond({
        params: {
          ...queryParam.query,
          limit: 10,
          offset: queryParam.page == 1 ? undefined : (queryParam.page - 1) * 10,
        },
      });
    },
    queryKey: [
      "persons",
      {
        query: { ...queryParam.query, page: queryParam.page },
      },
    ],
    keepPreviousData: true,

    getNextPageParam: (lastPage, allPage) => {
      let count = 0;
      allPage.map((p) => (count = count + p.results.length));
      return count != lastPage.count ? allPage.length : undefined;
    },
  });
};

export default usePersonsInfinite;
