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
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { url } from "inspector";

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
      {/* <CircularProgress style={{ fontSize: "30px" }} /> */}
      <TwitterIcon
        color="action"
        onClick={() => {
          if (window.confirm("Twitterを開きます。\nよろしいでしょうか？")) {
            document.location.href = "https://twitter.com/nakapooooon";
          }
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
          if (
            window.confirm("GitHubのページへ遷移します。\nよろしいでしょうか？")
          ) {
            document.location.href = "https://github.com/nakapon9517";
          }
        }}
      />
    </div>
  );
};

export default Footer;
