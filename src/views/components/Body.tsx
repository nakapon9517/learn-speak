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
import Checkbox from "@material-ui/core/Checkbox";
import MusicNote from "@material-ui/icons/MusicNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Spinner from "react-spinkit";
import { execute } from "./voice";

const styles = (theme: Theme): StyleRules => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "block",
    paddingRight: "10px",
  },
  list: {
    // position: "relative",
    marginLeft: "10px",
    borderBottom: "solid 3px #cce4ff",
  },
  title: {
    width: "30%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    width: "40%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  iconButtonGroup: {
    width: "16%",
    textAlign: "right",
    display: "inline-block",
  },
  iconButton: {
    // width: "25%",
    // height: "25%",
  },
});

interface OwnProps {
  folders: Fold[];
  files: File[];
  clickPlay: (folderId: number, fileId: number, playBefore: boolean) => void;
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  clickAll: (checked: boolean) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Body: FC<Props> = ({
  classes,
  folders,
  files,
  clickPlay,
  clickFile,
  clickAll,
}) => {
  const [allCheck, setAllCheck] = React.useState(false);

  const targetFoldersId = folders
    .filter((fold) => fold.opened)
    .map((fold) => fold.folderId);
  const targetFiles = files.filter(
    (file) => targetFoldersId.indexOf(file.folderId) !== -1 && file.indicate
  );

  const handlerSpeak = (folderId: number, fileId: number, text: string) => {
    if (folderId === 0 || fileId === 0) {
      files
        .filter((file) => file.checked)
        .forEach((file) => {
          execute(file.text);
        });
    } else {
      (async () => {
        const res = await execute(text);
        console.log(res);
      })();
    }
    clickPlay(1, 1, false);
  };

  return (
    <div>
      <div
        style={{
          width: "90%",
          marginLeft: "26px",
          display: "inline",
        }}
      >
        <Checkbox
          edge="start"
          checked={allCheck}
          tabIndex={-1}
          onClick={() => {
            const check = !allCheck;
            setAllCheck(check);
            clickAll(check);
          }}
        />
      </div>
      <div
        style={{
          width: "90%",
          marginLeft: "2px",
          display: "inline",
          textAlign: "right",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="small"
          // style={{ width: "100px" }}
          endIcon={<PlayCircleOutline />}
          onClick={() => {
            handlerSpeak(0, 0, "aa");
          }}
        >
          Play
        </Button>
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
                className={classes.title}
              />
              <ListItemText
                id={`checkbox-list-text-${file.fileId}`}
                primary={file.text}
                className={classes.text}
              />
              <div className={classes.iconButtonGroup}>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
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
                    handlerSpeak(file.folderId, file.fileId, file.text);
                  }}
                >
                  <MusicNote />
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    // handlerSpeak(file.text);
                  }}
                ></IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    // handlerSpeak(file.text);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  className={classes.iconButton}
                  onClick={() => {
                    // handlerSpeak(file.text);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default withStyles(styles)(Body);
