import { useMutation } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { type UserRegister } from "../services/authServices";
import useAuth from "./useAuth";

const useAuthRegister = () => {
  const apiClient = new ApiClient<UserRegister>("auth/users");

  const auth = useAuth();

  return useMutation<UserRegister, Error, UserRegister>({
    mutationFn: apiClient.save,

    onSuccess: (responseData: UserRegister, userRegister: UserRegister) => {
      console.log(responseData);
      auth.mutate({ ...userRegister, access: "" });
    },
  });
};
export default useAuthRegister;
