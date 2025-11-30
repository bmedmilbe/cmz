import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCMZEndpoint } from "../../services/api-client";
interface Informations {
  id: number;
  service: number;
  question: string;
  information: string;
}
export interface ServiceCMZ {
  id: number;
  name: string;
  slug: string;
  informations: Informations[];
  picture: string;
  description: string;
  title?: string;
}
const useServicesCMZ = () => {
  const apiClient = new ApiClient<ServiceCMZ>(`${apiCMZEndpoint}/posts`);
  return useQuery({
    queryFn: () =>
      apiClient.getAll({
        params: {
          limit: 5,
          is_cmz_service: true,
          is_social_service: false,
        },
      }),
    queryKey: ["servicescmz"],
  });
};

export default useServicesCMZ;
