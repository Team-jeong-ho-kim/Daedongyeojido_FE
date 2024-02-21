import axios from "axios";

export const postPage = async () => {
  const token = localStorage.getItem("access_token");
  return await axios.post("https://prod-server.xquare.app/jung-ho/admin-club/page",null,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const createClub = async (clubName: string) => {
  const token = localStorage.getItem("access_token");
  return await axios.post("https://prod-server.xquare.app/jung-ho/admin-club/create",{clubName:clubName},{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}