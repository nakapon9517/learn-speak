import React, { FC } from "react";
import { Fold, File } from "speak";
import {
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import Footer from "../components/Footer";
// import { theme } from "./theme";

const styles = (): StyleRules => ({
  flex: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
  },
  sidebar: {
    width: "40%",
    height: "100%",
    minHeight: "calc(100vh - 150px)",
    border: "0.8px solid gray",
    margin: "5px",
  },
  body: {
    width: "100%",
    height: "100%",
    minHeight: "calc(100vh - 150px)",
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
  folders: Fold[];
  files: File[];
  changeSearch: (text: string) => void;
  clickFolder: (id: string, opened: boolean) => void;
  clickPlay: (folderId: number, fileId: number, playBefore: boolean) => void;
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  clickAll: (checked: boolean) => void;
  folderAdd: (name: string, category: string) => void;
};

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const Speak: FC<Props> = ({
  classes,
  folders,
  files,
  changeSearch,
  clickFolder,
  clickPlay,
  clickFile,
  clickAll,
  folderAdd,
}) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Header changeSearch={changeSearch} />
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
        </MuiThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withStyles(styles)(Speak);
