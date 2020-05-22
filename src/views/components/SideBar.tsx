import React, { FC } from "react";
import { Fold } from "speak";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { withStyles, WithStyles, StyleRules } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
import Folder from "@material-ui/icons/Folder";

const styles = (): StyleRules => ({
  root: {
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    display: "block",
  },
});

type FolderProps = {
  folder: Fold;
};

const FolderItem: FC<FolderProps> = ({
  folder: { id, name, text, opened, file },
}) => (
  <ListItem button key={id}>
    <ListItemIcon>
      <Folder />
      {id}
    </ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

type Props = WithStyles<typeof styles> & {
  folders: Fold[];
};

const SideBar: FC<Props> = ({ classes, folders }) => (
  <div>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
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
      <ListItem button>
        {/* <ListItem button onClick={handleClick}> */}
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {"a" + folders + "a"}
          {folders.map((folder) => (
            <FolderItem key={folder.id} folder={folder} />
          ))}
        </List>
      </Collapse>
    </List>
  </div>
);

// export default SideBar;

export default withStyles(styles)(SideBar);
