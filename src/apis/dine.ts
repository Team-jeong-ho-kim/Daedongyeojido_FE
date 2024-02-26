import axios from "axios";

export const postAll = async () => {
  const token = localStorage.getItem("access_token");
  return await axios.post(
    "https://prod-server.xquare.app/jung-ho/mess/all",
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const acceptDine = async (id: string) => {
  const token = localStorage.getItem("access_token");
  return await axios.post(
    `https://prod-server.xquare.app/jung-ho/mess/accept/${id}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
