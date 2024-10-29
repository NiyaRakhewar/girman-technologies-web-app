// src/components/UserDetailsDialog.js
import React from "react";
import "./../styles/dialog.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";

export const UserDetailsDialog = ({ selectedUser, handleCloseDialog }) => (
  <div className="dialog-overlay">
    <div className="dialog-content">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1 style={{ color: "black", fontWeight: "bolder", fontSize: "24px" }}>
          Fetch Details
        </h1>
        <p style={{ color: "#425763", margin: "0px" }}>
          Here are the details of following employee
        </p>
      </div>{" "}
      <div style={{ margin: "0px 0px", textAlign: "left", fontWeight: "500" }}>
        <p style={{ margin: "0px 0px", padding: "0px" }}>
          Name: {selectedUser.first_name} {selectedUser.last_name}
        </p>
        <p style={{ margin: "0px 0px", padding: "0px" }}>
          Location: {selectedUser.city}
        </p>
        <p style={{ margin: "0px 0px", padding: "0px" }}>
          Contact Number: {selectedUser.contact_number}
        </p>
      </div>
      <div>
        <p style={{ textAlign: "left" }}>Profile Image: </p>
        <img src={selectedUser?.image} alt="profile" />
      </div>
      <button onClick={handleCloseDialog}>Close</button>
    </div>
  </div>
);
