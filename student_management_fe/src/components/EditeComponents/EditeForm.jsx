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
import { message } from "antd";
import { updateStudent } from "../../API/StudentData/updateStudentData";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditForm({open , onClose, id,name,age ,contact,image_url,g_name,g_address,g_contact}) {
  const [editStudent, seteditStudent] = React.useState({
    id:id,
    name: name,
    age: age,
    contact: contact,
    image_url: 'image',
    g_name: g_name,
    g_address: g_address,
    g_contact: g_contact,
  });




  const handleInputChange = (field, value) => {
    seteditStudent((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event) => {
    seteditStudent((prev) => ({ ...prev, imageurl: event.target.files[0] }));
  };

  const handleUpdate = async () => {
    try {
      await updateStudent(editStudent.id, editStudent);
      window.location.reload();

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <React.Fragment>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
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
                  value={editStudent.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  value={editStudent.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  value={editStudent.contact}
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
                  value={editStudent.g_name}
                  onChange={(e) => handleInputChange("g_name", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adddress"
                  variant="outlined"
                  fullWidth
                  value={editStudent.g_address}
                  onChange={(e) => handleInputChange("g_address", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  value={editStudent.g_contact}
                  onChange={(e) => handleInputChange("g_contact", e.target.value)}
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
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={onClose}>Clear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
