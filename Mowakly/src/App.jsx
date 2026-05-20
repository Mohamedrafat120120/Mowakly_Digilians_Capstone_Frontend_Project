import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FindLawyers from "./Pages/FindLawyers";
import LawyerProfile from "./Pages/LawyerProfile";
import CaseDetails from "./Pages/CaseDetails";
import BrowseCases from "./Pages/BrowseCases";
import PostCase from "./Pages/PostCase";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Verification from "./Pages/Verification";
import Payment from "./Pages/Payment";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<BrowseCases />} />
        <Route path="/case/:id" element={<CaseDetails />} />
        <Route path="/post-case" element={<PostCase />} />
        <Route path="/lawyers" element={<FindLawyers />} />
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-details" element={<Profile />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
