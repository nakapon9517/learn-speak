import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  // fade,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Folder from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      display: "block",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const SideBar: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="MusicList1" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="MusicList2" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="MusicList3" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="MusicList4" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="MusicList5" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default SideBar;
