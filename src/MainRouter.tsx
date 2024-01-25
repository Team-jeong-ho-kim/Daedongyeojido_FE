import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mainpage from "./page/Mainpage";
import { GlobalStyle } from "./GlobalStyle.style";
import Applicationpage from "./page/Applicationpage";
import Dinepage from "./page/Dinepage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Application" element={<Applicationpage />} />
        <Route path="/Dine" element={<Dinepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
