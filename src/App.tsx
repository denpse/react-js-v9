import { Route, Routes } from "react-router";
import About from "./screens/about";
import Home from "./screens/home";
import Navbar from "./components/navbar";
import Service from "./screens/service";
import Listing from "./screens/listing";
import StateComponent from "./screens/state-component";
import StateCompoent from "./screens/StateComponent";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="listing" element={<Listing />} />
        <Route path="state" element={<StateComponent />} />
        <Route path="state-compoent" element={<StateCompoent />} />
      </Routes>
    </>
  );
};

export default App;
