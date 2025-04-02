import { Route, Routes } from "react-router";
import About from "./screens/about";
import Home from "./screens/home";
import Navbar from "./components/navbar";
import Service from "./screens/service";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </>
  );
};

export default App;
