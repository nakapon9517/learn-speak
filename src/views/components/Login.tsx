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
import { AnimateKeyframes } from "react-simple-animate";

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
  loginAuth: boolean;
  loginAction: (id: string, pw: string) => void;
}

type Props = WithStyles<typeof styles> & OwnProps;

const Login: FC<Props> = ({ classes, loginAuth, loginAction }) => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if ((mail === "" || password === "") && !loginAuth) {
      alert("入力したメールアドレス、もしくはパスワードが間違っています。");
    } else {
      loginAction(mail, password);
    }
  };

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        {/* <Paper elevation={3} className={classes.inputZone}> */}
        <div className={classes.inputZone}>
          <AnimateKeyframes
            play={true}
            pause={false}
            iterationCount="1"
            direction="alternate"
            duration={3}
            keyframes={[
              "opacity: 0",
              "opacity: 1",
              // "transform: translateY(40px)",
              // "transform: translateY(20px)",
            ]}
          >
            <Typography variant="h2" component="h2">
              Learn Speak
            </Typography>
          </AnimateKeyframes>
          <FormControl>
            <TextField
              id="mail-address"
              label="メールアドレス"
              type="mail-address"
              style={{ marginTop: "12px" }}
              value={mail}
              autoComplete={"off"}
              onChange={(event) => {
                setMail(event.target.value);
              }}
            />
            <TextField
              id="password"
              label="パスワード"
              type="password"
              style={{ marginTop: "12px" }}
              value={password}
              autoComplete={"off"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "24px" }}
              onClick={handleLogin}
            >
              ログイン
            </Button>
            <Link
              href="#"
              onClick={() => {
                alert(
                  "ヒント：メールアドレス・パスワードの両方に入力してみよう！"
                );
              }}
              style={{ fontSize: "14px", marginTop: "8px" }}
            >
              ログインに困った場合
            </Link>
          </FormControl>
        </div>
        {/* </Paper> */}
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(Login);
