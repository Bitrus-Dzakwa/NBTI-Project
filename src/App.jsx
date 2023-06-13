import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  Donate,
  News,
  GetInvolved,
  Volunteer,
  Works,
} from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/works" element={<Works />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </>
  );
}

export default App;
