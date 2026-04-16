import { createTheme } from "@mui/material/styles";

const theme = createTheme({
      palette: {
            primary: { main: "#1976d2" },
            secondary: { main: "#00bcd4" },
      },
      shape: {
            borderRadius: 10,
      },
});

export default theme;