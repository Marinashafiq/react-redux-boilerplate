import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import { useSelector } from "react-redux";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import Loader from "../components/Loader/Loader";
import "./App.scss";

function App() {
  // App contains routes and also wrapped with snackbar and intl for localization
  const lang = useSelector(state => state.lang);
  const isloading = useSelector(state => state.loading);
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div
        className={lang === "ar" ? "rtl" : "ltr"}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {isloading ? <Loader /> : null}
        <Router history={history}>
          <MaterialSnackbar />
          <Navbar />
          {Routes}
        </Router>
      </div>
    </IntlProvider>
  );
}

export default App;
