import React, { FC, useEffect } from "react";
import { Fold } from "speak";
import {
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
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
  isOpen: boolean;
  folders: Fold[];
  folderAdd: (id: number, name: string) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

export const AddFolderDialog: FC<Props> = ({
  classes,
  isOpen,
  folders,
  folderAdd,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [folderName, setFolderName] = React.useState("");
  const dialogName = React.createRef<HTMLInputElement>();

  useEffect(() => {
    setOpenModal(isOpen);
    if (dialogName) {
      dialogName.current?.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleAddFold = (name: string) => {
    if (!name || name === "") {
      alert("name is required");
    } else {
      folderAdd(folders.length, name);
      handleClose();
    }
  };
  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Add Music Box"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <TextField
            autoFocus
            margin="dense"
            id="standard-basic"
            label="name"
            ref={dialogName}
            style={{ marginBottom: "36px" }}
            required={true}
            onChange={(event) => {
              setFolderName(event.target.value);
            }}
          />
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
  );
};

export default withStyles(styles)(AddFolderDialog);
