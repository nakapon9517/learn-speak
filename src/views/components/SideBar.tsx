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

const styles = (theme: Theme): StyleRules => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "block",
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
}

type Props = WithStyles<typeof styles> & OwnProps;

const SideBar: FC<Props> = ({ classes, folders, clickFolder, folderAdd }) => {
  const [openBox, setOpenBox] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState("");
  const [folderCategory, setFolderCategory] = React.useState("action");

  useEffect(() => {
    setOpenModal(openModal);
  }, [openModal]);

  const handleFolderAdd = (name: string, category: string) => {
    if (!name || name === "") {
      alert("フォルダ名を入力してください。");
    } else {
      folderAdd(name, category);
      setFolderName("");
      setFolderCategory("");
      alert("登録しました。");
    }
  };

  const handleFolderNameChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFolderCategory(event.target.value as string);
  };

  return (
    <React.Fragment>
      <FormControl
        style={{
          width: "100%",
          marginLeft: "16px",
          display: "inline-block",
        }}
      >
        <FormControl
          style={{
            width: "60%",
            display: "inline-block",
          }}
        >
          <InputLabel htmlFor="input-with-icon-adornment">
            Add Sound Box
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
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
            marginRight: "28px",
            marginTop: "12px",
            marginBottom: "4px",
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
            {folders.map((folder, index) => (
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
                </ListItem>
              </React.Fragment>
            ))}
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
