import * as React from "react";
import dayjs from "dayjs";
import {
  Box,
  IconButton,
  Typography,
  Modal,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import FormField from "./FormField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80vw",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());
  const [firstNameIsRequired, setFirstNameIsRequired] = React.useState(false);
  const [firstNameIsVisible, setFirstNameIsVisible] = React.useState(false);
  const [lastNameIsRequired, setLastNameIsRequired] = React.useState(false);
  const [lastNameIsVisible, setLastNameIsVisible] = React.useState(false);
  const [emailIsRequired, setEmailIsRequired] = React.useState(false);
  const [emailIsVisible, setEmailIsVisible] = React.useState(false);
  const [scholarIdIsRequired, setScholarIdIsRequired] = React.useState(false);
  const [scholarIdIsVisible, setScholarIdIsVisible] = React.useState(false);
  const [addressIsRequired, setAddressIsRequired] = React.useState(false);
  const [addressIsVisible, setAddressIsVisible] = React.useState(false);
  const [paymentIsRequired, setPaymentIsRequired] = React.useState(false);
  const [paymentIsVisible, setPaymentIsVisible] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleStartChange = (newValue) => {
    setStartDate(newValue);
  };
  const handleEndChange = (newValue) => {
    setEndDate(newValue);
  };

  const fields = [
    {
      label: "First Name",
      isRequired: firstNameIsRequired,
      isVisible: firstNameIsVisible,
      setIsRequired: setFirstNameIsRequired,
      setIsVisible: setFirstNameIsVisible,
    },
    {
      label: "Last Name",
      isRequired: lastNameIsRequired,
      isVisible: lastNameIsVisible,
      setIsRequired: setLastNameIsRequired,
      setIsVisible: setLastNameIsVisible,
    },
    {
      label: "Email",
      isRequired: emailIsRequired,
      isVisible: emailIsVisible,
      setIsRequired: setEmailIsRequired,
      setIsVisible: setEmailIsVisible,
    },
    {
      label: "Scholar Id",
      isRequired: scholarIdIsRequired,
      isVisible: scholarIdIsVisible,
      setIsRequired: setScholarIdIsRequired,
      setIsVisible: setScholarIdIsVisible,
    },
    {
      label: "Address",
      isRequired: addressIsRequired,
      isVisible: addressIsVisible,
      setIsRequired: setAddressIsRequired,
      setIsVisible: setAddressIsVisible,
    },
    {
      label: "Payment",
      isRequired: paymentIsRequired,
      isVisible: paymentIsVisible,
      setIsRequired: setPaymentIsRequired,
      setIsVisible: setPaymentIsVisible,
    },
  ];

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddIcon style={{ color: "white", margin: "0 5px" }} />
        <Typography style={{ color: "white" }}>Create</Typography>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          <h2>Create Event</h2>
          <Stack>
            <Box>
              <TextField
                id="eventName"
                label="Event-Name"
                variant="standard"
                style={{ margin: "0 2rem" }}
                required
              />
              <TextField
                id="description"
                label="Event-Description"
                variant="standard"
                style={{ margin: "0 2rem" }}
                required
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Start Date"
                  value={startDate}
                  onChange={handleStartChange}
                  renderInput={(params) => (
                    <TextField {...params} style={{ margin: "0 2rem" }} />
                  )}
                />
                <DateTimePicker
                  label="End Date"
                  value={endDate}
                  onChange={handleEndChange}
                  renderInput={(params) => (
                    <TextField {...params} style={{ margin: "0 2rem" }} />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Stack>
          <h3 style={{ margin: "3rem 0" }}>Fields* for the Event</h3>
          <Stack>
            {fields.map((field, index) => {
              return (
                <FormField
                  key={index}
                  label={field.label}
                  isRequired={field.isRequired}
                  isVisible={field.isVisible}
                  setIsRequired={field.setIsRequired}
                  setIsVisible={field.setIsVisible}
                />
              );
            })}
          </Stack>
          <Box sx={{ width: "20%", margin: "3rem auto" }}>
            <Button sx={{ padding: "1rem", margin: "0 1rem" }}>
              <Typography>Submit</Typography>
            </Button>
            <Button sx={{ padding: "1rem", margin: "0 1rem" }}>
              <Typography>Clear</Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
