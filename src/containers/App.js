import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import "./App.scss";
import { useSelector } from "react-redux";

function App() {
  const  lang  = useSelector(state => state.locale.lang);
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div
        className={lang === "ar" ? "rtl" : "ltr"}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <Router history={history}>{Routes}</Router>
      </div>
    </IntlProvider>
  );
}

export default App;
