import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCERTIFICATEEndpoint } from "../../services/api-client";

const useCertificateGetSimple = <T>(
  endpoint: string,
  queryKey: string | (string | number)[]
) => {
  const apiClient = new ApiClient<T>(`${apiCERTIFICATEEndpoint}/${endpoint}`);
  return useQuery({
    queryFn: apiClient.getAllSimple,
    queryKey: [Array.isArray(queryKey) ? [...queryKey] : queryKey],
  });
};

export default useCertificateGetSimple;
