import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllLaunches from "./pages/AllLaunches";
import Home from "./pages/Home";
import SingleLaunch from "./pages/SingleLaunch";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<AllLaunches />} />
        <Route path="/launches/:id" element={<SingleLaunch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
