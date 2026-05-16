import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FindLawyers from "./Pages/FindLawyers";
import LawyerProfile from "./Pages/LawyerProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/lawyers" replace />} />
        <Route path="/lawyers" element={<FindLawyers />} />
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
