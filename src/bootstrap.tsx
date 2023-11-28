import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import appAInstance from "./i18n";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
//
// this is the "sole purpose" of this module
// it uses ReactDOM to render the <App> component into <div id="root"> in the HTML
//

ReactDOM.render(
  <I18nextProvider i18n={appAInstance}>
    <GlobalStyle />
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
