import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
