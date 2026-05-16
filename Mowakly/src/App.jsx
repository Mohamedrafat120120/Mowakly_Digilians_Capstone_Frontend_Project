import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FindLawyers from "./Pages/FindLawyers";
import LawyerProfile from "./Pages/LawyerProfile";
import CaseDetails from "./Pages/CaseDetails";
import BrowseCases from "./Pages/BrowseCases";
import PostCase from "./Pages/PostCase";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cases" replace />} />
        <Route path="/cases" element={<BrowseCases />} />
        <Route path="/case/:id" element={<CaseDetails />} />
        <Route path="/post-case" element={<PostCase />} />
        <Route path="/lawyers" element={<FindLawyers />} />
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
