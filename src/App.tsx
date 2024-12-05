import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Opening from "./Opening";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
