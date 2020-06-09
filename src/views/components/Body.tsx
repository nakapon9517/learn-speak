import React, { FC, ChangeEvent, useState } from "react";
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
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import MusicNote from "@material-ui/icons/MusicNote";
// import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import Fab from "@material-ui/core/Fab";
import Folder from "@material-ui/icons/Folder";
import AddIcon from "@material-ui/icons/Add";
import Spinner from "react-spinkit";
import { execute } from "./voice";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme: Theme): StyleRules => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "block",
    paddingRight: "10px",
  },
  title: {
    width: "20%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    width: "40%",
    marginLeft: "8px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  iconButtonGroup: {
    width: "16%",
    textAlign: "right",
    display: "inline-block",
  },
});

interface OwnProps {
  folders: Fold[];
  files: File[];
  clickPlay: (folderId: number, fileId: number, playBefore: boolean) => void;
  clickFile: (folderId: number, fileId: number, checked: boolean) => void;
  clickAll: (checked: boolean) => void;
  fileAdd: (folderId: number, name: string, text: string) => void;
  fileDel: (folderId: number, fileId: number) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;
type AlertType = "success" | "error" | "warning" | "info";

const Body: FC<Props> = ({
  classes,
  folders,
  files,
  clickPlay,
  clickFile,
  clickAll,
  fileAdd,
  fileDel,
}) => {
  const DEFAULT_CATEGORY = 999;
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");
  const [deleteFolderId, setDeleteFolderId] = React.useState(0);
  const [deleteFileId, setDeleteFileId] = React.useState(0);
  const [alertType, setErrorType] = useState<AlertType>("success");
  const [isErrorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [allCheck, setAllCheck] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputCategory, setInputCategory] = useState(DEFAULT_CATEGORY);

  const targetFoldersId = folders
    .filter((fold) => fold.opened)
    .map((fold) => fold.folderId);
  const targetFiles = files.filter(
    (file) => targetFoldersId.indexOf(file.folderId) !== -1 && file.indicate
  );

  const handlerSpeak = (
    folderId: number,
    fileId: number,
    name: string,
    text: string
  ) => {
    if (folderId === 0 || fileId === 0) {
      clickPlay(folderId, fileId, true);
      const targetFoldId = [
        folders
          .filter((fold) => fold.opened === true)
          .map((fold) => {
            return fold.folderId;
          }),
      ];
      const targetFiles = files.filter(
        (file) => targetFoldId[0].includes(file.folderId) && file.checked
      );
      if (targetFiles.length > 0) {
        targetFiles.forEach((file) => {
          execute(file.name);
          execute(file.text);
        });
      } else {
        setError("warning", true, "1つ以上チェックしてください。");
      }
    } else {
      (async () => {
        execute(name);
        execute(text);
      })();
    }
  };

  const handleInputNameChange = (event: ChangeEvent<{ value: unknown }>) => {
    setInputName(event.target.value as string);
  };
  const handleInputTextChange = (event: ChangeEvent<{ value: unknown }>) => {
    setInputText(event.target.value as string);
  };
  const handleCategoryChange = (event: ChangeEvent<{ value: unknown }>) => {
    setInputCategory(event.target.value as number);
  };

  function setInit() {
    setInputName("");
    setInputText("");
    setInputCategory(folders[0].folderId);
  }

  function useHandleFileAdd() {
    if (!inputName || inputName === "") {
      setError("error", true, "ファイル名を入力してください。");
    } else if (!inputText || inputText === "") {
      setError("error", true, "テキストを入力してください。");
    } else if (inputCategory === DEFAULT_CATEGORY) {
      setError("error", true, "フォルダを選択してください。");
    } else {
      fileAdd(inputCategory, inputName, inputText);
      setInit();
      setError("success", true, "登録しました。");
    }
  }

  function setError(alertType: AlertType, isError: boolean, message: string) {
    setErrorType(alertType);
    setErrorOpen(isError);
    setErrorMessage(message);
  }

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
          width: "96%",
          display: "inline-block",
        }}
      >
        <FormControl
          style={{
            height: "24px",
            marginLeft: "16px",
            marginTop: "11px",
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
        </FormControl>
        {/* Name入力 */}
        <FormControl
          style={{
            width: "30%",
            display: "inline-block",
          }}
        >
          <InputLabel>ファイル名</InputLabel>
          <Input
            id="input-name"
            style={{ width: "100%" }}
            value={inputName}
            onChange={handleInputNameChange}
            autoComplete={"false"}
          ></Input>
        </FormControl>
        {/* Text入力 */}
        <FormControl
          style={{
            width: "30%",
            display: "inline-block",
            marginLeft: "12px",
          }}
        >
          <InputLabel>テキスト</InputLabel>
          <Input
            id="input-text"
            style={{ width: "100%" }}
            value={inputText}
            onChange={handleInputTextChange}
            autoComplete={"false"}
          ></Input>
        </FormControl>
        {/* フォルダ選択 */}
        <FormControl
          style={{
            width: "16%",
            display: "inline-block",
            marginLeft: "12px",
          }}
        >
          <Select
            id="demo-simple-select"
            style={{
              width: "100%",
              height: "30px",
              marginTop: "18px",
            }}
            value={inputCategory}
            onChange={handleCategoryChange}
          >
            {folders.map((folder) => (
              <MenuItem
                value={folder.folderId}
                key={folder.folderId + folder.name}
              >
                <ListItem
                  style={{
                    height: "24px",
                    overflow: "hidden",
                    fontSize: "8px",
                  }}
                >
                  {getFolderIcon(folder.category)}
                  {"　"}
                  <ListItemText primary={folder.name}></ListItemText>
                </ListItem>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          style={{
            marginRight: "4px",
            marginTop: "8px",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <Fab
              color="default"
              aria-label="add"
              size="small"
              style={{
                marginLeft: "4px",
                marginRight: "8px",
                marginBottom: "8px",
              }}
              onClick={useHandleFileAdd}
            >
              <AddIcon />
            </Fab>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              endIcon={<PlayCircleOutline />}
              onClick={() => {
                handlerSpeak(0, 0, "", "");
              }}
            >
              Play
            </Button>
          </div>
        </FormControl>
      </FormControl>
      <List component="nav" className={classes.root}>
        {targetFiles.map((file, index) => (
          <React.Fragment
            key={String(file.folderId) + "-" + String(file.fileId)}
          >
            <ListItem
              key={file.fileId}
              role={undefined}
              dense
              button
              divider={true}
              onClick={() => {
                clickFile(file.folderId, file.fileId, file.checked);
              }}
            >
              <Checkbox
                edge="start"
                checked={file.checked}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": `checkbox-list-label-${file.fileId}`,
                }}
                color="default"
              />
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
                <IconButton edge="end" size="small">
                  {file.listening ? (
                    <Spinner name="line-scale" color="gray" fadeIn="none" />
                  ) : (
                    ""
                  )}
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  onClick={() => {
                    handlerSpeak(
                      file.folderId,
                      file.fileId,
                      file.name,
                      file.text
                    );
                  }}
                >
                  <MusicNote />
                </IconButton>
                <IconButton
                  edge="end"
                  size="small"
                  onClick={() => {
                    setDialogOpen(true);
                    setDialogMessage("削除してもよろしいでしょうか？");
                    setDeleteFolderId(file.folderId);
                    setDeleteFileId(file.fileId);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </ListItem>
          </React.Fragment>
        ))}
        <Dialog
          open={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{dialogMessage}</DialogTitle>
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                fileDel(deleteFolderId, deleteFileId);
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
    </React.Fragment>
  );
};

const getFolderIcon = (type: string) => {
  switch (type) {
    case "action":
      return <Folder color="action" style={{ fontSize: "20px" }} />;
    case "disabled":
      return <Folder color="disabled" style={{ fontSize: "20px" }} />;
    case "primary":
      return <Folder color="primary" style={{ fontSize: "20px" }} />;
    case "secondary":
      return <Folder color="secondary" style={{ fontSize: "20px" }} />;
    case "error":
      return <Folder color="error" style={{ fontSize: "20px" }} />;
    default:
      return <Folder />;
  }
};

export default withStyles(styles)(Body);
