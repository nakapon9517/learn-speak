import React, { FC } from "react";
import {
  // makeStyles,
  // createStyles,
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
    width: "100%",
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
  changeSearch: (text: string) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Header: FC<Props> = ({ classes, changeSearch }) => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Learn-Speak
          </Typography>
          <Fab
            color="primary"
            aria-label="Open Twitter"
            size="small"
            onClick={() => {}}
          >
            <TwitterIcon
              color="action"
              onClick={() => {
                if (
                  window.confirm("Twitterを開きます。\nよろしいでしょうか？")
                ) {
                  document.location.href = "https://twitter.com/nakapooooon";
                }
              }}
            />
          </Fab>
          <Fab
            color="primary"
            aria-label="Open Instagram"
            size="small"
            onClick={() => {}}
          >
            <InstagramIcon
              color="action"
              onClick={() => {
                if (
                  window.confirm("Instagramを開きます。\nよろしいでしょうか？")
                ) {
                  alert("b");
                  // document.location.href = "https://twitter.com/nakapooooon";
                }
              }}
            />
          </Fab>
          <Fab
            color="primary"
            aria-label="Open GitHub"
            size="small"
            onClick={() => {}}
          >
            <GitHubIcon
              color="action"
              onClick={() => {
                if (
                  window.confirm(
                    "GitHubのページへ遷移します。\nよろしいでしょうか？"
                  )
                ) {
                  document.location.href = "https://github.com/nakapon9517";
                }
              }}
            />
          </Fab>
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
