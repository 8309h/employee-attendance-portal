import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import {
      Table,
      TableHead,
      TableRow,
      TableCell,
      TableBody,
      Box,
      Paper,
      Typography,
} from "@mui/material";
import api from "../services/api";

export default function Timesheet() {
      const [data, setData] = useState([]);
      const token = localStorage.getItem("token");

      // Fetch Data
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const res = await api.get("/attendance/timesheet", {
                              headers: { Authorization: token },
                        });

                        console.log("FULL API RESPONSE:", res.data); // 🔥 DEBUG
                        setData(res.data);
                  } catch (err) {
                        console.log("API ERROR:", err);
                  }
            };

            fetchData();
      }, []);

      const formatTime = (time) => {
            console.log("RAW TIME:", time); // 🔥 DEBUG

            if (!time) return "-";

            try {
                  let finalTime = time;

                  // 🔥 Case 1: If NOT ISO format → add Z
                  if (typeof time === "string" && !time.includes("T")) {
                        finalTime = time + "Z";
                  }

                  // 🔥 Case 2: If already ISO → use directly
                  const date = new Date(finalTime);

                  console.log("FINAL TIME:", finalTime); // 🔥 DEBUG
                  console.log("PARSED DATE:", date.toString()); // 🔥 DEBUG

                  return date.toLocaleTimeString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                  });
            } catch (err) {
                  console.log("FORMAT ERROR:", err);
                  return "Invalid Time";
            }
      };

      const getDuration = (inTime, outTime) => {
            if (!inTime || !outTime) return "-";

            const diff = new Date(outTime) - new Date(inTime);

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            return `${hours}h ${mins}m`;
      };


      return (
            <>
                  <Navbar />

                  <Box p={4}>
                        <Paper sx={{ p: 3 }}>
                              <Typography variant="h6" mb={2}>
                                    Timesheet
                              </Typography>

                              <Table>
                                    <TableHead>
                                          <TableRow>
                                                <TableCell><b>Date</b></TableCell>
                                                <TableCell><b>Check In</b></TableCell>
                                                <TableCell><b>Check Out</b></TableCell>
                                                <TableCell><b>Working Hrs</b></TableCell>
                                          </TableRow>
                                    </TableHead>

                                    <TableBody>
                                          {data.length === 0 && (
                                                <TableRow>
                                                      <TableCell colSpan={3} align="center">
                                                            No records found
                                                      </TableCell>
                                                </TableRow>
                                          )}

                                          {data.map((row, i) => {
                                                console.log("ROW DATA:", row); 

                                                return (
                                                      <TableRow key={i}>
                                                            <TableCell>{row.date}</TableCell>

                                                            <TableCell>
                                                                  {formatTime(row.check_in)}
                                                            </TableCell>

                                                            <TableCell>
                                                                  {formatTime(row.check_out)}
                                                            </TableCell>
                                                            <TableCell>{getDuration(row.check_in, row.check_out)}</TableCell>
                                                      </TableRow>
                                                );
                                          })}
                                    </TableBody>
                              </Table>
                        </Paper>
                  </Box>
            </>
      );
}