import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  Grid,
  Container,
} from "@mui/material";
import {
  AccountBalance,
  Money,
  History,
  Security,
  Speed,
  Support,
  CreditCard,
  SwapHoriz,
  TrendingUp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { route } from "../constant/route";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box width={"100%"}>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #1a237e 0%, #283593 50%, #303f9f 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Paymentku
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                Your Trusted Digital Banking Partner
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                Experience seamless digital banking with secure fund transfers,
                instant top-ups, and comprehensive transaction management. All
                your banking needs in one place.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#ffd54f",
                    color: "#1a237e",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": { bgcolor: "#ffca28" },
                  }}
                  onClick={() => navigate(route["signup"])}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  onClick={() => navigate(route["signin"])}
                >
                  Sign In
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  p: 4,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    bgcolor: "rgba(255,255,255,0.95)",
                    borderRadius: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <AccountBalance
                      sx={{ fontSize: 40, color: "#1a237e", mr: 2 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#1a237e"
                      >
                        Paymentku
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Digital Banking
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#1a237e"
                    mb={1}
                  >
                    **** **** **** 4829
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Account Holder
                      </Typography>
                      <Typography fontWeight="bold">Your Name</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Balance
                      </Typography>
                      <Typography fontWeight="bold" color="success.main">
                        Rp 10,000,000
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={2}
            color="#1a237e"
          >
            Our Banking Services
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            mb={6}
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Comprehensive digital banking solutions tailored for your financial
            needs
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Money sx={{ fontSize: 50, color: "#1a237e" }} />,
                title: "Fund Transfers",
                desc: "Send money securely to other Paymentku users or external bank accounts with instant processing.",
              },
              {
                icon: <CreditCard sx={{ fontSize: 50, color: "#1a237e" }} />,
                title: "Digital Top-Up",
                desc: "Top-up your digital wallet instantly for various e-wallets and financial services.",
              },
              {
                icon: <History sx={{ fontSize: 50, color: "#1a237e" }} />,
                title: "Transaction History",
                desc: "Track all your transactions with detailed reports and real-time updates.",
              },
              {
                icon: <Security sx={{ fontSize: 50, color: "#1a237e" }} />,
                title: "Bank-Grade Security",
                desc: "Your funds are protected with advanced encryption and multi-layer security.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, background: "#1a237e" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" mb={3} color="white">
                Why Choose Paymentku?
              </Typography>
              <List>
                {[
                  {
                    icon: <Speed />,
                    title: "Fast Transactions",
                    desc: "Process transactions in seconds, not days",
                  },
                  {
                    icon: <Security />,
                    title: "Secure & Reliable",
                    desc: "Bank-level security for all your transactions",
                  },
                  {
                    icon: <Support />,
                    title: "24/7 Support",
                    desc: "Round-the-clock customer assistance",
                  },
                  {
                    icon: <TrendingUp />,
                    title: "Real-Time Updates",
                    desc: "Track your transactions instantly",
                  },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 50, color: "#ffd54f" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography fontWeight="bold" color="white">
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                          {item.desc}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {[
                  { icon: <SwapHoriz />, label: "Quick Transfer" },
                  { icon: <CreditCard />, label: "Easy Top-Up" },
                  { icon: <History />, label: "Full History" },
                  { icon: <Security />, label: "Safe & Secure" },
                ].map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Card
                      sx={{
                        p: 3,
                        textAlign: "center",
                        bgcolor: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 2,
                      }}
                    >
                      <Box sx={{ color: "#ffd54f", mb: 1 }}>{item.icon}</Box>
                      <Typography color="white" fontWeight="bold">
                        {item.label}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="md">
          <Card sx={{ p: 5, textAlign: "center", borderRadius: 4 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} color="#1a237e">
              Start Your Digital Banking Journey
            </Typography>
            <Typography color="text.secondary" mb={4}>
              Join thousands of users who trust Paymentku for their daily
              banking needs
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: "#1a237e", px: 5, borderRadius: 2 }}
                onClick={() => navigate(route["signup"])}
              >
                Create Account
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#1a237e",
                  color: "#1a237e",
                  px: 5,
                  borderRadius: 2,
                }}
                onClick={() => navigate(route["dashboard"])}
              >
                Explore Features
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>

      <Box sx={{ py: 4, bgcolor: "#1a237e", textAlign: "center" }}>
        <Typography color="white" fontWeight="bold" variant="h5" mb={1}>
          Paymentku
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
          Your Trusted Digital Banking Partner
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

