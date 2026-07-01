import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";
import Institutions from "./pages/Institutions";
import Accomplishments from "./pages/Accomplishments";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="institutions" element={<Institutions />} />
          <Route path="founder" element={<Founder />} />
          <Route path="accomplishments" element={<Accomplishments />} />
          <Route path="events" element={<Events />} />
          <Route path="activities" element={<Activities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="members" element={<Members />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;