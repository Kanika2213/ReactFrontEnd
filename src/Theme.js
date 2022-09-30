import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Comic Sans MS",
      "cursive",
      "sans-serif",
    ].join(","),
    htmlFontSize: 10,
  },
});

export default theme;