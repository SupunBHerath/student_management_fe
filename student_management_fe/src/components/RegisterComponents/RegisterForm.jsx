import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { createStudent } from "../../API/StudentData/addStudentData";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegisterForm() {
  const [open, setOpen] = React.useState(false);
  const [newStudent, setNewStudent] = React.useState({
    name: "",
    age: "",
    contact: "",
    image_url: "imge",
  });
  const [newGuardian, setNewGuardian] = React.useState({
    name: "",
    address: "",
    contact: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (field, value) => {
    setNewStudent((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event) => {
    setNewStudent((prev) => ({ ...prev, imageurl: event.target.files[0] }));
  };

  const handleRegister = async () => {
    console.log(newStudent);
    try {
      await createStudent(newStudent);
    } catch (e) {
      console.error(e);
      alert("Failed to register student. Please try again later.");
    }
    console.log("Form data will not be submitted");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Student Register
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText>
            <DialogTitle>Student Information </DialogTitle>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={newStudent.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  value={newStudent.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  value={newStudent.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                />
              </Grid>
              <DialogTitle>Guardian Information</DialogTitle>
              <hr />
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={newStudent.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adddress"
                  variant="outlined"
                  fullWidth
                  value={newStudent.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  value={newStudent.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload Image
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </Grid> */}
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegister}>Register</Button>
          <Button onClick={handleClose}>Clear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
