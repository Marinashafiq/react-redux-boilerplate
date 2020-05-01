import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import messages from "./../../assets/Local/messages";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/actions/Lang";
import { Link } from "react-router-dom";

export default function Navbar() {
  const lang = useSelector(state => state.locale.lang);
  const dispatch = useDispatch();
  const message = messages[lang];
  const switchLanguage = lang => {
    dispatch(setCurrentLang(lang === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">{message.hello}</a>
        <div className="d-flex align-items-center">
          <Link to="/" className="text-white mx-3">
            Private Route
          </Link>
          <Button variant="contained" onClick={() => switchLanguage(lang)}>
            {message.langBtn}
          </Button>
        </div>
      </nav>
    </>
  );
}
