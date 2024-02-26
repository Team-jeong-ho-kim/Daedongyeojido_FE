import axios from "axios"

export const postAlarm =async ({title, contents}: {title:string; contents:string}) => {
  const token = localStorage.getItem("access_token");
  return await axios.post("https://prod-server.xquare.app/jung-ho/announcement/",{title,contents},{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}