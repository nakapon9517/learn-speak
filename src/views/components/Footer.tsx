import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  // fade,
} from "@material-ui/core/styles";

import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import MailOutline from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Twitter
        color="action"
        onClick={() => {
          alert("a");
        }}
      />
      <Instagram
        color="action"
        onClick={() => {
          alert("b");
        }}
      />
      <GitHub
        color="action"
        onClick={() => {
          alert("c");
        }}
      />
      <MailOutline
        color="action"
        onClick={() => {
          alert("d");
        }}
      />
    </div>
  );
};

export default Footer;
