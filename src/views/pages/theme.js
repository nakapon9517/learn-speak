import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  type: "secondary",
  palette: {
    background: {
      default: "#6abf69",
      paper: "#6abf69",
    },
    action: {
      light: "#90caf9", // 基本の色よりも明るい色
      main: "#c3fdff", // 基本の色
      dark: "#5d99c6", // 基本の色よりも暗い色
      contrastText: "#fff", // テキストの色
    },
    disabled: {
      light: "#a4a4a4", // 基本の色よりも明るい色
      main: "#757575", // 基本の色
      dark: "#494949", // 基本の色よりも暗い色
    },
    primary: {
      light: "#fffff7", // 基本の色よりも明るい色
      main: "#fff9c4", // 基本の色
      dark: "#cbc693", // 基本の色よりも暗い色
      contrastText: "#000", // テキストの色
    },
    secondary: {
      light: "#c5e1a5", // 基本の色よりも明るい色
      main: "#f8ffd7", // 基本の色
      dark: "#94af76", // 基本の色よりも暗い色
      contrastText: "#000", // テキストの色
    },
    error: {
      light: "#ff7539", // 基本の色よりも明るい色
      main: "#ff3d00", // 基本の色
      dark: "#c30000", // 基本の色よりも暗い色
      contrastText: "#fff",
    },
  },
});
