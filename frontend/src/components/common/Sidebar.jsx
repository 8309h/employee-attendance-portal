import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
      const navigate = useNavigate();

      return (
            <Drawer
                  variant="permanent"
                  sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                              width: drawerWidth,
                              boxSizing: "border-box",
                        },
                  }}
            >
                  <Toolbar /> {/* pushes content below navbar */}
                  <List>
                        <ListItem button onClick={() => navigate("/")}>
                              <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button onClick={() => navigate("/timesheet")}>
                              <ListItemText primary="Timesheet" />
                        </ListItem>
                        <ListItem button onClick={() => navigate("/leave")}>
                              <ListItemText primary="Leave" />
                        </ListItem>
                  </List>
            </Drawer>
      );
}