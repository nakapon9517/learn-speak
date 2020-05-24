import React, { FC } from "react";
import { Fold, File } from "speak";
import {
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import MusicNote from "@material-ui/icons/MusicNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Spinner from "react-spinkit";
import { speak } from "./voice";

const styles = (theme: Theme): StyleRules => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "block",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  list: {
    // position: "relative",
    borderBottom: "solid 3px #cce4ff",
  },
  iconButtonGroup: {
    width: "20%",
    margin: "0px auto",
    textAlign: "right",
  },
  iconButton: {
    // width: "25%",
    // height: "25%",
  },
});

interface OwnProps {
  folders: Fold[];
  files: File[];
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  clickAll: (checked: boolean) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Body: FC<Props> = ({ classes, folders, files, clickFile, clickAll }) => {
  const [allCheck, setAllCheck] = React.useState(false);
  const targetFoldersId = folders
    .filter((fold) => fold.opened)
    .map((fold) => fold.folderId);
  const targetFiles = files.filter(
    (file) => targetFoldersId.indexOf(file.folderId) !== -1
  );

  return (
    <div>
      <div style={{ textAlign: "left", marginLeft: "26px" }}>
        <Checkbox
          edge="start"
          checked={allCheck}
          tabIndex={-1}
          disableRipple
          onClick={() => {
            const check = !allCheck;
            setAllCheck(check);
            clickAll(check);
          }}
        />
        <span style={{ marginLeft: "20px" }}>Title</span>
        <span style={{ marginLeft: "130px" }}>Content</span>
        <span style={{ marginLeft: "130px" }}>
          <Button variant="contained" color="secondary" size="small">
            再生
          </Button>
        </span>
      </div>
      <List component="nav" className={classes.root}>
        {targetFiles.map((file) => (
          <div
            key={String(file.folderId) + "-" + String(file.fileId)}
            className={classes.list}
          >
            <ListItem
              key={file.fileId}
              role={undefined}
              dense
              button
              onClick={() => {
                clickFile(file.folderId, file.fileId, file.checked);
              }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={file.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": `checkbox-list-label-${file.fileId}`,
                  }}
                  color="primary"
                />
              </ListItemIcon>
              <ListItemText
                id={`checkbox-list-name-${file.fileId}`}
                primary={file.name}
              />
              <ListItemText
                id={`checkbox-list-text-${file.fileId}`}
                primary={file.text}
              />
              <ListItemSecondaryAction className={classes.iconButtonGroup}>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    speak(file.text);
                  }}
                >
                  {file.listening ? (
                    <Spinner
                      name="line-scale"
                      color="gray"
                      fadeIn="none"
                      className={classes.iconButton}
                    />
                  ) : (
                    ""
                  )}
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    speak(file.text);
                  }}
                >
                  <MusicNote />
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    speak(file.text);
                  }}
                ></IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    speak(file.text);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    speak(file.text);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default withStyles(styles)(Body);
