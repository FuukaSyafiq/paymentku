import { Box, Typography, Card, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import {
  useGetIncomeDataQuery,
  useGetOutcomeDataQuery,
} from "../services/graphApi";

const ChartTransaction = () => {
  const navigate = useNavigate();
  const { data: incomeArr } = useGetIncomeDataQuery();
  const { data: outcomeArr } = useGetOutcomeDataQuery();

  const totalIncome = incomeArr?.data?.reduce((acc: number, item: { amount: number }) => acc + item.amount, 0) || 0;
  const totalOutcome = outcomeArr?.data?.reduce((acc: number, item: { amount: number }) => acc + item.amount, 0) || 0;

  return (
    <User>
      <Box width={"100%"} maxWidth={1000}>
        <Box display="flex" alignItems="center" gap={2} mb={3} onClick={() => navigate(-1)} sx={{ cursor: "pointer" }}>
          <ArrowBackIos sx={{ fontSize: 18, color: "#1a237e" }} />
          <Typography color="#1a237e" fontWeight="bold">Back</Typography>
        </Box>

        <Typography variant="h5" fontWeight="bold" color="#1a237e" mb={1}>
          Analytics
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Track your financial performance
        </Typography>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, borderRadius: 2, bgcolor: "#e8f5e9" }}>
              <Typography variant="body2" color="text.secondary">Total Income</Typography>
              <Typography variant="h5" fontWeight="bold" color="#2e7d32">
                Rp {(totalIncome / 1000).toFixed(1)}k
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, borderRadius: 2, bgcolor: "#ffebee" }}>
              <Typography variant="body2" color="text.secondary">Total Outcome</Typography>
              <Typography variant="h5" fontWeight="bold" color="#c62828">
                Rp {(totalOutcome / 1000).toFixed(1)}k
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, borderRadius: 2, bgcolor: "#e3f2fd" }}>
              <Typography variant="body2" color="text.secondary">Net Balance</Typography>
              <Typography variant="h5" fontWeight="bold" color="#1565c0">
                Rp {((totalIncome - totalOutcome) / 1000).toFixed(1)}k
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#1a237e" mb={3}>
                Income Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={incomeArr?.data ?? []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString()}`} />
                  <Area type="monotone" dataKey="amount" stroke="#4caf50" fill="#c8e6c9" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#1a237e" mb={3}>
                Outcome Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={outcomeArr?.data ?? []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString()}`} />
                  <Area type="monotone" dataKey="amount" stroke="#f44336" fill="#ffcdd2" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#1a237e" mb={3}>
                Balance Growth
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={incomeArr?.data ?? []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString()}`} />
                  <Line type="monotone" dataKey="amount" stroke="#1a237e" strokeWidth={2} dot={{ fill: "#1a237e" }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </User>
  );
};

export default ChartTransaction;