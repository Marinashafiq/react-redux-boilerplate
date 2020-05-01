import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
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
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">{message.hello}</a>
        <div >
          <div className="navbar-nav d-flex">
            <a className="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
        <Button variant="contained" onClick={() => switchLanguage(lang)}>
          {message.langBtn}
        </Button>
      </nav>
    </>
  );
}
