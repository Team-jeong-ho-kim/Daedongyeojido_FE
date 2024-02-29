type PartType =
  | 'INDEPENDENT'
  | 'CLUB_MEMBER'
  | 'CLUB_LEADER'
  | 'TEACHER'
  | 'CLUB_LEADER_TEACHER';

export const useAuth = (part: PartType) => {
  const auth = localStorage.getItem('part');
  return auth === part;
};
