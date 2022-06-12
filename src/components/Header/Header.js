import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../../Images/logo.png";
import LoginDialog from  "../login/LoginDialog";
import { Box } from "@mui/material";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  

  useEffect(() => {
    const onScroll = (e) => {
      let scrolled = window.scrollY;
      setScrolled(scrolled > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <AppBar elevation={0} color={scrolled ? "secondary" : "transparent"}>
      {/* <Toolbar
        // sx={{
        // //   maxWidth: "auto",
        // //   width: "100%",
        // //   padding: "0px",
        // }}
      > */}
        {/* <Grid container> */}
          {/* <Grid item> */}
          <div>
            <img
              alt="logo"
              src={scrolled ? Logo : Logo}
              style={{
                maxHeight: "120px",
                padding: "20px 0px",
                boxSizing: "border-box",
                width: "200px",
                marginLeft: "1rem"
              }}
            ></img>
          {/* </Grid> */}
          {/* <Grid item> */}
          {/* <Box display= "flex" alignItems= "flex-end" justifyContent= "flex-end"> */}
            <Button
            className="loginBtn"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#F54D2F",
                color: "#ffffff",
                float: "right",
                margin:"1rem"
              }}
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              Login
            </Button>
            {/* </Box> */}
            </div>
          {/* </Grid> */}
        {/* </Grid> */}
      {/* </Toolbar> */}

      <LoginDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </AppBar>
  );
}

export default Header;
