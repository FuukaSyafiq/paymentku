import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";
import React, { ReactElement, ReactNode } from "react";
import { Help } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { route } from "../constant/route";
import BarChartIcon from "@mui/icons-material/BarChart";

type Props = {
  children: ReactNode | ReactElement;
};

const User: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <>
      <Box display={"flex"} position={"relative"} height={"100%"}>
        <Box
          display={"flex"}
          paddingBottom={30}
          width={"20%"}
          bgcolor={darkMode.isDark ? "#222" : "white"}
          mr={3}
          flexDirection={"column"}
          alignItems={"center"}
          overflow={"scroll"}
          sx={{ scrollbarWidth: "none" }}
        >
          <List sx={{ width: "100%" }}>
            <ListItem
              disablePadding
              onClick={() => navigate(route["user"])}
              sx={{ width: "100%" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon
                    style={{ color: darkMode.isDark ? "white" : "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: "bold",
                    color: darkMode.isDark ? "white" : "black",
                  }}
                  primary="Profile"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => navigate(route["topuphistory"])}
              sx={{ width: "100%" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon
                    style={{ color: darkMode.isDark ? "white" : "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: "bold",
                    color: darkMode.isDark ? "white" : "black",
                  }}
                  primary="History"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => navigate(route["chartTransaction"])}
              sx={{ width: "100%" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: "bold",
                    color: darkMode.isDark ? "white" : "black",
                  }}
                  primary="Grafik transaksi"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => navigate(route["help"])}
              sx={{ width: "100%" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Help
                    style={{ color: darkMode.isDark ? "white" : "black" }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: "bold",
                    color: darkMode.isDark ? "white" : "black",
                  }}
                  primary="Help"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={5}
          flexDirection={"column"}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default User;
