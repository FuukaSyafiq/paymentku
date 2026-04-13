import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AccountBalance, Dashboard, Person, Help, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { route } from "../constant/route";
import { RootState } from "../app/store";

const settings: Array<{ name: string; link: string; icon: React.ReactNode }> = [
  {
    name: "Dashboard",
    link: route["dashboard"],
    icon: <Dashboard />,
  },
  {
    name: "Profile",
    link: route["user"],
    icon: <Person />,
  },
  {
    name: "Help",
    link: route["help"],
    icon: <Help />,
  },
];

function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: "#1a237e",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <Box
        maxWidth="xl"
        display={"flex"}
        justifyContent={"space-between"}
        p={1.5}
        px={4}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <AccountBalance sx={{ mr: 1, fontSize: 28, color: "#ffd54f" }} />
          <Typography
            variant="h6"
            noWrap
            fontWeight="bold"
            sx={{
              display: "flex",
              fontFamily: "sans-serif",
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            Paymentku
          </Typography>
        </Box>
        {user.user != "" ? (
          <Box display={"flex"} alignItems={"center"}>
            <Tooltip title="Account settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                  alt="User profile image" 
                  src={user.photo_profile}
                  sx={{ 
                    width: 40, 
                    height: 40,
                    border: "2px solid #ffd54f"
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <RouterLink
                  key={setting.name}
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={setting.link}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box display="flex" alignItems="center" gap={1}>
                      {setting.icon}
                      <Typography>{setting.name}</Typography>
                    </Box>
                  </MenuItem>
                </RouterLink>
              ))}
              <MenuItem onClick={() => navigate("/")}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Logout />
                  <Typography>Logout</Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Link
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 500,
                "&:hover": { color: "white" },
              }}
              onClick={() => navigate("/#features")}
            >
              Features
            </Link>
            <Box display={"flex"} gap={2}>
              <Button
                variant="outlined"
                sx={{ 
                  borderColor: "rgba(255,255,255,0.5)", 
                  color: "white",
                  "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" }
                }}
                onClick={() => navigate(route["signin"])}
              >
                Sign In
              </Button>
              <Button
                sx={{ 
                  bgcolor: "#ffd54f", 
                  color: "#1a237e",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#ffca28" }
                }}
                onClick={() => navigate(route["signup"])}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </AppBar>
  );
}
export default Navbar;