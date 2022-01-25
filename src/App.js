import Navbar from "./components/Navbar/Navbar";
import AgentList from "./routes/AgentList/AgentList";
import { GlobalStyle } from "./styles/globalStyles.css";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AgentList />
    </>
  );
}

export default App;
