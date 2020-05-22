import React, { FC } from "react";
import "./App.css";
// import { Fold } from "speak";
import SpeakContainer from "./containers/SpeakContainer";
import { withStyles, StyleRules } from "@material-ui/core/styles";

const styles = (): StyleRules => ({});

const App: FC = () => {
  return (
    <React.Fragment>
      <SpeakContainer />
    </React.Fragment>
  );
};

export default withStyles(styles)(App);
