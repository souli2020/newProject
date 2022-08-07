import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Search from "./components/Search";
import Grid from "./components/Grid";
import { ContextProvider } from "./components/Context";
import { useContext } from "react";
import { Context } from "./components/Context";

const theme = {
  bg: "red",
  color: "white",
};
function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Header />
      <Search />
      <Grid />
    </ContextProvider>
  );
}

export default App;
