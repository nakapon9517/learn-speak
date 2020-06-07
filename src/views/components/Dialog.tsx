import React, { FC, useState } from "react";
import { WithStyles, StyleRules } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  title: string;
  text: string;
  isConfirm: boolean;
  loginAction: (id: string, pw: string) => void;
}

const DialogConfirm: FC<Props> = ({ title, text, isConfirm, loginAction }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    loginAction("", "");
  };

  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        "ログアウトしてもよろしいでしょうか？"
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">""</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin} color="primary">
          はい
        </Button>
      </DialogActions>
    </div>
  );
};

export default DialogConfirm;
