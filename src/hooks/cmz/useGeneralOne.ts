import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCMZEndpoint } from "../../services/api-client";

const useGeneralOne = <T>(endpoint: string, slug: string, key: any) => {
  const apiClient = new ApiClient<T>(`${apiCMZEndpoint}/${endpoint}/${slug}`);
  return useQuery<T>({
    queryFn: () => {
      return apiClient.getAllSimple({});
    },
    queryKey: key,
  });
};

export default useGeneralOne;
