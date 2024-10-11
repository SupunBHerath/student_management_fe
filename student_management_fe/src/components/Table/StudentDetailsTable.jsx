import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getStudentData } from "../../API/StudentData/getStudentData";
import { deleteStudent } from "../../API/StudentData/deleteStudent";
import { message } from "antd";
import EditForm from "../EditeComponents/EditeForm";

const StudentDetailsTable = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null); // State to store student being edited
  const [openEditForm, setOpenEditForm] = useState(false); // State to control dialog visibility

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await getStudentData();
        setStudents(res);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setStudents(students.filter(student => student.student_id !== id));
      message.success("Student deleted successfully.");
      window.location.reload();
    } catch (e) {
      message.error("Failed to delete student.");
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student); 
    setOpenEditForm(true);
  };

  const handleEditFormClose = () => {
    setOpenEditForm(false); 
    setEditingStudent(null);
  };

  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ marginTop: 20, border: "5px solid #CEC8C8" }}
      >
        <Table>
          <TableHead style={{ backgroundColor: "#CEC8C8" }}>
            <TableRow>
              <TableCell style={{ fontWeight: "900" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "900" }}>Age</TableCell>
              <TableCell style={{ fontWeight: "900" }}>Address</TableCell>
              <TableCell style={{ fontWeight: "900" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student) => (
                <TableRow key={student.student_id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.g_address}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(student)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      style={{ color: "red" }}
                      onClick={() => handleDelete(student.student_id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No Students Found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {editingStudent && (
        <EditForm
        id={editingStudent.student_id}
          name={editingStudent.name}
          age={editingStudent.age}
          contact={editingStudent.contact}
          g_name={editingStudent.g_name}
          g_address={editingStudent.g_address}
          g_contact={editingStudent.g_contact}
          open={openEditForm}
          onClose={handleEditFormClose} 
        />
      )}
    </div>
  );
};

export default StudentDetailsTable;
