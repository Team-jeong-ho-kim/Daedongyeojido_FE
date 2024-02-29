import axios from "axios";

type PartType =
  | "INDEPENDENT"
  | "CLUB_MEMBER"
  | "CLUB_LEADER"
  | "TEACHER"
  | "CLUB_LEADER_TEACHER";
type MemberType = {
  userName: String;
  classNumber: String;
  part: PartType;
};

type EditClubType = {
  clubName: string;
  memberResponses: MemberType[];
};

export const postPage = async () => {
  const token = localStorage.getItem("access_token");
  return await axios.get(
    "https://prod-server.xquare.app/jung-ho/admin-club/page",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createClub = async (clubName: string) => {
  const token = localStorage.getItem("access_token");
  return await axios.post(
    "https://prod-server.xquare.app/jung-ho/admin-club/create",
    { clubName: clubName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteClub = async (clubName: string) => {
  const token = localStorage.getItem("access_token");
  return await axios.delete(
    `https://prod-server.xquare.app/jung-ho/admin-club/delete/${clubName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const editClub = async (club: EditClubType) => {
  const token = localStorage.getItem("access_token");

  return await axios.patch(
    "https://prod-server.xquare.app/jung-ho/admin-club/edit-member",
    {
      clubName: club.clubName,
      clubMembers: club.memberResponses,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
