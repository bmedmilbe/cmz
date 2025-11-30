import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCMZEndpoint } from "../../services/api-client";
import type { ServiceCMZ } from "./useServicesCMZ";

const useServicesSocial = () => {
  const apiClient = new ApiClient<ServiceCMZ>(`${apiCMZEndpoint}/posts`);
  return useQuery({
    queryFn: () =>
      apiClient.getAll({
        params: {
          limit: 5,
          is_cmz_service: false,
          is_social_service: true,
        },
      }),
    queryKey: ["servicessocial"],
  });
};

export default useServicesSocial;
