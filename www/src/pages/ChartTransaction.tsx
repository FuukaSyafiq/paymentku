import { ArrowBack } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import User from "./User";
import { useNavigate } from "react-router-dom";
import {
  useGetIncomeDataQuery,
  useGetOutcomeDataQuery,
} from "../services/graphApi";

const ChartTransaction = () => {
  const navigate = useNavigate();
  const { data: incomeArr } = useGetIncomeDataQuery();
  const { data: outcomeArr } = useGetOutcomeDataQuery();
  console.log(incomeArr);
  console.log(outcomeArr);
  return (
    <>
      <User>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            gap={1}
            width={"100%"}
            alignItems={"center"}
            mt={2}
            onClick={() => navigate(-1)}
          >
            <ArrowBack style={{ marginLeft: "10px", cursor: "pointer" }} />
          </Box>
          <Box>
            <Typography fontWeight={"bold"} fontSize={"30px"}>
              Grafik Transaksi
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={10}
            flexDirection={"column"}
          >
            <Typography fontWeight={"bold"} fontSize={"20px"} mb={"20px"}>
              Pendapatan
            </Typography>
            <LineChart data={incomeArr?.data ?? []} width={1000} height={400}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => `Rp${value / 1000}k`} />
              <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
              <Line
                type="linear"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={10}
            flexDirection={"column"}
          >
            <Typography fontWeight={"bold"} fontSize={"20px"} mb={"20px"}>
              Pengeluaran
            </Typography>
            <LineChart data={outcomeArr?.data ?? []} width={1000} height={400}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => `Rp${value / 1000}k`} />
              <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
              <Line
                type="linear"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={10}
            flexDirection={"column"}
          >
            <Typography fontWeight={"bold"} fontSize={"20px"} mb={"20px"}>
              Pertumbuhan saldo
            </Typography>
            <LineChart data={incomeArr?.data ?? []} width={1000} height={400}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => `Rp${value / 1000}k`} />
              <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
              <Line
                type="linear"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </Box>
        </Box>
      </User>
    </>
  );
};

export default ChartTransaction;
