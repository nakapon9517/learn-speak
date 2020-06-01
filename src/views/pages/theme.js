import { createMuiTheme } from "@material-ui/core/styles";

export let theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontSize: 12,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
  },
});
