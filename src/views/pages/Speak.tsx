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
import Login from "../components/Login";
import Header from "../components/Header";
// import SideBar from "../components/SideBar";
import Body from "../components/Body";
// import Footer from "../components/Footer";

const styles = (): StyleRules => ({
  flex: {
    display: "flex",
  },
  login: {
    width: "100vw",
    height: "100vh",
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
  loginAuth: boolean;
  loginAction: (id: string, pw: string) => void;
  changeType: (type: string) => void;
  changeSearch: (text: string) => void;
  clickFolder: (id: string, opened: boolean) => void;
  clickPlay: (folderId: number, fileId: number, playBefore: boolean) => void;
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  clickAll: (checked: boolean) => void;
  folderAdd: (name: string, category: string) => void;
  folderDel: (folderId: number) => void;
  fileAdd: (folderId: number, name: string, text: string) => void;
  fileDel: (folderId: number, fileId: number) => void;
};

const Speak: FC<Props> = ({
  classes,
  folders,
  files,
  type,
  loginAuth,
  loginAction,
  changeType,
  changeSearch,
  clickFolder,
  clickPlay,
  clickFile,
  clickAll,
  folderAdd,
  folderDel,
  fileAdd,
  fileDel,
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
      fontFamily: [
        "Montserrat",
        "游ゴシック",
        "YuGothic",
        "ヒラギノ角ゴ ProN W3",
        "Hiragino Kaku Gothic ProN",
        "メイリオ",
        "Meiryo",
        "sans - serif",
      ].join(","),
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
            {loginAuth ? (
              <React.Fragment>
                <Header
                  type={type}
                  loginAction={loginAction}
                  changeSearch={changeSearch}
                  changeType={changeType}
                  folders={folders}
                  clickFolder={clickFolder}
                  folderAdd={folderAdd}
                  folderDel={folderDel}
                />
                <div className={classes.flex}>
                  <Paper className={classes.body}>
                    <Body
                      folders={folders}
                      files={files}
                      clickPlay={clickPlay}
                      clickFile={clickFile}
                      clickAll={clickAll}
                      fileAdd={fileAdd}
                      fileDel={fileDel}
                    />
                  </Paper>
                </div>
              </React.Fragment>
            ) : (
              <Paper className={classes.login}>
                <Login loginAction={loginAction} loginAuth={loginAuth} />
              </Paper>
            )}
          </div>
        </MuiThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withStyles(styles)(Speak);
