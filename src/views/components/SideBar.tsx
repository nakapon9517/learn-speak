import React, { FC } from "react";
import { Fold } from "speak";
import {
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Folder from "@material-ui/icons/Folder";
import NavigateNext from "@material-ui/icons/NavigateNext";

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    display: "block",
  },
  nest: {
    paddingLeft: theme.spacing(4),
  },
});

interface OwnProps {
  folders: Fold[];
  clickFolder: (id: string, opened: boolean) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const SideBar: FC<Props> = ({ classes, folders, clickFolder }) => {
  const [openBox, setOpenBox] = React.useState(true);

  // let open = false;
  const clickBox = () => {
    setOpenBox(!openBox);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={clickBox}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {openBox ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openBox} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {folders.map((folder) => (
              <div
                key={folder.id}
                style={folder.opened ? { backgroundColor: "#c6e4ff" } : {}}
              >
                <ListItem
                  button
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    clickFolder(folder.id, folder.opened);
                  }}
                >
                  <ListItemIcon>
                    <Folder />
                  </ListItemIcon>
                  <ListItemText style={{ fontSize: "20px" }}>
                    {folder.name}
                  </ListItemText>
                  {folder.opened ? <NavigateNext /> : ""}
                </ListItem>
              </div>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default withStyles(styles)(SideBar);
