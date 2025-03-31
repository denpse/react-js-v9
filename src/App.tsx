import { Route, Routes } from "react-router";
import About from "./screens/about";
import Home from "./screens/home";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
