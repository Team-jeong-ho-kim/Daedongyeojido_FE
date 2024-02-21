import axios from "axios";

export const postPage = async () => {
  const token = localStorage.getItem("access_token");

  console.log(token);
  
  
  return await axios.post("https://prod-server.xquare.app/jung-ho/admin-club/page",null,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}