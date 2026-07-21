import instance from "../config/axios";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await instance.post("/auth/login", { email, password });
    return res;
  } catch (error) {
    throw error;
  }
};
