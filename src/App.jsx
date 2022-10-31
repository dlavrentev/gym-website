import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Plans from "./pages/plans/Plans.jsx";
import Trainers from "./pages/trainers/Trainers.jsx";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </div>
  );
};

export default App;
