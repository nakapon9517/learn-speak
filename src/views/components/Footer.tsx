import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  // fade,
} from "@material-ui/core/styles";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      <CircularProgress style={{ fontSize: "30px" }} />
      <TwitterIcon
        color="action"
        onClick={() => {
          alert("a");
        }}
      />
      <InstagramIcon
        color="action"
        onClick={() => {
          alert("b");
        }}
      />
      <GitHubIcon
        color="action"
        onClick={() => {
          alert("c");
        }}
      />
    </div>
  );
};

export default Footer;
