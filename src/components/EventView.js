import * as React from "react";
import { Box, IconButton, Typography, Modal, Stack } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import dayjs from "dayjs";

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fields = [
    {
      label: "First Name",
      isRequired: props.firstName.isRequired,
      isVisible: props.firstName.isVisible,
    },
    {
      label: "Last Name",
      isRequired: props.lastName.isRequired,
      isVisible: props.lastName.isVisible,
    },
    {
      label: "Email",
      isRequired: props.email.isRequired,
      isVisible: props.email.isVisible,
    },
    {
      label: "Scholar Id",
      isRequired: props.scholarId.isRequired,
      isVisible: props.scholarId.isVisible,
    },
    {
      label: "Address",
      isRequired: props.address.isRequired,
      isVisible: props.address.isVisible,
    },
    {
      label: "Payment",
      isRequired: props.payment.isRequired,
      isVisible: props.payment.isVisible,
    },
  ];

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <PreviewIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          <h2>{props.eventName}</h2>
          <Stack>
            <Box>
              <Typography sx={{ margin: "2rem 0" }}>
                {props.description}
              </Typography>
              <Typography sx={{ margin: "2rem 0" }}>
                {dayjs(props.startDate).format("LLLL")}
              </Typography>
              <Typography sx={{ margin: "2rem 0" }}>
                {dayjs(props.endDate).format("LLLL")}
              </Typography>
              <div>
                {props.images.map((image) => {
                  return (
                    <img
                      src={image.url}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                      alt={image.url}
                    />
                  );
                })}
              </div>
            </Box>
          </Stack>
          <h3 style={{ margin: "1rem 0" }}>Fields* for the Event</h3>
          <Stack>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {fields.map((field) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ width: "10rem" }}>
                      <Typography sx={{ margin: "1rem 0" }}>
                        {field.label}
                      </Typography>
                      <Typography sx={{ margin: "1rem 0", color:`${field.isVisible?'green':'red'}` }}>
                        isVisible: {field.isVisible ? "True" : "False"}
                      </Typography>
                      <Typography sx={{ margin: "1rem 0", color:`${field.isVisible?'green':'red'}` }}>
                        isRequired: {field.isRequired ? "True" : "False"}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
