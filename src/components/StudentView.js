import * as React from "react";
import { Box, IconButton, Typography, Modal, Stack } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";

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

const StudentView = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <h2>Student Name</h2>
          <Stack>
            <Box>
              <Typography sx={{ margin: "2rem 0" }}>
                Scholar Id
              </Typography>
              <Typography sx={{ margin: "2rem 0" }}>Start Date</Typography>
              <Typography sx={{ margin: "2rem 0" }}>End Date</Typography>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default StudentView;
