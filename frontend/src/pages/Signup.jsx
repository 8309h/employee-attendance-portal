import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
      const [data, setData] = useState({ username: "", password: "" });
      const navigate = useNavigate();

      const signup = async () => {
            await api.post("/auth/signup", data);
            alert("User created");
            navigate("/login");
      };

      return (
            <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Paper sx={{ p: 4, width: 320 }}>
                        <Typography variant="h5">Sign Up</Typography>

                        <TextField fullWidth label="Username" sx={{ mt: 2 }}
                              onChange={(e) => setData({ ...data, username: e.target.value })}
                        />

                        <TextField fullWidth label="Password" type="password" sx={{ mt: 2 }}
                              onChange={(e) => setData({ ...data, password: e.target.value })}
                        />

                        <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={signup}>
                              Sign Up
                        </Button>
                  </Paper>
            </Box>
      );
}