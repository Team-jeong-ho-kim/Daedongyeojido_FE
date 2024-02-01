import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mainpage from "./page/Mainpage";
import { GlobalStyle } from "./GlobalStyle.style";
import Applicationpage from "./page/Applicationpage";
import Dinepage from "./page/Dinepage";
import ApplicantMgtpage from "./page/ApplicantMgtpage";
import Mypage from "./page/Mypage";
import ClubMgtpage from "./page/ClubMgtpage";
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
        <Route path="/ClubMgt" element={<ClubMgtpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
