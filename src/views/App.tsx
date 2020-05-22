import React, { FC } from "react";
import "./App.css";
import { Fold } from "speak";
import Speak from "./containers/Speak";
import { withStyles, WithStyles, StyleRules } from "@material-ui/core/styles";

const styles = (): StyleRules => ({});

type Props = WithStyles<typeof styles> & {
  folders: Fold[];
};

const App: FC = ({}) => {
  return (
    <React.Fragment>
      <Speak />
    </React.Fragment>
  );
};

export default withStyles(styles)(App);
