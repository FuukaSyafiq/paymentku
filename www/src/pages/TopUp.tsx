import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
  DialogActions,
  Backdrop,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTopupMutation } from "../services/transactionApi";
import { ArrowBack } from "@mui/icons-material";
// @ts-ignore
import toRupiah from "@develoka/angka-rupiah-js";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";

const TopUp = () => {
  const [amount, setAmount] = useState<number>(0);
  const [err, setErr] = useState<any>("");
  const user = useSelector((state: RootState) => state.user);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [topup, { data, isSuccess, error, isLoading }] = useTopupMutation();
  const [operational, setOperational] = useState<boolean>(true);
  const [totalGettingMoney, setTotalGettingMoney] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const navigate = useNavigate();

  function calculatePrice(amount: number, operationalFee: boolean): number {
    const operational = operationalFee ? 2 / 100 : 0;
    return amount * operational + amount;
  }
  function calculateGettingMoney(amount: number): number {
    return amount;
  }

  useEffect(() => {
    const total = calculatePrice(amount, operational);
    setTotalPrice(total);
    setTotalGettingMoney(calculateGettingMoney(amount));
  }, [amount, operational]);
  useEffect(() => {
    if (isSuccess) {
      setOpenSnackbar(true);
    }
  }, [isSuccess, error]);

  return (
    <>
      {openSnackbar && (
        <Snackbar
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          autoHideDuration={3000}
          color="success"
          message={data?.message}
        />
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      ></Backdrop>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" fontWeight={"bold"}>
          Confirm payment
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" fontWeight={"bold"}>
            Are you sure you want to topup{" "}
            {toRupiah(totalGettingMoney, { dot: ",", floatingPoint: 0 })}
            <br></br>
            You will be charged{" "}
            {toRupiah(totalPrice, { dot: ",", floatingPoint: 0 })} Do you want
            to proceed ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="error"
          >
            No
          </Button>
          <Button
            variant="contained"
            disabled={isLoading == false ? false : true}
            color="success"
            onClick={async () => {
              try {
                await topup({ amount: totalGettingMoney }).unwrap();
                setOpen(false);
              } catch (error: any) {
                setErr(error.data.message);
              }
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Box display={"flex"} width={"100%"} py={2} flexDirection={"column"}>
        <Box
          display={"flex"}
          gap={1}
          alignItems={"center"}
          onClick={() => navigate(-1)}
        >
          <ArrowBack style={{ marginLeft: "10px", cursor: "pointer" }} />
        </Box>
        <Box width={"100%"} textAlign={"center"}>
          <Typography fontWeight={"bold"} fontSize={"30px"}>
            Topup payment
          </Typography>
        </Box>
        <Box display={"flex"} width={"100%"}>
          <Box
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            py={4}
            px={8}
          >
            <Box
              width={"100%"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <InputLabel sx={{ fontWeight: "bold", fontSize: "15px" }}>
                  Amount
                </InputLabel>
                <TextField
                  type="number"
                  fullWidth
                  value={amount == 0 ? "" : amount}
                  onChange={(e) => {
                    const num = parseInt(e.target.value);
                    if (num <= 49) {
                      setAmount(num);
                      return;
                    }
                    if (num > 100000000) {
                      setErr("Amount exceeded");
                      return;
                    }
                    setErr("");
                    if (e.target.value === "") {
                      setAmount(0);
                      return;
                    }
                    setAmount(num);
                    setOperational(true);
                  }}
                />
                {err && <Typography color={"red"}>{err}</Typography>}
              </Box>
            </Box>
            <Box
              display={"flex"}
              width={"100%"}
              marginY={"20px"}
              gap={"20px"}
              flexWrap={"wrap"}
              alignItems={"center"}
            >
              <Box
                borderRadius={"20px"}
                paddingBlock={"5px"}
                paddingInline={"10px"}
                color={"black"}
                bgcolor={"lightgray"}
                onClick={() => {
                  setAmount(50000);
                  setOperational(true);
                }}
              >
                {toRupiah(50000, { dot: ",", floatingPoint: 0 })}
              </Box>
              <Box
                borderRadius={"20px"}
                paddingBlock={"5px"}
                paddingInline={"10px"}
                color={"black"}
                bgcolor={"lightgray"}
                onClick={() => {
                  setAmount(100000);
                  setOperational(true);
                }}
              >
                {toRupiah(100000, { dot: ",", floatingPoint: 0 })}
              </Box>
              <Box
                borderRadius={"20px"}
                paddingBlock={"5px"}
                paddingInline={"10px"}
                color={"black"}
                bgcolor={"lightgray"}
                onClick={() => {
                  setAmount(500000);
                  setOperational(true);
                }}
              >
                {toRupiah(500000, { dot: ",", floatingPoint: 0 })}
              </Box>
              <Box
                borderRadius={"20px"}
                paddingBlock={"5px"}
                paddingInline={"10px"}
                color={"black"}
                bgcolor={"lightgray"}
                onClick={() => {
                  setAmount(1000000);
                  setOperational(true);
                }}
              >
                {toRupiah(1000000, { dot: ",", floatingPoint: 0 })}
              </Box>
            </Box>
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            py={4}
            px={8}
          >
            <Box
              border={"1px solid black"}
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              p={2}
              justifyContent={"center"}
              alignItems={"flex-start"}
              borderRadius={"10px"}
            >
              <Typography fontWeight={"bold"} fontSize={"18px"}>
                Information :
              </Typography>
              <Box width={"100%"}>
                <Typography>
                  Amount : {toRupiah(amount, { dot: ",", floatingPoint: 0 })}
                </Typography>
                <Typography>
                  Balance :{" "}
                  {toRupiah(user.balance, { dot: ",", floatingPoint: 0 })}
                </Typography>
                <Typography>
                  Operational 2%:{" "}
                  {toRupiah(operational ? (amount * 2) / 100 : 0, {
                    dot: ",",
                    floatingPoint: 0,
                  })}
                </Typography>
              </Box>
              <Typography>
                Total obtained :{" "}
                {toRupiah(totalGettingMoney, { dot: ",", floatingPoint: 0 })}
              </Typography>
              <Typography mb={1}>
                Total payment :{" "}
                {toRupiah(totalPrice, { dot: ",", floatingPoint: 0 })}
              </Typography>
              <Button
                variant="contained"
                fullWidth
                color="success"
                disabled={amount == 0 ? true : false}
                onClick={() => {
                  if (totalPrice <= 0) return;
                  setOpen(true);
                }}
              >
                Topup
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopUp;
