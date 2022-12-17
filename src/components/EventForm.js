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
import EditIcon from "@mui/icons-material/Edit";
import FormField from "./FormField";
import { createEvent, updateEvent } from "../utils/eventServices";

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

export default function BasicModal({isEditable, _id = null}) {
  const [open, setOpen] = React.useState(false);
  const [eventName, setEventName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());
  const [images, setImages] = React.useState([]);
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
  const handleEventNameChange = (e) => { 
    setEventName(e.target.value);
  }
  const handleDescriptionChange = (e) => { 
    setDescription(e.target.value);
  }

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

  const registerDataChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async () => {
    const myForm = new FormData();
    myForm.set("eventName", eventName);
    myForm.set("description", description);
    myForm.set("startDate", startDate);
    myForm.set("endDate", endDate);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    myForm.append(
      "firstName",
      JSON.stringify({
        isRequired: firstNameIsRequired,
        isVisible: firstNameIsVisible,
      })
    );
    myForm.append(
      "lastName",
      JSON.stringify({
        isRequired: lastNameIsRequired,
        isVisible: lastNameIsVisible,
      })
    );
    myForm.append(
      "email",
      JSON.stringify({
        isRequired: emailIsRequired,
        isVisible: emailIsVisible,
      })
    );
    myForm.append(
      "scholarId",
      JSON.stringify({
        isRequired: scholarIdIsRequired,
        isVisible: scholarIdIsVisible,
      })
    );
    myForm.append(
      "address",
      JSON.stringify({
        isRequired: addressIsRequired,
        isVisible: addressIsVisible,
      })
    );
    myForm.append(
      "payment",
      JSON.stringify({
        isRequired: paymentIsRequired,
        isVisible: paymentIsVisible,
      })
    )
    
    let res = await createEvent(myForm);
    console.log(res);
    resetForm();
    handleClose();
  }

  const handleEdit = async () => { 
    const myForm = new FormData();
    myForm.set("eventName", eventName);
    myForm.set("description", description);
    myForm.set("startDate", startDate);
    myForm.set("endDate", endDate);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    myForm.append(
      "firstName",
      JSON.stringify({
        isRequired: firstNameIsRequired,
        isVisible: firstNameIsVisible,
      })
    );
    myForm.append(
      "lastName",
      JSON.stringify({
        isRequired: lastNameIsRequired,
        isVisible: lastNameIsVisible,
      })
    );
    myForm.append(
      "email",
      JSON.stringify({
        isRequired: emailIsRequired,
        isVisible: emailIsVisible,
      })
    );
    myForm.append(
      "scholarId",
      JSON.stringify({
        isRequired: scholarIdIsRequired,
        isVisible: scholarIdIsVisible,
      })
    );
    myForm.append(
      "address",
      JSON.stringify({
        isRequired: addressIsRequired,
        isVisible: addressIsVisible,
      })
    );
    myForm.append(
      "payment",
      JSON.stringify({
        isRequired: paymentIsRequired,
        isVisible: paymentIsVisible,
      })
    );

    let res = await updateEvent(_id, myForm);
    console.log(res);
    resetForm();
    handleClose();
  }

  const resetForm = () => {
    setEventName("");
    setDescription("");
    setStartDate(dayjs());
    setEndDate(dayjs());
    setFirstNameIsRequired(false);
    setFirstNameIsVisible(false);
    setLastNameIsRequired(false);
    setLastNameIsVisible(false);
    setEmailIsRequired(false);
    setEmailIsVisible(false);
    setScholarIdIsRequired(false);
    setScholarIdIsVisible(false);
    setAddressIsRequired(false);
    setAddressIsVisible(false);
    setPaymentIsRequired(false);
    setPaymentIsVisible(false);
  }
  return (
    <div>
      <IconButton onClick={handleOpen}>
        {!isEditable && (
          <>
            <AddIcon style={{ color: "white", margin: "0 5px" }} />
            <Typography style={{ color: "white" }}>Create</Typography>
          </>
        )}
        {isEditable && <EditIcon />}
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
                value={eventName}
                onChange={handleEventNameChange}
                label="Event-Name"
                variant="standard"
                style={{ margin: "0 2rem" }}
                required
              />
              <TextField
                value={description}
                onChange={handleDescriptionChange}
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
          <div style={{ margin: "2rem" }}>
            <label htmlFor="images">Images</label>
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={registerDataChange}
            />
          </div>
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
            {!isEditable && (
              <Button
                sx={{ padding: "1rem", margin: "0 1rem" }}
                onClick={handleSubmit}
              >
                <Typography>Submit</Typography>
              </Button>
            )}
            {isEditable && (
              <Button
                sx={{ padding: "1rem", margin: "0 1rem" }}
                onClick={handleEdit}
              >
                <Typography>Edit</Typography>
              </Button>
            )}
            <Button
              sx={{ padding: "1rem", margin: "0 1rem" }}
              onClick={resetForm}
            >
              <Typography>Clear</Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
