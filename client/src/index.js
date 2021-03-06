import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import App from "./containers/app";
import { MuiThemeProvider } from "material-ui";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <div>
          <App />
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
);
