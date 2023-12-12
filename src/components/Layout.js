import React from "react";
import classes from "./Layout.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
// import { MdPerson } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [navControl, setNavControl] = useState(false);

 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNav = () => {
    return navControl ? setNavControl(false) : setNavControl(true);
  };

  return (
    <>
      <div className={`flex ${classes.navbar}`}>
        <div className={navControl ? `flex alignItems-center ${classes.rightAngle2}`: `flex alignItems-center ${classes.rightAngle}`}>
          {navControl ? "D" : "Dashboard"}
        </div>
        {/* <div> */}
        <div className={navControl ?`screen-10 flex1 marg flex alignItems-center` :`screen-10 flex1 container flex alignItems-center`}>
          <div onClick={handleNav}>
            <GiHamburgerMenu className={`${classes.ham}`} />
          </div>
          {/* <div className={`${classes.navIcons}`}>
            <BsArrowsFullscreen />
          </div> */}
          <h3 className={classes.dashText}>Dashboard</h3>

          <div className={classes.rightNav}>
            <React.Fragment>
              <Box>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <span>
                      Ola <FaAngleDown />{" "}
                    </span>
                    <Avatar sx={{ width: 32, height: 32 }}>O</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to="/Profile" class="link linkColor"><MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem></Link>
                <Link to="/Signin" class="link linkColor"><MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem></Link>
              </Menu>
            </React.Fragment>

            {/* <div className={classes.out}><Link to="/Signin" class="link linkColor">
                    <Logout className={classes.logIcon} fontSize="small" />
                  <h6 className={classes.iconText}>Logout</h6> 
              </Link></div> */}
              <Link to="/Signin" class="link linkColor"><MenuItem onClick={handleClose}>
                <ListItemIcon className={classes.logIcon}>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem></Link>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div class={`flex`}>
        <div
          className={navControl ? `full-screen-10 smallWidth ${classes.theSidebar}` :  `full-screen-10 bigWidth ${classes.theSidebar} ${classes.theSidebarMedia}`  }
        >
          <div className={classes.colorDiv}>
          <Link to="/Profile" class="link"><div
            className={`sideBar-bg justifyContent-center ${classes.profile}`}
          >
            {navControl ? (
              <><IoMdContact /> <h4 className={classes.sidebarTextMedia}>Person</h4></>
            ) : (
              <>
                <IoMdContact />
                <h4 className={classes.sidebarText}>Ola</h4>
              </>
            )}
          </div></Link>
          <Link to="/Dashboard" class="link"><div className={`sideBar-bg`}>
            {
              navControl ? (<><IoMdHome /> <h4 className={classes.sidebarTextMedia}>Dashboard</h4></>) : (<><IoMdHome />
              <h4 className={classes.sidebarText}>Dashboard</h4></>)
            }
          </div></Link>

          <Link to="/Classroom" class="link"><div className={`sideBar-bg`}>
            {
              navControl ? (<><FaGraduationCap /> <h4 className={classes.sidebarTextMedia}>Classroom</h4></>) : (<><FaGraduationCap />
              <h4 className={classes.sidebarText}>Classroom</h4></>)
            }
          </div></Link>
          <Link to="/Marketplace" class="link"><div className={`sideBar-bg`}>
            {
              navControl ? (<><BsCart3 /> <h4 className={classes.sidebarTextMedia}>Market Place</h4></>) : (<><BsCart3 />
              <h4 className={classes.sidebarText}>Market Place</h4></>)
            }
          </div></Link>
          {/* <div className={`sideBar-bg`}>
            {
              navControl ? (<MdPerson />) : (<><MdPerson />
              <h4 className={classes.sidebarText}>Profile</h4></>)
            }
          </div> */}
          <Link to="/Referral" class="link"><div className={`sideBar-bg`}>
            {
              navControl ? (<><GoGift /> <h4 className={classes.sidebarTextMedia}>Refferal</h4></>) : (<><GoGift />
              <h4 className={classes.sidebarText}>Refferal</h4></>)
            }
          </div></Link>
          <Link to="/Withdrawal" class="link"><div className={`sideBar-bg`}>
            {
              navControl ? (<><PiBagSimpleFill /> <h4 className={classes.sidebarTextMedia}>Withdrawal</h4></>) : (<><PiBagSimpleFill />
              <h4 className={classes.sidebarText}>Withdrawal</h4></>)
            }
          </div></Link>
          <Link to="/Signin" class="link"><div className={`sideBar-bg`}>
            {
              navControl ? (<><Logout fontSize="small" /> <h4 className={classes.sidebarText}>Logout</h4></>) : (<><Logout fontSize="small" />
              <h4 className={classes.sidebarText}>Logout</h4></>)
            }
          </div></Link>
          </div>
        </div>
        <div className={`full-screen-10 ${classes.content}`}>{children}</div>

      </div>
    </>
  );
};

export default Layout;
