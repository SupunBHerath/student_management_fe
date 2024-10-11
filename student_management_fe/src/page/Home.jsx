import React from "react";
import Button from "@mui/material/Button";
import RegisterForm from "../components/RegisterComponents/RegisterForm";
import StudentDetailsTable from "../components/Table/StudentDetailsTable";

export default function Home() {
  return (
    <div className="container  p-5 mt-5">
      <div className="text-center">
        <h1>Student Management System </h1>
      </div>
      <div className="">
      <RegisterForm />

      </div>
      <div className="table">
        <StudentDetailsTable />
      </div>
    </div>
  );
}
