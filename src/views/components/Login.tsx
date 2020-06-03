import React, { FC } from "react";
import {
  withStyles,
  WithStyles,
  StyleRules,
  Theme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme): StyleRules => ({
  root: {
    width: "100%",
    height: "100%",
  },
  inputZone: {
    width: "60%",
    height: "60%",
    paddingTop: "60px",
    textAlign: "center",
    margin: "0 auto",
    border: "2px solid #666666",
    borderRadius: "12px",
    boxShadow: "3px 3px 3px #666666",
  },
  media: {
    height: 140,
  },
});

interface OwnProps {
  loginAction: (id: string, pw: string) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Login: FC<Props> = ({ classes, loginAction }) => {
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        {/* <Paper elevation={3} className={classes.inputZone}> */}
        <div className={classes.inputZone}>
          <Typography variant="h2" component="h2">
            Learn Speak
          </Typography>
          <FormControl>
            <TextField id="mail-address" label="メールアドレス" />
            <TextField id="password" label="パスワード" />
            <Link
              href="#"
              onClick={preventDefault}
              style={{ fontSize: "16px", marginTop: "8px" }}
            >
              ログインに困った場合
            </Link>

            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "24px" }}
            >
              ログイン
            </Button>
          </FormControl>
        </div>
        {/* </Paper> */}
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(Login);
