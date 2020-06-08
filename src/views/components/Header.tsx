import React, { FC } from "react";
import { Fold } from "speak";
import SideBar from "./SideBar";
import {
  fade,
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme: Theme): StyleRules => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
});

interface OwnProps {
  type: string;
  loginAction: (id: string, pw: string) => void;
  changeSearch: (text: string) => void;
  changeType: (type: string) => void;
  folders: Fold[];
  clickFolder: (id: string, opened: boolean) => void;
  folderAdd: (name: string, category: string) => void;
  folderDel: (folderId: number) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Header: FC<Props> = ({
  classes,
  type,
  loginAction,
  changeSearch,
  changeType,
  folders,
  clickFolder,
  folderAdd,
  folderDel,
}) => {
  const [isLinkOpen, setLinkOpen] = React.useState(false);
  const [linkMessage, setLinkMessage] = React.useState("");
  const [link, setLink] = React.useState("");
  const [isLoginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [isDrawerOpen, setDrawerOpen] = React.useState(true);
  const [isType, setType] = React.useState(type === "dark");

  const useHandleLogout = () => {
    setLoginDialogOpen(true);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    setDrawerOpen(true);
  };
  const handleType = () => {
    setType(!isType);
    changeType(isType ? "light" : "dark");
  };

  const handleLink = (message: string, link: string) => {
    setLinkOpen(true);
    setLinkMessage(message);
    setLink(link);
  };

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    } else {
      setDrawerOpen(false);
    }
  };

  const drawer = (
    <div style={{ minWidth: "380px" }} role="presentation">
      <SideBar
        folders={folders}
        clickFolder={clickFolder}
        folderAdd={folderAdd}
        folderDel={folderDel}
      />
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawer}
        </Drawer>
        <Typography className={classes.title} variant="h6" noWrap>
          Learn Speak
        </Typography>
        <Switch
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
          checked={isType}
          onChange={handleType}
        />
        <Fab
          color="primary"
          aria-label="Open Twitter"
          size="small"
          style={{ marginRight: "4px" }}
          onClick={() => {
            handleLink(
              "開発者のTwitterを開きます。",
              "https://twitter.com/nakapooooon"
            );
          }}
        >
          <TwitterIcon color="action" style={{ color: "#CCCCCC" }} />
        </Fab>
        <Fab
          color="primary"
          aria-label="Open Instagram"
          size="small"
          style={{ marginRight: "4px" }}
          onClick={() => {
            handleLink(
              "開発者のInstagramを開きます。",
              "https://www.instagram.com/nakapooooon/?hl=ja"
            );
          }}
        >
          <InstagramIcon color="action" style={{ color: "#CCCCCC" }} />
        </Fab>
        <Fab
          color="primary"
          aria-label="Open GitHub"
          size="small"
          onClick={() => {
            handleLink(
              "開発者のGitHubを開きます。",
              "https://github.com/nakapon9517/learn-speak"
            );
          }}
        >
          <GitHubIcon color="action" style={{ color: "#CCCCCC" }} />
        </Fab>
        <Dialog
          open={isLinkOpen}
          onClose={() => setLinkOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {linkMessage + "よろしいでしょうか？"}
          </DialogTitle>
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                document.location.href = link;
              }}
              color="primary"
            >
              はい
            </Button>
          </DialogActions>
        </Dialog>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => {
              changeSearch(event.target.value);
              // console.log();
            }}
          />
        </div>
        <MenuItem onClick={useHandleLogout} style={{ marginLeft: "8px" }}>
          <ExitToApp />
        </MenuItem>
        <Dialog
          open={isLoginDialogOpen}
          onClose={() => setLoginDialogOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            ログアウトしてもよろしいでしょうか？
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => loginAction("", "")} color="primary">
              はい
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
