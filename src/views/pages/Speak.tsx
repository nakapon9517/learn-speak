import React, { FC } from "react";
import { Fold, File } from "speak";
import {
  withStyles,
  WithStyles,
  StyleRules,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
// import Footer from "../components/Footer";

const styles = (): StyleRules => ({
  flex: {
    display: "flex",
  },
  sidebar: {
    width: "40%",
    height: "100%",
    minHeight: "calc(100vh - 70px)",
    border: "0.8px solid gray",
    margin: "5px",
  },
  body: {
    width: "100%",
    height: "100%",
    minHeight: "calc(100vh - 70px)",
    margin: "4px 4px 4px 0px",
    border: "0.8px solid gray",
  },
  foot: {
    height: "10px",
    textAlign: "right",
    margin: "10px",
  },
});

type Props = WithStyles<typeof styles> & {
  folders: Fold[];
  files: File[];
  type: string;
  changeType: (type: string) => void;
  changeSearch: (text: string) => void;
  clickFolder: (id: string, opened: boolean) => void;
  clickPlay: (folderId: number, fileId: number, playBefore: boolean) => void;
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  clickAll: (checked: boolean) => void;
  folderAdd: (name: string, category: string) => void;
};

const Speak: FC<Props> = ({
  classes,
  folders,
  files,
  type,
  changeType,
  changeSearch,
  clickFolder,
  clickPlay,
  clickFile,
  clickAll,
  folderAdd,
}) => {
  const theme = createMuiTheme({
    palette: {
      type: type === "dark" ? "dark" : "light",
      background: {
        default: "#000fff",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
      fontSize: 11,
    },
    mixins: {
      toolbar: {
        minHeight: 56,
      },
    },
    props: {
      MuiList: {
        dense: true,
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <div
            style={
              type === "dark"
                ? { backgroundColor: "#424242" }
                : { backgroundColor: "#fff" }
            }
          >
            <Header changeSearch={changeSearch} changeType={changeType} />
            <div className={classes.flex}>
              <Paper className={classes.sidebar}>
                <SideBar
                  folders={folders}
                  clickFolder={clickFolder}
                  folderAdd={folderAdd}
                />
              </Paper>
              <Paper className={classes.body}>
                <Body
                  folders={folders}
                  files={files}
                  clickPlay={clickPlay}
                  clickFile={clickFile}
                  clickAll={clickAll}
                />
              </Paper>
            </div>
            {/* <div className={classes.foot}>
            <Footer />
          </div> */}
          </div>
        </MuiThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withStyles(styles)(Speak);
