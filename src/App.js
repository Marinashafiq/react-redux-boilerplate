import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Router } from "react-router-dom";
import history from "./routes/History";
import Routes from "./routes/Routes";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import messages from "./assets/Local/messages";
import "./App.css";

function App() {
  const lang = useState(state => state.locale.lang);
  const loader = useState(state => state.loader);
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
