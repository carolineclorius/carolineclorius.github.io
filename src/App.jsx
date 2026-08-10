import { Route, Routes, useLocation } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {location.pathname !== "/contact" && <Footer />}
    </div>
  );
}

export default App;
