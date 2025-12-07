import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiCERTIFICATEEndpoint } from "../services/api-client";
export interface Customer {
  id: number;
  user: number;
  first_name: string;
  last_name: string;
  back_staff: boolean;
  level: number;
}
const useMe = <Customer>() => {
  const apiClient = new ApiClient<Customer>(
    `${apiCERTIFICATEEndpoint}/customers/me`
  );
  return useQuery<Customer>({
    queryFn: () => {
      return apiClient.getAllSimple({});
    },
    queryKey: ["me"],
  });
};

export default useMe;
