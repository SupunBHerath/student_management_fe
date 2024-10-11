// src/components/News/NewsFeedT.js
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

const StudentDetailsTable = () => {
  const [students, setStudents] = useState([]);

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
      alert("Student deleted");
    } catch (e) {
      console.log("error deleting student");
    }
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
                  <TableCell>{student.address}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
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
    </div>
  );
};

export default StudentDetailsTable;
