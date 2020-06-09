import React, { FC, useEffect, useState } from "react";
import { Fold } from "speak";
import {
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Folder from "@material-ui/icons/Folder";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Check from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "block",
    position: "relative",
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
  folderAdd: (name: string, category: string) => void;
  folderDel: (folderId: number) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;
type AlertType = "success" | "error" | "warning" | "info";

const SideBar: FC<Props> = ({
  classes,
  folders,
  clickFolder,
  folderAdd,
  folderDel,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [delFolderId, setDelFolderId] = useState(0);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [alertType, setErrorType] = useState<AlertType>("success");
  const [isErrorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openBox, setOpenBox] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState("");
  const [folderCategory, setFolderCategory] = React.useState("action");

  useEffect(() => {
    setOpenModal(openModal);
  }, [openModal]);

  function setInit() {
    setFolderName("");
    setFolderCategory("");
  }

  const handleFolderAdd = (name: string, category: string) => {
    if (!name || name === "") {
      setError("error", true, "フォルダ名を入力してください。");
    } else {
      folderAdd(name, category);
      setInit();
      setError("success", true, "登録しました。");
    }
  };
  function setError(alertType: AlertType, isError: boolean, message: string) {
    setErrorType(alertType);
    setErrorOpen(isError);
    setErrorMessage(message);
  }

  const handleFolderNameChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFolderCategory(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Collapse in={isErrorOpen}>
        <Alert
          severity={alertType}
          onClick={() => {
            setErrorOpen(false);
          }}
        >
          {errorMessage}
        </Alert>
      </Collapse>
      <FormControl
        style={{
          width: "100%",
          display: "inline-block",
        }}
      >
        <FormControl
          style={{
            width: "50%",
            display: "inline-block",
            marginLeft: "16px",
          }}
        >
          <InputLabel htmlFor="input-folder">フォルダ名</InputLabel>
          <Input
            id="input-folder"
            style={{ width: "100%" }}
            value={folderName}
            onChange={(event) => {
              setFolderName(event.target.value);
            }}
          />
        </FormControl>
        <FormControl
          style={{
            width: "16%",
            display: "inline-block",
            marginLeft: "12px",
            marginTop: "18px",
          }}
        >
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            style={{
              width: "100%",
              height: "30px",
            }}
            value={folderCategory}
            onChange={handleFolderNameChange}
          >
            <MenuItem value="action">
              <Folder color="action" />
            </MenuItem>
            <MenuItem value="disabled">
              <Folder color="disabled" />
            </MenuItem>
            <MenuItem value="primary">
              <Folder color="primary" />
            </MenuItem>
            <MenuItem value="secondary">
              <Folder color="secondary" />
            </MenuItem>
            <MenuItem value="error">
              <Folder color="error" />
            </MenuItem>
          </Select>
        </FormControl>
        <span
          style={{
            float: "right",
            marginRight: "12px",
            marginTop: "12px",
            marginBottom: "8px",
          }}
        >
          <Fab
            color="default"
            aria-label="add"
            size="small"
            onClick={() => {
              handleFolderAdd(folderName, folderCategory);
            }}
          >
            <AddIcon />
          </Fab>
        </span>
      </FormControl>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem
          style={{ width: "80%" }}
          button
          onClick={() => {
            setOpenBox(!openBox);
          }}
        >
          <span style={{ marginRight: "12px" }}>
            <InboxIcon />
          </span>
          <ListItemText primary="Sound Box" />
          {openBox ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openBox} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{ marginLeft: "20px" }}>
            {folders.map((folder) => (
              <React.Fragment key={folder.folderId + folder.name}>
                <ListItem
                  style={{ width: "90%" }}
                  button
                  onClick={() => {
                    clickFolder(folder.folderId, folder.opened);
                  }}
                >
                  <span style={{ marginRight: "12px" }}>
                    {getFolderIcon(folder.category)}
                  </span>
                  <ListItemText
                    style={{ overflow: "hidden" }}
                    primary={folder.name}
                  ></ListItemText>
                  {folder.opened ? <Check /> : ""}
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={() => {
                      setDialogOpen(true);
                      setConfirmMessage(
                        "「" +
                          folder.name +
                          "」を削除してもよろしいでしょうか？"
                      );
                      setDelFolderId(folder.folderId);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </React.Fragment>
            ))}
            <Dialog
              open={isDialogOpen}
              onClose={() => setDialogOpen(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {confirmMessage}
              </DialogTitle>
              <DialogTitle id="alert-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    folderDel(delFolderId);
                    setDialogOpen(false);
                  }}
                  color="primary"
                >
                  はい
                </Button>
                <Button
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                  color="primary"
                >
                  いいえ
                </Button>
              </DialogActions>
            </Dialog>
          </List>
        </Collapse>
      </List>
    </React.Fragment>
  );
};

const getFolderIcon = (type: string) => {
  switch (type) {
    case "action":
      return <Folder color="action" />;
    case "disabled":
      return <Folder color="disabled" />;
    case "primary":
      return <Folder color="primary" />;
    case "secondary":
      return <Folder color="secondary" />;
    case "error":
      return <Folder color="error" />;
    default:
      return <Folder />;
  }
};

export default withStyles(styles)(SideBar);
