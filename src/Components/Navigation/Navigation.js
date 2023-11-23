import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Contact from "./Contact";

//npm i react-router-dom@6
import { Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home page || </Link>
        <Link to="/About-me"> About me || </Link>
        <Link to="/Contact-us"> Contact me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-me" element={<Aboutme />} />
        <Route path="/Contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navigation;
