import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AgentList from "./routes/AgentList/AgentList";
import Arsenal from "./routes/Arsenal/Arsenal";
import { GlobalStyle } from "./styles/globalStyles.css";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<AgentList />} />
        <Route path="/arsenal" element={<Arsenal />} />
      </Routes>
    </>
  );
}

export default App;
