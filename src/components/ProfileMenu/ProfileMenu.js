import React from "react";
import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Auth from "../../utils/Auth";
import ProfilePic from "./../../assets/images/profile-pic.jpg";
import "./ProfileMenu.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function ProfileMenu({ intl: { messages } }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const lang = useSelector((state) => state.lang);
  const ListArr = [
    {
      id: 1,
      name: messages.auth.logout,
      link: "/login",
    },
  ];
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, linkId) => {
    linkId === 1 && Auth.signOut();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const renderDropDownList = (listArr) => {
    return listArr.map((item, index) => {
      return (
        <Link to={item.link} key={index}>
          <MenuItem
            dir={lang === "ar" ? "rtl" : "ltr"}
            onClick={(event) => handleClose(event, item.id)}
          >
            {item.name}
          </MenuItem>
        </Link>
      );
    });
  };

  return (
    <div className={classes.root}>
      <div style={{ zIndex: 999 }}>
        <Button
          className="text-white"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img className="profileImg" src={ProfilePic} alt="profile" />
          <h6 className="mx-3 mb-0">Ehab Elshehawi</h6>
          <KeyboardArrowDownIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {renderDropDownList(ListArr)}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default injectIntl(ProfileMenu);
