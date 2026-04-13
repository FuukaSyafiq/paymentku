import {
  CopyrightOutlined,
  EmailOutlined,
  AccountBalance,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { Box, Link, Typography, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { route } from "../constant/route";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a237e",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <AccountBalance sx={{ mr: 1, fontSize: 28, color: "#ffd54f" }} />
              <Typography variant="h6" fontWeight="bold">
                Paymentku
              </Typography>
            </Box>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
              Your Trusted Digital Banking Partner. Secure, fast, and reliable
              financial services at your fingertips.
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailOutlined sx={{ color: "#ffd54f" }} />
              <Typography variant="body2">support@paymentku.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  "&:hover": { color: "#ffd54f" },
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Link>
              <Link
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  "&:hover": { color: "#ffd54f" },
                }}
                onClick={() => navigate(route["signin"])}
              >
                Sign In
              </Link>
              <Link
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  "&:hover": { color: "#ffd54f" },
                }}
                onClick={() => navigate(route["signup"])}
              >
                Register
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Services
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                Fund Transfer
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                Digital Top-Up
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                Transaction History
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Connect With Us
            </Typography>
            <Box display="flex" gap={2}>
              <Link
                href="https://linkedin.com/syafiq-paradisam"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  "&:hover": { color: "#ffd54f" },
                }}
              >
                <LinkedIn fontSize="large" />
              </Link>
              <Link
                href="https://github.com/FuukaSyafiq"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  "&:hover": { color: "#ffd54f" },
                }}
              >
                <GitHub fontSize="large" />
              </Link>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.5)", mt: 3 }}
            >
              © 2024 Paymentku. All rights reserved.
            </Typography>
          </Grid>
        </Grid>

        <Box
          mt={4}
          pt={2}
          borderTop="1px solid rgba(255,255,255,0.1)"
          textAlign="center"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={0.5}
          >
            <CopyrightOutlined
              sx={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }}
            />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
              2024 Paymentku. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

