import User from "./User";
import { 
  Box, 
  Typography, 
  Card, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemButton,
  Switch,
  Divider,
  Avatar,
} from "@mui/material";
import { 
  Person, 
  Notifications, 
  Security, 
  DarkMode, 
  Language, 
  Help,
  ArrowBackIos,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Settings = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const settingsItems = [
    { icon: <Person />, title: "Personal Information", subtitle: "Name, email, phone", onClick: () => {} },
    { icon: <Notifications />, title: "Notifications", subtitle: "Push notifications", onClick: () => {} },
    { icon: <Security />, title: "Security", subtitle: "Password, 2FA", onClick: () => {} },
    { icon: <DarkMode />, title: "Dark Mode", subtitle: "Toggle dark theme", onClick: () => {}, isSwitch: true },
    { icon: <Language />, title: "Language", subtitle: "English / Indonesia", onClick: () => {} },
  ];

  return (
    <User>
      <Box width={"100%"} maxWidth={600}>
        <Box display="flex" alignItems="center" gap={1} mb={3} onClick={() => navigate(-1)} sx={{ cursor: "pointer" }}>
          <ArrowBackIos sx={{ fontSize: 18, color: "#1a237e" }} />
          <Typography color="#1a237e" fontWeight="bold">Back</Typography>
        </Box>

        <Typography variant="h5" fontWeight="bold" color="#1a237e" mb={3}>
          Settings
        </Typography>

        <Card sx={{ borderRadius: 2, overflow: "hidden", mb: 3 }}>
          <Box p={3} display="flex" alignItems="center" gap={2}>
            <Avatar 
              src={user?.photo_profile} 
              sx={{ width: 60, height: 60 }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {user?.name || "User"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                @{user?.user || "username"}
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card sx={{ borderRadius: 2 }}>
          <List disablePadding>
            {settingsItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <ListItem disablePadding>
                  <ListItemButton onClick={item.onClick}>
                    <ListItemIcon sx={{ minWidth: 50, color: "#1a237e" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.title}
                      secondary={item.subtitle}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                    {item.isSwitch ? (
                      <Switch defaultChecked={false} color="warning" />
                    ) : (
                      <ArrowBackIos sx={{ fontSize: 16, color: "gray" }} />
                    )}
                  </ListItemButton>
                </ListItem>
                {index < settingsItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Card>

        <Card sx={{ borderRadius: 2, mt: 3 }}>
          <ListItemButton onClick={() => navigate("/help")}>
            <ListItemIcon sx={{ minWidth: 50, color: "#1a237e" }}>
              <Help />
            </ListItemIcon>
            <ListItemText 
              primary="Help & Support"
              secondary="Get help or report issues"
              primaryTypographyProps={{ fontWeight: 500 }}
            />
            <ArrowBackIos sx={{ fontSize: 16, color: "gray" }} />
          </ListItemButton>
        </Card>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Paymentku v1.0.0
          </Typography>
        </Box>
      </Box>
    </User>
  );
};

import React from "react";
export default Settings;