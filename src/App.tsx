import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./contexts/LanguageContext";
import './i18n'; // Import i18n configuration

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
