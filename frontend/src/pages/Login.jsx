import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
      const [data, setData] = useState({ username: "", password: "" });
      const navigate = useNavigate();

      const login = async () => {
            try {
                  const res = await api.post("/auth/login", data);
                  localStorage.setItem("token", res.data.token);
                  navigate("/");
            } catch {
                  alert("Login failed");
            }
      };

      return (
            <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Paper sx={{ p: 4, width: 320 }}>
                        <Typography variant="h5">Login</Typography>

                        <TextField fullWidth label="Username" sx={{ mt: 2 }}
                              onChange={(e) => setData({ ...data, username: e.target.value })}
                        />

                        <TextField fullWidth label="Password" type="password" sx={{ mt: 2 }}
                              onChange={(e) => setData({ ...data, password: e.target.value })}
                        />

                        <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={login}>
                              Login
                        </Button>

                        <Typography sx={{ mt: 2, cursor: "pointer" }} onClick={() => navigate("/signup")}>
                              Create account
                        </Typography>
                  </Paper>
            </Box>
      );
}