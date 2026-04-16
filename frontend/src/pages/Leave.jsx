import { useState, useEffect } from "react";
import {
      Box,
      TextField,
      Button,
      Typography,
      Paper,
      MenuItem,
      Stack,
      Divider,
} from "@mui/material";
import Navbar from "../components/common/Navbar";
import api from "../services/api";

export default function Leave() {
      const token = localStorage.getItem("token");

      const [data, setData] = useState({
            start_date: "",
            end_date: "",
            type: "",
            reason: "",
      });

      const [leaves, setLeaves] = useState([]); // ✅ NEW

      const handleChange = (e) => {
            setData({ ...data, [e.target.name]: e.target.value });
      };

      // ✅ GET LEAVES
      const getLeaves = async () => {
            try {
                  const res = await api.get("/leaves", {
                        headers: { Authorization: token },
                  });
                  setLeaves(res.data);
            } catch (err) {
                  console.log(err);
            }
      };

      useEffect(() => {
            getLeaves();
      }, []);

      // ✅ APPLY LEAVE
      const applyLeave = async () => {
            try {
                  if (!data.start_date || !data.end_date || !data.reason || !data.type) {
                        return alert("All fields are required ❌");
                  }

                  if (data.end_date < data.start_date) {
                        return alert("End date must be after start date ❌");
                  }

                  await api.post("/leaves/apply", data, {
                        headers: { Authorization: token },
                  });

                  alert("Leave applied successfully ✅");

                  setData({
                        start_date: "",
                        end_date: "",
                        type: "",
                        reason: "",
                  });

                  getLeaves(); // 🔥 refresh list
            } catch (err) {
                  alert(err.response?.data?.message || "Error applying leave ❌");
            }
      };

      return (
            <>
                  <Navbar />

                  <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                        <Paper sx={{ p: 4, width: 450, borderRadius: 3 }}>
                              <Typography variant="h5" textAlign="center">
                                    Apply Leave
                              </Typography>

                              <Stack spacing={2} mt={3}>
                                    <TextField
                                          label="From Date"
                                          type="date"
                                          name="start_date"
                                          value={data.start_date}
                                          onChange={handleChange}
                                          InputLabelProps={{ shrink: true }}
                                    />

                                    <TextField
                                          label="To Date"
                                          type="date"
                                          name="end_date"
                                          value={data.end_date}
                                          onChange={handleChange}
                                          InputLabelProps={{ shrink: true }}
                                    />

                                    <TextField
                                          label="Leave Type"
                                          name="type"
                                          select
                                          value={data.type}
                                          onChange={handleChange}
                                    >
                                          <MenuItem value="SICK">Sick Leave</MenuItem>
                                          <MenuItem value="CASUAL">Casual Leave</MenuItem>
                                          <MenuItem value="PAID">Paid Leave</MenuItem>
                                    </TextField>

                                    <TextField
                                          label="Reason"
                                          name="reason"
                                          multiline
                                          rows={3}
                                          value={data.reason}
                                          onChange={handleChange}
                                    />

                                    <Button variant="contained" onClick={applyLeave}>
                                          Apply Leave
                                    </Button>
                              </Stack>

                              {/* 🔥 DIVIDER */}
                              <Divider sx={{ my: 4 }} />

                              {/* ✅ LEAVE HISTORY */}
                              <Typography variant="h6">Your Leaves</Typography>

                              {leaves.length === 0 && (
                                    <Typography mt={2}>No leave records found</Typography>
                              )}

                              {leaves.map((l, i) => (
                                    <Box
                                          key={i}
                                          sx={{
                                                mt: 2,
                                                p: 2,
                                                border: "1px solid #ddd",
                                                borderRadius: 2,
                                          }}
                                    >
                                          <Typography>
                                                <b>{l.start_date}</b> → <b>{l.end_date}</b>
                                          </Typography>

                                          <Typography>Type: {l.type}</Typography>
                                          <Typography>Reason: {l.reason}</Typography>

                                          <Typography
                                                sx={{
                                                      mt: 1,
                                                      color:
                                                            l.status === "PENDING"
                                                                  ? "orange"
                                                                  : l.status === "APPROVED"
                                                                        ? "green"
                                                                        : "red",
                                                }}
                                          >
                                                Status: {l.status}
                                          </Typography>
                                    </Box>
                              ))}
                        </Paper>
                  </Box>
            </>
      );
}