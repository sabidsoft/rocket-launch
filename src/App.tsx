import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllLaunches from "./pages/AllLaunches";
import Home from "./pages/Home";
import SingleLaunch from "./pages/SingleLaunch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<AllLaunches />} />
        <Route path="/launches/:id" element={<SingleLaunch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
