import { Box, Typography } from "@mui/material";
import { AccountBalance, CurrencyExchange } from "@mui/icons-material";
import CardItemDashboard from "../component/CardItemDashboard";
// @ts-ignore
import toRupiah from "@develoka/angka-rupiah-js";
import { route } from "../constant/route.ts";

const Dashboard = () => {
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mb={10}
      >
        <Box
          display={"flex"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={2}
        >
          <Box pl={2} pb={2}>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              Transaction
            </Typography>
          </Box>
          <CardItemDashboard
            card={[
              {
                title: "Topup",
                redirect: route["topup"],
                icon: (
                  <AccountBalance
                    style={{ fontSize: "100px" }}
                    color="primary"
                  />
                ),
                desc: `${toRupiah(0, {
                  dot: ",",
                  floatingPoint: 0,
                })} - ${toRupiah(100000000, { dot: ",", floatingPoint: 0 })}`,
              },
              {
                title: "Transfer",
                icon: (
                  <CurrencyExchange
                    style={{ fontSize: "90px" }}
                    color="warning"
                  />
                ),
                redirect: route["transfer"],
                desc: "Unlimited transfer",
              },
            ]}
            content="center"
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
