import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Timesheet from "./pages/Timesheet";
import Leave from "./pages/Leave";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/leave" element={<Leave />} />
      </Routes>
    </BrowserRouter>
  );
}