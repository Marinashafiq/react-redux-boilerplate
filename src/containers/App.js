import React from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import history from "../routes/History";
import Routes from "../routes/Routes";
import messages from "../assets/Local/messages";
import Loader from "../components/Loader/Loader";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import "./App.scss";

class App extends React.Component {
  render() {
    const { lang, loading } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {loading ? <Loader /> : null}
          <MaterialSnackbar />
          <Router history={history}>{Routes}</Router>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang, loading }) => ({
  lang,
  loading,
});

export default connect(mapStateToProps, null)(App);
