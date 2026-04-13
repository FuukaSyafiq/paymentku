import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";
import {
  History,
  BarChart,
  Help,
  Settings,
  AccountBalance,
  CreditCard,
  SwapHoriz,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import React, { ReactNode, ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { route } from "../constant/route";

type Props = {
  children: ReactNode | ReactElement;
};

interface MenuItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const User: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const darkMode = useSelector((state: RootState) => state.darkMode);

  const menuItems: MenuItem[] = [
    {
      name: "Overview",
      link: route["user"],
      icon: <AccountBalance />,
    },
    {
      name: "Transfer",
      link: route["transfer"],
      icon: <SwapHoriz />,
    },
    {
      name: "Top Up",
      link: route["topup"],
      icon: <CreditCard />,
    },
    {
      name: "History",
      link: route["topuphistory"],
      icon: <History />,
    },
    {
      name: "Analytics",
      link: route["chartTransaction"],
      icon: <BarChart />,
    },
  ];

  const bottomMenuItems: MenuItem[] = [
    {
      name: "Settings",
      link: route["settings"],
      icon: <Settings />,
    },
    {
      name: "Help",
      link: route["help"],
      icon: <Help />,
    },
  ];

  const isActive = (link: string) => {
    if (link === route["user"]) {
      return location.pathname === "/dashboard/user" || location.pathname === "/dashboard/user/";
    }
    return location.pathname.includes(link);
  };

  return (
    <Box display={"flex"} position={"relative"} height={"100%"} minHeight="80vh">
      <Box
        display={"flex"}
        width={280}
        bgcolor={darkMode.isDark ? "#1a1a2e" : "#fff"}
        flexDirection={"column"}
        sx={{
          borderRight: darkMode.isDark 
            ? "1px solid rgba(255,255,255,0.1)" 
            : "1px solid rgba(0,0,0,0.08)",
          boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <Box p={3}>
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            color={darkMode.isDark ? "#ffd54f" : "#1a237e"}
          >
            Menu
          </Typography>
        </Box>
        
        <List sx={{ px: 1, flex: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => navigate(item.link)}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive(item.link) 
                    ? (darkMode.isDark ? "rgba(255,213,79,0.15)" : "rgba(26,35,126,0.1)")
                    : "transparent",
                  "&:hover": {
                    bgcolor: darkMode.isDark 
                      ? "rgba(255,213,79,0.1)" 
                      : "rgba(26,35,126,0.05)",
                  },
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: 40,
                  color: isActive(item.link) 
                    ? (darkMode.isDark ? "#ffd54f" : "#1a237e")
                    : (darkMode.isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)"),
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: isActive(item.link) ? 600 : 400,
                      color: isActive(item.link) 
                        ? (darkMode.isDark ? "#ffd54f" : "#1a237e")
                        : (darkMode.isDark ? "white" : "black"),
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mx: 2 }} />

        <List sx={{ px: 1, pb: 2 }}>
          {bottomMenuItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => navigate(item.link)}
                sx={{
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: darkMode.isDark 
                      ? "rgba(255,213,79,0.1)" 
                      : "rgba(26,35,126,0.05)",
                  },
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: 40,
                  color: darkMode.isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiTypography-root": {
                      color: darkMode.isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        display={"flex"}
        width={"100%"}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        p={3}
      >
        {children}
      </Box>
    </Box>
  );
};

export default User;