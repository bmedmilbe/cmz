import { useMutation } from "@tanstack/react-query";
import ApiClient from "../../services/api-client";

export interface Message {
  email: string;
  subject: string;
  text: string;
  name: string;
}

const useSendMessage = () => {
  const apiClient = new ApiClient<Message>("cmz/messages");

  return useMutation<Message, Error, Message>({
    mutationFn: apiClient.save,
  });
};

export default useSendMessage;
