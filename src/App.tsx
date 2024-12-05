import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Opening from "./app/Opening";

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
