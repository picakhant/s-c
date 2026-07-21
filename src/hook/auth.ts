import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
