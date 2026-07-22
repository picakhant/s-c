import { useMutation, useQuery } from "@tanstack/react-query";
import { login, me } from "../api/auth";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useMe = () => {
  return useQuery({
    queryFn: me,
    queryKey: ["me"],
    retry: false,
  });
};
