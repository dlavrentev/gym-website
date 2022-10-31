import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Plans from "./pages/plans/Plans.jsx";
import Trainers from "./pages/trainers/Trainers.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </BrowserRouter>
  );
};

export default App;
