import { Box, Button, Typography, Card, Grid, Avatar, Divider } from "@mui/material";
import {
  CreditCard,
  SwapHoriz,
  TrendingUp,
  ArrowForwardIos,
  AccountBalance,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import User from "./User";
// @ts-ignore
import toRupiah from "@develoka/angka-rupiah-js";
import { route } from "../constant/route";

const UserProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const quickActions = [
    { 
      title: "Top Up", 
      icon: <CreditCard sx={{ fontSize: 32 }} />, 
      color: "#4caf50",
      link: route["topup"] 
    },
    { 
      title: "Transfer", 
      icon: <SwapHoriz sx={{ fontSize: 32 }} />, 
      color: "#2196f3",
      link: route["transfer"] 
    },
    { 
      title: "History", 
      icon: <TrendingUp sx={{ fontSize: 32 }} />, 
      color: "#9c27b0",
      link: route["topuphistory"] 
    },
  ];

  return (
    <User>
      <Box width={"100%"} maxWidth={900}>
        <Card 
          sx={{ 
            background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
            color: "white",
            borderRadius: 3,
            p: 4,
            mb: 3,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar 
                src={user?.photo_profile} 
                sx={{ width: 70, height: 70, border: "3px solid rgba(255,255,255,0.3)" }}
              />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  {user?.name || "User"}
                </Typography>
                <Typography sx={{ opacity: 0.8, fontSize: "14px" }}>
                  @{user?.user || "username"}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              Account Balance
            </Typography>
            <Typography variant="h3" fontWeight="bold" sx={{ color: "#ffd54f" }}>
              {toRupiah(user?.balance || 0, { dot: ",", floatingPoint: 0 })}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <AccountBalance sx={{ fontSize: 18, opacity: 0.8 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Account No: {user?.accountNumber || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{ 
              position: "absolute", 
              right: -50, 
              top: -50, 
              width: 200, 
              height: 200, 
              borderRadius: "50%", 
              background: "rgba(255,255,255,0.1)" 
            }} 
          />
        </Card>

        <Typography variant="h6" fontWeight="bold" mb={2} color="#1a237e">
          Quick Actions
        </Typography>
        <Grid container spacing={2} mb={3}>
          {quickActions.map((action) => (
            <Grid item xs={4} key={action.title}>
              <Card 
                onClick={() => navigate(action.link)}
                sx={{ 
                  p: 3, 
                  textAlign: "center", 
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": { 
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)" 
                  }
                }}
              >
                <Box 
                  sx={{ 
                    display: "inline-flex", 
                    p: 1.5, 
                    borderRadius: "50%", 
                    bgcolor: `${action.color}15`,
                    color: action.color,
                    mb: 1
                  }}
                >
                  {action.icon}
                </Box>
                <Typography fontWeight="600">{action.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card sx={{ p: 3, borderRadius: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold" color="#1a237e">
              Account Information
            </Typography>
            <Button 
              size="small" 
              onClick={() => navigate(route["settings"])}
              endIcon={<ArrowForwardIos sx={{ fontSize: 14 }} />}
            >
              Edit
            </Button>
          </Box>
          
          <Divider sx={{ mb: 2 }} />
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Email</Typography>
              <Typography fontWeight="500">{user?.email || "Not set"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Phone Number</Typography>
              <Typography fontWeight="500">{user?.phone_number || "Not set"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Bio</Typography>
              <Typography fontWeight="500">{user?.bio || "No bio yet"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Member Since</Typography>
              <Typography fontWeight="500">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </User>
  );
};

export default UserProfile;