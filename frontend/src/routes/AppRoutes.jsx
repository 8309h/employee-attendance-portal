import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Timesheet from "../pages/Timesheet";
import Leave from "../pages/Leave";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
      return (
            <BrowserRouter>
                  <Routes>
                        {/* Public */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* Protected */}
                        <Route element={<PrivateRoute />}>
                              <Route path="/" element={<Dashboard />} />
                              <Route path="/timesheet" element={<Timesheet />} />
                              <Route path="/leave" element={<Leave />} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}