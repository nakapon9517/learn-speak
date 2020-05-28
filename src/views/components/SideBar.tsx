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
// import NavigateNext from "@material-ui/icons/NavigateNext";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import CheckCircleOutline from "@material-ui/icons/DoneOutlineOutlined";

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
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
  const [folderName, setFolderName] = React.useState("");
  const clickBox = () => {
    setOpenBox(!openBox);
  };

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleAddFold = (name: string) => {
    if (!name || name === "") {
      alert("name is required");
    } else {
      folderAdd(folders.length, name);
    }
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
                key={folder.folderId}
                style={folder.opened ? { backgroundColor: "#c6e4ff" } : {}}
              >
                <ListItem
                  button
                  style={{ marginLeft: "20px" }}
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
              </div>
            ))}
          </List>
        </Collapse>
        <div style={{ textAlign: "right" }}>
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            style={{ margin: "10px" }}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
        </div>
      </List>
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Add Music Box"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormControl style={{ marginRight: "20px" }}>
              <TextField
                id="standard-basic"
                label="name"
                style={{ marginBottom: "36px" }}
                required={true}
                onChange={(event) => {
                  setFolderName(event.target.value);
                }}
              />
            </FormControl>
            <FormControl style={{ width: "150px" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
              >
                <MenuItem value={10}>Category1</MenuItem>
                <MenuItem value={20}>Category2</MenuItem>
                <MenuItem value={30}>Category3</MenuItem>
              </Select>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Fab
            color="secondary"
            aria-label="add"
            size="medium"
            onClick={() => {
              handleAddFold(folderName);
            }}
          >
            <CheckCircleOutline />
          </Fab>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(SideBar);
