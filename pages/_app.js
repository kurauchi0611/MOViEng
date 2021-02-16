import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../src/reset.css";
import { auth } from "../utils/firebase/firebase";
import styled from "styled-components";
import FooterOrganisms from "../components/organisms/FooterOrganisms";

const AppContainer = styled.div`
  padding-bottom: 120px;
`;

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [isLogin, setIsLogin] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setIsLogin(true);
      } else {
        // No user is signed in.
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <AppContainer>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <FooterOrganisms isLogin={isLogin} />
        </ThemeProvider>
      </AppContainer>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
