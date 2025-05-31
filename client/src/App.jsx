import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import View from "./pages/View";
import AboutUs from "./pages/AbotUs"; // Corrected import: AboutUs (not AbotUs)
import Developer from "./pages/Developer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BasicLayouts from "./layout/BasicLayouts";

const App = () => {
  return (
    <Routes>
      {/* Routes with Navbar and Sidebar */}
      <Route element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/view" element={<View />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/developers" element={<Developer />} />
      </Route>

      {/* Routes without Navbar and Sidebar */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};

export default App;
