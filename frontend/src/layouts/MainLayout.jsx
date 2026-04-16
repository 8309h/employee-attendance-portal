import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { Box } from "@mui/material";

export default function MainLayout({ children }) {
      return (
            <Box sx={{ display: "flex" }}>
                  <Sidebar />
                  <Box sx={{ width: "100%" }}>
                        <Navbar />
                        <Box p={3}>{children}</Box>
                  </Box>
            </Box>
      );
}