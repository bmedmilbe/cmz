import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCERTIFICATEEndpoint } from "../../services/api-client";

const useCertificateGet = <T>(
  endpoint: string,
  queryKey: string | (string | number)[]
) => {
  const apiClient = new ApiClient<T>(`${apiCERTIFICATEEndpoint}/${endpoint}`);
  return useQuery({
    queryFn: apiClient.getAll,
    queryKey: [Array.isArray(queryKey) ? [...queryKey] : queryKey],
  });
};

export default useCertificateGet;
