import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
    },
    sidebar: {
      width: "30%",
      height: "100%",
    },
    body: {
      width: "100%",
      height: "100%",
    },
    foot: {
      height: "10px",
      textAlign: "right",
      margin: "10px",
    },
  })
);

const Speak: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.flex}>
        <Paper elevation={3} className={classes.sidebar}>
          <SideBar />
        </Paper>
        <Paper elevation={3} className={classes.body}>
          <Body />
        </Paper>
      </div>
      <div className={classes.foot}>
        <Footer />
      </div>
    </div>
  );
};

export default Speak;
