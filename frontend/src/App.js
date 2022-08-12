import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";
import Blog from "./routes/Blog/Blog";
import Videos from "./routes/Videos/Videos";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";
import AboutUs from "./routes/AboutUs/AboutUs";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="videos" element={<Videos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
