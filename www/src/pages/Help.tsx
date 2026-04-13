import User from "./User";
import { 
  Box, 
  Typography, 
  Card, 
  TextField, 
  Button, 
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { 
  ArrowBackIos,
  Send, 
  Email,
  Chat,
  ExpandMore,
  CheckCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSendHelpMessageMutation } from "../services/authApi";

const Help = () => {
  const [value, setValue] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const [sendHelpMessage, { isLoading }] = useSendHelpMessageMutation();
  const navigate = useNavigate();

  const submittedForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    
    try {
      await sendHelpMessage({ message: value }).unwrap();
      setSent(true);
      setValue("");
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const faqItems = [
    { question: "How do I top up my account?", answer: "Go to Top Up menu, enter the amount, and follow the payment instructions." },
    { question: "How to transfer money?", answer: "Use the Transfer menu, enter recipient details and amount, then confirm." },
    { question: "Is my transaction secure?", answer: "Yes, we use bank-grade encryption to protect all your transactions." },
    { question: "How to contact support?", answer: "You can send us a message using the form below or email support@paymentku.com" },
  ];

  return (
    <User>
      <Box width={"100%"} maxWidth={700}>
        <Box display="flex" alignItems="center" gap={2} mb={3} onClick={() => navigate(-1)} sx={{ cursor: "pointer" }}>
          <ArrowBackIos sx={{ fontSize: 18, color: "#1a237e" }} />
          <Typography color="#1a237e" fontWeight="bold">Back</Typography>
        </Box>

        <Typography variant="h5" fontWeight="bold" color="#1a237e" mb={1}>
          Help Center
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Find answers or contact us for support
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, borderRadius: 2, height: "100%" }}>
              <Typography variant="h6" fontWeight="bold" color="#1a237e" mb={3}>
                Frequently Asked Questions
              </Typography>
              {faqItems.map((faq, index) => (
                <Accordion key={index} sx={{ boxShadow: "none", border: "1px solid #eee", mb: 1 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight="500">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#1a237e" mb={3}>
                Contact Us
              </Typography>
              
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Box sx={{ p: 1, borderRadius: 1, bgcolor: "rgba(26,35,126,0.1)" }}>
                  <Email sx={{ color: "#1a237e" }} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Email</Typography>
                  <Typography fontWeight="500">support@paymentku.com</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <Box sx={{ p: 1, borderRadius: 1, bgcolor: "rgba(26,35,126,0.1)" }}>
                  <Chat sx={{ color: "#1a237e" }} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Live Chat</Typography>
                  <Typography fontWeight="500">Available 24/7</Typography>
                </Box>
              </Box>

              <Typography variant="subtitle2" fontWeight="bold" mb={2}>
                Send us a message
              </Typography>
              <form onSubmit={submittedForm}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Describe your issue..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  sx={{ mb: 2 }}
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth
                  disabled={isLoading || !value.trim()}
                  sx={{ 
                    bgcolor: "#1a237e",
                    "&:hover": { bgcolor: "#283593" }
                  }}
                  endIcon={sent ? <CheckCircle /> : <Send />}
                >
                  {isLoading ? <CircularProgress size={20} color="inherit" /> : sent ? "Sent!" : "Send Message"}
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </User>
  );
};

export default Help;