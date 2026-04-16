import api from "./api";

export const checkIn = () => api.post("/attendance/checkin");
export const checkOut = () => api.post("/attendance/checkout");
export const getTodayStatus = () => api.get("/attendance/today-status");
export const getTimesheet = () => api.get("/attendance/timesheet");