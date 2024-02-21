import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mainpage from "./page/Mainpage";
import { GlobalStyle } from "./GlobalStyle.style";
import Applicationpage from "./page/Applicationpage";
import Dinepage from "./page/Dinepage";
import ApplicantMgtpage from "./page/ApplicantMgtpage";
import Mypage from "./page/Mypage";
import ApplicantDetailpage from "./page/ApplicantDetailpage";
import Loginpage from "./page/Loginpage";
import ClubMgtpage from "./page/ClubMgtpage";
import ClubDetailsInfopage from "./page/ClubDetailsInfopageStudent";
import CreateClub from "./page/CreateClub";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Application" element={<Applicationpage />} />
        <Route path="/Dine" element={<Dinepage />} />
        <Route path="/ApplicantMgt" element={<ApplicantMgtpage />} />
        <Route path="/My" element={<Mypage />} />
        <Route
          path="/ClubMgt"
          element={
            <ClubMgtpage
              setAnnounceVisible={() => {}}
              setPlusMemberVisible={() => {}}
            />
          }
        />
        <Route path="/ApplicantDetail" element={<ApplicantDetailpage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/ClubDetailsInfo/Student" element={<ClubDetailsInfopage />} />
        <Route path="/CreateClub" element={<CreateClub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
