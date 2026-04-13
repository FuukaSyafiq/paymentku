import {
  Box,
  Button,
  Typography,
  Card,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  useDeleteHistoryTopUpMutation,
  useGetHistoryTopUpQuery,
} from "../services/historyApi";
import User from "./User";
import { ArrowBack, Delete, Loop } from "@mui/icons-material";
import { HistoryTopUps } from "../types/response";
import timeStampToLocaleString from "../utils/timeStampToClient";
import { useNavigate } from "react-router-dom";
import useAlert from "../hooks/useAlert";
import { route } from "../constant/route";
import SkeletonList from "../component/SkeletonList";
import { useState } from "react";
// @ts-ignore
import toRupiah from "@develoka/angka-rupiah-js";

const HistoryTopup = () => {
  const { open, handleClose, handleOpen } = useAlert();
  const { data, refetch, isSuccess } = useGetHistoryTopUpQuery();
  const [deleteTopUp] = useDeleteHistoryTopUpMutation();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography fontWeight="bold">Delete All History?</Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            This action cannot be undone. All your transaction history will be permanently deleted.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="error" onClick={() => { deleteTopUp(); handleClose(); }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <User>
        <Box width={"100%"} maxWidth={800}>
          <Box display="flex" alignItems="center" gap={2} mb={3} onClick={() => navigate(-1)} sx={{ cursor: "pointer" }}>
            <ArrowBack sx={{ fontSize: 18, color: "#1a237e" }} />
            <Typography color="#1a237e" fontWeight="bold">Back</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" fontWeight="bold" color="#1a237e">
              Transaction History
            </Typography>
            <Box display="flex" gap={1}>
              <Button 
                size="small"
                variant="outlined" 
                startIcon={<Loop />}
                onClick={refetch}
                sx={{ borderColor: "#1a237e", color: "#1a237e" }}
              >
                Refresh
              </Button>
              <Button 
                size="small"
                variant="outlined" 
                color="error"
                startIcon={<Delete />}
                onClick={handleOpen}
              >
                Delete All
              </Button>
            </Box>
          </Box>

          <Card sx={{ borderRadius: 2, mb: 3 }}>
            <Tabs 
              value={tab} 
              onChange={(_, v) => setTab(v)}
              sx={{ 
                borderBottom: 1, borderColor: "divider",
                "& .MuiTab-root": { fontWeight: 600 }
              }}
            >
              <Tab label="Top Up" />
              <Tab label="Transfer" onClick={() => navigate(route["transferhistory"])} />
            </Tabs>
          </Card>

          {isSuccess ? (
            data?.data?.length === 0 ? (
              <Card sx={{ p: 6, textAlign: "center", borderRadius: 2 }}>
                <Typography variant="h6" color="text.secondary">
                  No transaction history yet
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Your top-up and transfer history will appear here
                </Typography>
              </Card>
            ) : (
              <Box display="flex" flexDirection="column" gap={2}>
                {data?.data?.map((d: HistoryTopUps) => (
                  <Card 
                    key={d.id}
                    onClick={() => navigate(`${route["topuphistory"]}/${d.id}`)}
                    sx={{ 
                      p: 2, 
                      borderRadius: 2,
                      cursor: "pointer",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      borderLeft: 4,
                      borderLeftColor: d.status === "SUCCESS" ? "#4caf50" : "#f44336",
                      "&:hover": { 
                        transform: "translateX(4px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }
                    }}
                  >
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="subtitle1" fontWeight="600" color="#1a237e">
                          Top Up
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {timeStampToLocaleString(d.createdAt)}
                        </Typography>
                      </Box>
                      <Box textAlign="right">
                        <Typography 
                          variant="h6" 
                          fontWeight="bold" 
                          color={d.status === "SUCCESS" ? "#4caf50" : "#f44336"}
                        >
                          +{toRupiah(d.amount, { dot: ",", floatingPoint: 0 })}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            px: 1, 
                            py: 0.5, 
                            borderRadius: 1,
                            bgcolor: d.status === "SUCCESS" ? "#e8f5e9" : "#ffebee",
                            color: d.status === "SUCCESS" ? "#2e7d32" : "#c62828"
                          }}
                        >
                          {d.status}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>
            )
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center" pb={5}>
              <SkeletonList total={5} />
            </Box>
          )}
        </Box>
      </User>
    </>
  );
};

export default HistoryTopup;