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
      // height: "100vh",
      // minHeight: "100vh",
      border: "1px solid gray",
      borderRadius: "10px",
      margin: "5px",
    },
    body: {
      width: "100%",
      margin: "5px 5px 5px 0px",
      // height: "100%",
      // minHeight: "100vh",
      border: "1px solid gray",
      borderRadius: "10px",
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
        <Paper className={classes.sidebar}>
          <SideBar />
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

export default Speak;
