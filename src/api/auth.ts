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

export const me = async () => {
  try {
    const res = await instance.get("/auth/me");
    return res;
  } catch (error) {
    throw error;
  }
};
