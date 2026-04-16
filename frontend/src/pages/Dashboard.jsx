import { useState, useEffect } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import api from "../services/api";
import Navbar from "../components/common/Navbar";

export default function Dashboard() {
      const [status, setStatus] = useState("LOADING...");
      const token = localStorage.getItem("token");

      const getStatus = async () => {
            try {
                  const res = await api.get("/attendance/today-status", {
                        headers: { Authorization: token },
                  });
                  console.log("STATUS:", res.data); 
                  setStatus(res.data.status);
            } catch (err) {
                  console.log("Status Error:", err);
            }
      };

      useEffect(() => {
            if (token) getStatus();
      }, []);

      // ✅ Check In
      const handleCheckIn = async () => {
            try {
                  const res = await api.post(
                        "/attendance/checkin",
                        {},
                        { headers: { Authorization: token } }
                  );

                  console.log("CHECKIN:", res.data); // 🔥 DEBUG
                  alert("Checked In");
                  getStatus();
            } catch (err) {
                  console.log("Checkin Error:", err.response);
                  alert(err.response?.data?.message || "Checkin failed");
            }
      };

      // ✅ Check Out
      const handleCheckOut = async () => {
            try {
                  const res = await api.post(
                        "/attendance/checkout",
                        {},
                        { headers: { Authorization: token } }
                  );

                  console.log("CHECKOUT:", res.data); 
                  alert("Checked Out");
                  getStatus();
            } catch (err) {
                  console.log("Checkout Error:", err.response);
                  alert(err.response?.data?.message || "Checkout failed");
            }
      };

      return (
            <>
                  <Navbar />

                  <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                        <Paper sx={{ p: 4, width: 350, textAlign: "center" }}>
                              <Typography variant="h5">Today's Attendance</Typography>

                              <Typography sx={{ mt: 2 }}>
                                    Status: <b>{status}</b>
                              </Typography>

                              {/* Buttons */}
                              <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3 }}
                                    onClick={handleCheckIn}
                              >
                                    Check In
                              </Button>

                              <Button
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                    onClick={handleCheckOut}
                              >
                                    Check Out
                              </Button>
                        </Paper>
                  </Box>
            </>
      );
}