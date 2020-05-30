import React, { FC, useEffect } from "react";
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
// import NavigateNext from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grow from "@material-ui/core/Grow";
import { AddFolderDialog } from "./Dialog";

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    display: "block",
  },
  listText: {
    fontSize: "0.2em",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    display: "inline-block",
  },
});

interface OwnProps {
  folders: Fold[];
  clickFolder: (id: string, opened: boolean) => void;
  folderAdd: (id: number, name: string) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const SideBar: FC<Props> = ({ classes, folders, clickFolder, folderAdd }) => {
  const [openBox, setOpenBox] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    setOpenModal(openModal);
  }, [openModal]);

  const handleFolderDialog = () => {
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem
          button
          onClick={() => {
            setOpenBox(!openBox);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {openBox ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openBox} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {folders.map((folder, index) => (
              <React.Fragment key={folder.folderId + folder.name}>
                <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(true ? { timeout: index * 50 + 300 } : {})}
                >
                  <ListItem
                    button
                    style={
                      folder.opened
                        ? { backgroundColor: "#c6e4ff", marginLeft: "20px" }
                        : { marginLeft: "20px" }
                    }
                    onClick={() => {
                      clickFolder(folder.folderId, folder.opened);
                    }}
                  >
                    <ListItemIcon>
                      <Folder />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.listText}
                      primary={folder.name}
                    ></ListItemText>
                    {/* {folder.opened ? <NavigateNext /> : ""} */}
                  </ListItem>
                </Grow>
              </React.Fragment>
            ))}
          </List>
        </Collapse>
        <div style={{ textAlign: "right" }}>
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            style={{ margin: "10px" }}
            onClick={handleFolderDialog}
          >
            <AddIcon />
          </Fab>
        </div>
      </List>
      <AddFolderDialog
        classes={classes}
        isOpen={openModal}
        folders={folders}
        folderAdd={folderAdd}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(SideBar);
