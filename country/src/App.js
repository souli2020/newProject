import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Search from "./components/Search";
import Grid from "./components/Grid";
import { ContextProvider } from "./components/Context";
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
