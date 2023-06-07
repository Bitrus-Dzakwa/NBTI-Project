import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Categories, News, Volunteer } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </>
  );
}

export default App;
