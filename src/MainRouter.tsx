import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mainpage from "./page/Mainpage";
import { GlobalStyle } from "./GlobalStyle.style";
import Applicationpage from "./page/Applicationpage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Application" element={<Applicationpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
