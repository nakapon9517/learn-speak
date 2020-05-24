import React, { FC } from "react";
import { Fold, File } from "speak";
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
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import MusicNote from "@material-ui/icons/MusicNote";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Spinner from "react-spinkit";
// import Speech from "react-speech";
import { speak } from "./voice";

const styles = (theme: Theme): StyleRules => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "block",
  },
});

interface OwnProps {
  folders: Fold[];
  files: File[];
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  // startSound: (folderId:number, fileId: number, ) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Body: FC<Props> = ({ classes, folders, files, clickFile }) => {
  const [text, setText] = React.useState("おはようございます。");
  const targetFoldersId = folders
    .filter((fold) => fold.opened)
    .map((fold) => fold.folderId);
  const targetFiles = files.filter(
    (file) => targetFoldersId.indexOf(file.folderId) !== -1
  );

  return (
    <div>
      <div style={{ textAlign: "left", marginLeft: "16px" }}>
        <div>
          <input onChange={(e) => setText(e.target.value)} value={text} />
          <button onClick={() => speak(text)}>speak</button>
        </div>
        <Checkbox
          edge="start"
          // checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
        />
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          style={{ margin: "10px" }}
        >
          <AddIcon />
        </Fab>
      </div>
      <List component="nav" className={classes.root}>
        {targetFiles.map((file) => (
          <div key={String(file.folderId) + "-" + String(file.fileId)}>
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
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <MusicNote
                    onClick={() => {
                      speak(file.text);
                    }}
                  />
                  <DeleteIcon />
                  <EditIcon />
                  {file.listening ? (
                    <Spinner name="line-scale" color="gray" />
                  ) : (
                    ""
                  )}
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
