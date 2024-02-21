import { instance } from "./axios";

export const refresh = async (token: string) => {
  return await instance.patch("/auth/token", {
    token: token,
  });
};
