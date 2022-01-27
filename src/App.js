import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AgentList from "./routes/AgentList/AgentList";
import Arsenal from "./routes/Arsenal/Arsenal";
import Maps from "./routes/Maps/Maps";
import { GlobalStyle } from "./styles/globalStyles.css";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<AgentList />} />
        <Route path="/arsenal" element={<Arsenal />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </>
  );
}

export default App;
