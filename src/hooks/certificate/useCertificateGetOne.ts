import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCERTIFICATEEndpoint } from "../../services/api-client";

const useCertificateGetOne = <T>(
  endpoint: string,
  queryKey: string | (string | number)[],
  idOrSlug: number | string
) => {
  const apiClient = new ApiClient<T>(
    `${apiCERTIFICATEEndpoint}/${endpoint}/${idOrSlug}`
  );
  return useQuery({
    queryFn: apiClient.getAllSimple,
    queryKey: [Array.isArray(queryKey) ? [...queryKey] : queryKey],
  });
};

export default useCertificateGetOne;
