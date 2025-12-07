import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient, { apiCERTIFICATEEndpoint } from "../../services/api-client";

const useCertificatePut = <T>(endpoint: string, queryKey: any[]) => {
  const apiClient = new ApiClient<T>(`${apiCERTIFICATEEndpoint}/${endpoint}`);
  const queryClient = useQueryClient();

  return useMutation<T, Error, T>({
    mutationFn: apiClient.update,
    onSuccess: () => {
      Promise.all([queryClient.invalidateQueries(queryKey)]);
    },
  });
};

export default useCertificatePut;
