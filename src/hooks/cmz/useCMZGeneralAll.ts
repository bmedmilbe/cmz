import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/api-client";

const useCMZGeneralAll = <T>(endpoint: string, queryKey: string) => {
  const apiClient = new ApiClient<T>(`cmz/${endpoint}`);
  return useQuery({
    queryFn: apiClient.getAll,
    queryKey: [queryKey],
  });
};

export default useCMZGeneralAll;
