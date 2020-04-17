import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import messages from "./../../assets/Local/messages";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/actions/Lang";

export default function Navbar() {
  const lang = useSelector(state => state.locale.lang);
  const dispatch = useDispatch();
  const message = messages[lang];
  const switchLanguage = lang => {
    dispatch(setCurrentLang(lang === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6">
            {message.hello}
          </Typography>
          <Button color="inherit" onClick={() => switchLanguage(lang)}>
            {lang === "ar" ? "English" : "عربى"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
