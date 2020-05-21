import React, { FC } from "react";
import { Folders } from "speak";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { withStyles, WithStyles, StyleRules } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import Footer from "../components/Footer";

const styles = (): StyleRules => ({
  flex: {
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  sidebar: {
    width: "30%",
    border: "0.8px solid gray",
    margin: "5px",
  },
  body: {
    width: "100%",
    margin: "5px 5px 5px 0px",
    border: "0.8px solid gray",
  },
  foot: {
    height: "10px",
    textAlign: "right",
    margin: "10px",
  },
});

type Props = WithStyles<typeof styles> & {
  folders: Folders[];
  folderAdd: () => void;
  folderDel: () => void;
  fileAdd: () => void;
  fileDel: () => void;
  musicStart: () => void;
  musicStop: () => void;
  musicEnd: () => void;
};

const Speak: FC<Props> = ({
  classes,
  folderAdd,
  folderDel,
  fileAdd,
  fileDel,
  musicStart,
  musicStop,
  musicEnd,
  folders,
}) => {
  return (
    <div>
      <Header />
      <div className={classes.flex}>
        <Paper className={classes.sidebar}>
          <SideBar folders={folders} />
        </Paper>
        <Paper className={classes.body}>
          <Body />
        </Paper>
      </div>
      <div className={classes.foot}>
        <Footer />
      </div>
    </div>
  );
};

export default withStyles(styles)(Speak);
