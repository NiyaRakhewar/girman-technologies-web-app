// src/components/UserCard.js
import React from "react";
import {

  CardContent,
} from "./ui/card";
import "./../styles/UserCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
export const UserCard = ({ user, onFetchDetails }) => {
  return (
    <div className="user-card">
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "292px",
          height: "226px",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            height: "146px",
          }}
        >
          <img
            src={user.image}
            alt={`${user.first_name} ${user.last_name}`}
            className="user-image"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              height: "60px",
            }}
          >
            <div
              style={{
                color: "#09090B",
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "38.73px",
                textAlign: "left",
              }}
            >{`${user.first_name} ${user.last_name}`}</div>

            <span style={{ display: "flex", alignItems: "center", gap: "2px",color: "#425763" }}>
              <FaLocationDot /> <p style={{color: "#425763"}}>{user.city}</p>
            </span>
          </div>
        </div>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // gap: "2px",
          }}
        >
       
          <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaPhone /> <p>{user.contact_number}</p>
            </span>
            <p style={{opacity: "0.5", fontSize: "small", paddingLeft:"5px"}}> Available on phone </p>
          </span>
          <button
            style={{ backgroundColor: "black", color: "white", padding: "10px 15px", borderRadius: "0.5rem",  }}
            onClick={() => onFetchDetails(user)}
          >
            Fetch Details
          </button>
        </div>
      </CardContent>
    </div>
  );
};
