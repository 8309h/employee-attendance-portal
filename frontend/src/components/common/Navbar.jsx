import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
      const navigate = useNavigate();

      const logout = () => {
            localStorage.removeItem("token");
            navigate("/login");
      };

      return (
            <AppBar position="static">
                  <Toolbar>
                        <Typography sx={{ flexGrow: 1 }}>Attendance Portal</Typography>

                        <Button color="inherit" onClick={() => navigate("/")}>Dashboard</Button>
                        <Button color="inherit" onClick={() => navigate("/timesheet")}>Timesheet</Button>
                        <Button color="inherit" onClick={() => navigate("/leave")}>Leave</Button>

                        <Button color="inherit" onClick={logout}>Logout</Button>
                  </Toolbar>
            </AppBar>
      );
}