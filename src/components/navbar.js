import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton edge="start" className="menuButton" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography className="title" variant="h5" noWrap>
            NY Times Post Popular
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
