import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { default as Clients, default as Home } from "./app/Clients";
import SelectedClients from "./app/SelectedClients";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/selected-clients" element={<SelectedClients />} />
      </Routes>
    </Router>
  );
}
