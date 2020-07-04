import React, { useState, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { useSelector } from "react-redux";
import App from "./containers/App";

function ThemeApp() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const lang = useSelector(state => state.lang);
  const [direction, setDirection] = useState(lang === "en" ? "ltr" : "rtl");
  useEffect(() => {
    setDirection(lang === "en" ? "ltr" : "rtl");
  }, [lang]);
  const theme = createMuiTheme({
    direction: direction,
    palette: {
      primary: {
        main: "#2C5FBF"
      },
      secondary: {
        main: "#97BAFE"
      }
    },
    typography: {
      button: {
        textTransform: "initial",
      },
    },
  });
  document.body.dir = direction;
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default ThemeApp;
