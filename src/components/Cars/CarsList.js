import React from "react";
import { Container, Typography, Card, Grid } from "@mui/material";
import Car1 from "../../Images/car1.png";
import Fuel from "../../Images/fuel-icon.png";
import Speed from "../../Images/speed-icon.png";
import Gear from "../../Images/gear-icon.png";
import Engine from "../../Images/engine-icon.png";
import "./Cars.css";

const CarsList = () => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Typography>
        <img
          alt="car1"
          src={Car1}
          style={{ width: "600px", float: "right" }}
        ></img>
        <h1 style={{ fontWeight: "900" }}>Delta X5</h1>
        <p className="blackText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <hr />
        <img alt="speed" src={Speed}></img>
        <span className="blackText" style={{ marginLeft: "1rem" }}>210 km/hr</span>
        <img alt="distance" src={Engine} style={{ marginLeft: "3rem" }}></img>
        <span className="blackText" style={{ marginLeft: "1rem" }}>165 KM</span>
        <br />
        <img alt="gear" src={Gear}></img>
        <span  className="blackText" style={{ marginLeft: "1rem" }}>Manual</span>
        <img alt="fuel" src={Fuel} style={{ marginLeft: "4rem" }}></img>
        <span className="blackText" style={{ marginLeft: "1rem" }}>ON</span>
        <div style={{display:"grid", marginTop:"10px"}}>
        <label className="blackText" style={{fontSize:"1.2rem"}}>₹ 5000</label>
        <label className="blackText" style={{fontSize:"12px"}}>per day</label>
        </div>
       
      </Typography>
    </Container>
  );
};

export default CarsList;
