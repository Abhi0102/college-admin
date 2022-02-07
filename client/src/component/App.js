import { ThemeProvider } from "@emotion/react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { authenticateUser } from "../actions/auth";
import theme from "../Theme";


function App(props) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      props.dispatch(authenticateUser(user));
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default connect()(App);
